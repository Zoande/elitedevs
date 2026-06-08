(function () {
  const sessionKey = "elitedevs_developer_password";
  const lock = document.getElementById("developer-lock");
  const dashboard = document.getElementById("developer-dashboard");
  const form = document.getElementById("developer-login");
  const passwordInput = document.getElementById("developer-password");
  const loginStatus = document.getElementById("developer-login-status");
  const dashboardStatus = document.getElementById("developer-dashboard-status");
  const refreshButton = document.getElementById("developer-refresh");
  const lockButton = document.getElementById("developer-lock-button");
  const recentClicksBody = document.getElementById("recent-clicks-body");

  function getPassword() {
    return sessionStorage.getItem(sessionKey) || "";
  }

  function setStatus(node, message) {
    if (node) {
      node.textContent = message || "";
    }
  }

  function formatTime(value) {
    if (!value) {
      return "-";
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return String(value);
    }

    return date.toLocaleString([], {
      dateStyle: "medium",
      timeStyle: "short",
    });
  }

  function extensionLabel(value) {
    if (value === "focus-blocker") {
      return "Focus Blocker";
    }

    if (value === "tab-sorter-pro") {
      return "Tab Sorter Pro";
    }

    if (value === "human-doc-typer") {
      return "HumanDocTyper";
    }

    return value || "-";
  }

  function renderMetrics(metrics) {
    const byExtension = metrics.by_extension || {};
    document.getElementById("metric-total-clicks").textContent = metrics.total_clicks ?? 0;
    document.getElementById("metric-focus-clicks").textContent = byExtension["focus-blocker"] ?? 0;
    document.getElementById("metric-tab-clicks").textContent = byExtension["tab-sorter-pro"] ?? 0;
    document.getElementById("metric-human-doc-clicks").textContent = byExtension["human-doc-typer"] ?? 0;
    document.getElementById("metric-latest-click").textContent = formatTime(metrics.latest_click);

    const recentClicks = Array.isArray(metrics.recent_clicks) ? metrics.recent_clicks : [];
    if (recentClicks.length === 0) {
      recentClicksBody.innerHTML = '<tr><td colspan="3">No extension clicks recorded yet.</td></tr>';
      return;
    }

    recentClicksBody.innerHTML = recentClicks
      .map((click) => {
        const location = click.location || click.country || "Unknown";
        return `
          <tr>
            <td>${formatTime(click.clicked_at || click.time)}</td>
            <td>${extensionLabel(click.extension)}</td>
            <td>${location}</td>
          </tr>
        `;
      })
      .join("");
  }

  async function loadMetrics(password) {
    setStatus(dashboardStatus, "Loading metrics...");
    const response = await fetch("/api/developer-metrics", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(payload.message || "Unable to load dashboard metrics.");
    }

    renderMetrics(payload.metrics || payload);
    setStatus(dashboardStatus, `Last updated ${formatTime(new Date().toISOString())}`);
  }

  async function unlock(password) {
    await loadMetrics(password);
    sessionStorage.setItem(sessionKey, password);
    lock.hidden = true;
    dashboard.hidden = false;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const password = passwordInput.value.trim();
    if (!password) {
      return;
    }

    setStatus(loginStatus, "Checking password...");
    try {
      await unlock(password);
      passwordInput.value = "";
      setStatus(loginStatus, "");
    } catch (error) {
      sessionStorage.removeItem(sessionKey);
      setStatus(loginStatus, error.message);
    }
  });

  refreshButton.addEventListener("click", async () => {
    try {
      await loadMetrics(getPassword());
    } catch (error) {
      setStatus(dashboardStatus, error.message);
    }
  });

  lockButton.addEventListener("click", () => {
    sessionStorage.removeItem(sessionKey);
    dashboard.hidden = true;
    lock.hidden = false;
    passwordInput.focus();
  });

  const savedPassword = getPassword();
  if (savedPassword) {
    unlock(savedPassword).catch(() => {
      sessionStorage.removeItem(sessionKey);
      dashboard.hidden = true;
      lock.hidden = false;
    });
  }
})();
