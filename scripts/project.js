(function () {
  const projects = window.PROJECTS || [];
  const pageId = document.body.dataset.projectId;
  const launchMap = {
    "zoande-brokersim": {
      type: "play",
      label: "Play Project",
      href: "../play/zoande-brokersim/",
      note: "Static build is bundled in this workspace."
    },
    "zoande-ahhh": {
      type: "play",
      label: "Play Project",
      href: "../play/zoande-ahhh/",
      note: "Static build is bundled in this workspace."
    },
    "zoande-onlineagent": {
      type: "run",
      label: "Run Project",
      href: "http://localhost:4310",
      note: "Run mode uses local Node server on port 4310."
    },
    "zoande-call-of-idk": {
      type: "play",
      label: "Play Project",
      href: "../play/zoande-call-of-idk/",
      note: "Static build is bundled in this workspace."
    },
    "dh-polymarket-bot": {
      type: "play",
      label: "Play Project",
      href: "../play/dh-polymarket-bot/",
      note: "Static build is bundled in this workspace."
    },
    "dh-typing-platformer": {
      type: "run",
      label: "Run Project",
      href: "http://localhost:4311",
      note: "Run mode uses local Next server on port 4311."
    },
    "dh-metrozone": {
      type: "play",
      label: "Play MetroZone",
      href: "https://metrozoone.vercel.app",
      note: "Live on Vercel — opens in a new tab."
    },
    "dh-citybuilder": {
      type: "play",
      label: "Play Project",
      href: "../play/dh-citybuilder/index.html",
      note: "Static project is copied directly from source."
    },
    "dh-task-sorter-app": {
      type: "run",
      label: "Run Project",
      href: "http://localhost:4313",
      note: "Run mode uses local Next server on port 4313."
    },
    "dh-isrlo-ibdp-subject": {
      type: "play",
      label: "Play Project",
      href: "../play/dh-isrlo-ibdp-subject/index.html",
      note: "Static project is copied directly from source."
    },
    "dh-sticky-notes-app": {
      type: "run",
      label: "Run Project",
      href: "http://localhost:4312",
      note: "Run mode uses local Next server on port 4312."
    },
    "dh-studymaster": {
      type: "play",
      label: "Play Project",
      href: "../play/dh-studymaster/",
      note: "Static build is bundled in this workspace."
    },
    "dh-swapspot": {
      type: "play",
      label: "Play Project",
      href: "../play/dh-swapspot/",
      note: "Static build is bundled in this workspace."
    }
  };

  const project = projects.find((item) => item.id === pageId);
  const launch = launchMap[pageId];

  if (!project) {
    const root = document.getElementById("project-page");
    if (root) {
      root.innerHTML = "<h1>Project not found</h1><p>The project definition is missing.</p>";
    }
    return;
  }

  document.title = `${project.title} | EliteDevs`;

  const titleEl = document.getElementById("project-title");
  const ownerEl = document.getElementById("project-owner");
  const summaryEl = document.getElementById("project-summary");
  const stageEl = document.getElementById("project-stage");
  const statusEl = document.getElementById("project-status");
  const techEl = document.getElementById("project-tech");
  const detailsEl = document.getElementById("project-details");
  const stepsEl = document.getElementById("project-steps");
  const screenshotsEl = document.getElementById("project-screenshots");
  const repoLinkEl = document.getElementById("project-repo");
  const repoLinkEl2 = document.getElementById("project-repo-link");
  const localPathEl = document.getElementById("project-local-path");
  const actionsWrap = document.querySelector(".project-hero .actions");

  if (titleEl) titleEl.textContent = project.title;
  if (ownerEl) ownerEl.textContent = project.owner;
  if (summaryEl) summaryEl.textContent = project.summary;
  if (stageEl) stageEl.textContent = project.stage;
  if (statusEl) statusEl.textContent = project.status;

  if (repoLinkEl) {
    repoLinkEl.href = project.repoUrl;
  }

  if (repoLinkEl2) {
    repoLinkEl2.href = project.repoUrl;
  }

  if (localPathEl) {
    localPathEl.textContent = project.localPath;
  }

  if (techEl) {
    techEl.innerHTML = project.tech.map((item) => `<span class="chip">${item}</span>`).join("");
  }

  if (detailsEl) {
    detailsEl.innerHTML = project.details.map((item) => `<li>${item}</li>`).join("");
  }

  if (stepsEl) {
    stepsEl.innerHTML = project.deliverableSteps.map((item) => `<li>${item}</li>`).join("");
  }

  if (screenshotsEl) {
    const screenshots = Array.isArray(project.screenshots) ? project.screenshots : [];
    screenshotsEl.innerHTML = screenshots.map((item) => `<li>${item}</li>`).join("");
    if (screenshotsEl.parentElement) {
      screenshotsEl.parentElement.style.display = screenshots.length ? "block" : "none";
    }
  }

  if (launch && actionsWrap) {
    const launchLink = document.createElement("a");
    launchLink.className = "button launch-button";
    if (launch.type === "run") {
      launchLink.classList.add("run");
    }
    launchLink.href = launch.href;
    launchLink.target = "_blank";
    launchLink.rel = "noopener noreferrer";
    launchLink.textContent = launch.label;
    actionsWrap.insertBefore(launchLink, actionsWrap.firstChild);
  }

  if (launch && localPathEl && localPathEl.parentElement) {
    const launchNote = document.createElement("p");
    launchNote.className = "small-note launch-note";
    launchNote.textContent = launch.note;
    localPathEl.parentElement.appendChild(launchNote);
  }
})();

// Add AOS attributes to elements for smooth animations
document.addEventListener('DOMContentLoaded', function() {
  const projectHero = document.querySelector('.project-hero');
  const panels = document.querySelectorAll('.panel');
  
  if (projectHero && !projectHero.hasAttribute('data-aos')) {
    projectHero.setAttribute('data-aos', 'fade-up');
    projectHero.setAttribute('data-aos-duration', '700');
  }
  
  panels.forEach((panel, index) => {
    if (!panel.hasAttribute('data-aos')) {
      panel.setAttribute('data-aos', 'fade-up');
      panel.setAttribute('data-aos-duration', '700');
      panel.setAttribute('data-aos-delay', String(Math.min(index * 150, 450)));
    }
  });
  
  // Reinitialize AOS to pick up the new attributes
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
});
