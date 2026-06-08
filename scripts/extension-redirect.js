(function () {
  const extensions = {
    "focus-blocker": {
      name: "Focus Blocker (DNR Redirect)",
      url: "https://chromewebstore.google.com/detail/dlbjkoeipepfliekbhiojgalkbdhhogi?utm_source=item-share-cb",
    },
    "tab-sorter-pro": {
      name: "Tab Sorter Pro",
      url: "https://chromewebstore.google.com/detail/tab-sorter-pro/iicmneboehhnamjbbnfblejfgemgihnd?utm_source=item-share-cb",
    },
    "human-doc-typer": {
      name: "HumanDocTyper",
      url: "https://chromewebstore.google.com/detail/human-doc-typer/jnogomlcblccgnpnodfgeecahhpcfaod",
    },
  };

  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const extensionId = pathParts[0] || "";
  const extension = extensions[extensionId];
  const status = document.getElementById("redirect-status");

  function redirectNow(targetUrl) {
    window.location.replace(targetUrl);
  }

  if (!extension) {
    if (status) {
      status.textContent = "Unknown extension link.";
    }
    return;
  }

  if (status) {
    status.textContent = `Redirecting to ${extension.name}...`;
  }

  const payload = JSON.stringify({
    extension: extensionId,
    extension_name: extension.name,
    client_timestamp: new Date().toISOString(),
    path: window.location.pathname,
  });

  const fallback = window.setTimeout(() => redirectNow(extension.url), 350);

  try {
    if (navigator.sendBeacon) {
      const accepted = navigator.sendBeacon(
        "/api/extension-click",
        new Blob([payload], { type: "application/json" })
      );
      window.clearTimeout(fallback);
      window.setTimeout(() => redirectNow(extension.url), accepted ? 75 : 0);
      return;
    }

    fetch("/api/extension-click", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: payload,
      keepalive: true,
    }).finally(() => {
      window.clearTimeout(fallback);
      redirectNow(extension.url);
    });
  } catch {
    window.clearTimeout(fallback);
    redirectNow(extension.url);
  }
})();
