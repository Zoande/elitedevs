(function () {
  const projects = window.PROJECTS || [];
  const grid = document.getElementById("project-grid");

  if (!grid) {
    return;
  }

  // Pick most important projects to display (6 total)
  const featuredIds = [
    "dh-brokersim",
    "zoande-stellarfronts",
    "dh-swapspot",
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
      const extIcon = extIconMap[project.id]
        ? `<img src="${extIconMap[project.id]}" alt="${project.title} icon" style="width:40px;height:40px;border-radius:10px;margin-bottom:0.75rem;display:block;" />`
        : "";
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
            <a class="button ghost" href="${externalLink}" target="_blank" rel="noopener noreferrer">${linkLabel}</a>
            <a class="button" href="projects/${project.id}">Open Page</a>
          </div>
        </article>
      `;
    })
    .join("");
})();
