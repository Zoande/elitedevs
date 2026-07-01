(function () {
  const projects = window.PROJECTS || [];
  const grid = document.getElementById("project-grid");

  if (!grid) {
    return;
  }

  // Pick most important projects to display (6 total)
  const featuredIds = [
    "dh-metrozone",
    "zoande-brokersim",
    "zoande-stellarfronts",
    "pablo-pocketvault",
    "dima-tab-sorter-pro",
    "pablo-focus-blocker",
    "dima-human-doc-typer"
  ];
  
  const displayedProjects = projects.filter(p => featuredIds.includes(p.id));

  grid.innerHTML = displayedProjects
    .map((project, index) => {
      const tech = project.tech.slice(0, 3).map((item) => `<span class="chip">${item}</span>`).join("");
      const aosDelay = Math.min(index * 75, 450);
      const externalLink = project.repoUrl || project.extUrl;
      const linkLabel = project.extUrl ? "Get Extension" : "Repo";
      const extIconMap = {
        "dima-tab-sorter-pro": "/images/ext-tab-sorter.png",
        "pablo-focus-blocker": "/images/ext-focus.png",
        "dima-human-doc-typer": "/images/ext-autotyper.png"
      };
      const pocketVaultLogo =
        `<div style="width:40px;height:40px;border-radius:10px;margin-bottom:0.75rem;background:#14342f;display:flex;align-items:center;justify-content:center;">` +
        `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">` +
        `<rect x="5" y="10.5" width="14" height="9.5" rx="2" stroke="#ffffff" stroke-width="2"/>` +
        `<path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" stroke="#ffffff" stroke-width="2"/>` +
        `<circle cx="12" cy="15" r="1.4" fill="#ffffff"/></svg></div>`;
      const extIcon = extIconMap[project.id]
        ? `<img src="${extIconMap[project.id]}" alt="${project.title} icon" style="width:40px;height:40px;border-radius:10px;margin-bottom:0.75rem;display:block;" />`
        : project.id === "pablo-pocketvault"
        ? pocketVaultLogo
        : "";
      const primaryBtn = project.accessUrl
        ? `<a class="button ghost" href="${project.accessUrl}">${project.accessLabel || "Request Access"}</a>`
        : project.playUrl
        ? `<a class="button ghost" href="${project.playUrl}" target="_blank" rel="noopener noreferrer">Play Now</a>`
        : `<a class="button ghost" href="${externalLink}" target="_blank" rel="noopener noreferrer">${linkLabel}</a>`;
      return `
        <article
          class="project-card"
          aria-label="${project.title}"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="${aosDelay}"
        >
          ${extIcon}
          <p class="owner">${project.owner}</p>
          <h3>${project.title}</h3>
          <p class="summary">${project.summary}</p>
          <div class="chip-row">${tech}</div>
          <div class="card-actions">
            ${primaryBtn}
            <a class="button" href="projects/${project.id.replace(/^(dh|dima|pablo|zoande)-/, '')}">Open Page</a>
          </div>
        </article>
      `;
    })
    .join("");
})();
