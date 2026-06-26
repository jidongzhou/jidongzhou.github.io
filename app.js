const insights = [
  {
    topic: "Regulating personalized pricing",
    title: "Will banning personalized pricing work?",
    url: "https://insights.som.yale.edu/insights/will-banning-personalized-pricing-work",
  },
  {
    topic: "Personalization and privacy choice",
    title: "Sharing Your Data Comes at Cost and Not Just to You",
    url: "https://insights.som.yale.edu/insights/sharing-your-data-comes-at-cost-and-not-just-to-you",
  },
  {
    topic: "AI and consumer search",
    title: "Are AI Chatbots Changing How We Shop?",
    url: "https://insights.som.yale.edu/insights/are-ai-chatbots-changing-how-we-shop",
  },
  {
    topic: "Personalized pricing",
    title: "The Perils of Personalized Pricing",
    url: "https://insights.som.yale.edu/insights/the-perils-of-personalized-pricing",
  },
  {
    topic: "Open banking",
    title: "Why Making Banking Data Portable Isn't Always Good for Borrowers",
    url: "https://insights.som.yale.edu/insights/why-making-banking-data-portable-isnt-always-good-for-borrowers",
  },
];

const papers = [
  {
    kind: "published",
    title: "Personalization and Privacy Choice",
    detailPrefix: "With Andrew Rhodes. 2025. Forthcoming in ",
    journal: "RAND Journal of Economics",
    detailSuffix: ".",
    url: "https://drive.google.com/file/d/1N25R9BBVPVrlsZ5hvLfQD-2x4rpscJcG/view?usp=sharing",
    links: [{ label: "Slides", url: "https://drive.google.com/file/d/1WcKlWnXCt9BVlm2EDoO9Ds57n-06ANxK/view?usp=sharing" }],
  },
  {
    kind: "published",
    title: "Personalized Pricing and Competition",
    detailPrefix: "With Andrew Rhodes. ",
    journal: "American Economic Review",
    detailSuffix: ", 2024, 114(7), 2141-2170.",
    url: "https://drive.google.com/file/d/1ZuFuQdSdoqyYegQ3Cf-k2M0_GKQpboYR/view?usp=sharing",
    links: [
      { label: "Slides", url: "https://drive.google.com/file/d/11g416h5Tn3MV0IQZK4fVGJpQaQqKUSHU/view?usp=sharing" },
      { label: "Appendix", url: "https://drive.google.com/file/d/181i44EwZSPP-683YHHMvOQcIwn-OPqhp/view?usp=sharing" },
      { label: "Privacy version", url: "https://drive.google.com/file/d/1RYQ8lqHM_-nJ0fjRO0ED61pmygalChir/view?usp=sharing" },
    ],
  },
  {
    kind: "published",
    title: "A Model of Sequential Crisis Management",
    detailPrefix: "With Fei Li. ",
    journal: "American Economic Journal: Microeconomics",
    detailSuffix: ", 2023, 15(4), 319-349.",
    url: "https://drive.google.com/file/d/1eylRoW8-fPLMg9c6VS0-n5zOVfsaC8NV/view?usp=share_link",
    links: [{ label: "Working paper", url: "https://drive.google.com/file/d/1Ys0eAADWP9YctwZG9NAHMJ253K_sHBhG/view?usp=share_link" }],
  },
  {
    kind: "published",
    title: "Open Banking: Credit Market Competition When Borrowers Own the Data",
    detailPrefix: "With Zhiguo He and Jing Huang. ",
    journal: "Journal of Financial Economics",
    detailSuffix: ", 2023, 147(2), 449-474. European Financial Association 2021 Best Conference Paper Prize.",
    url: "https://drive.google.com/file/d/1oY6DXDZKP-7Vo2EmLvVJ6J66IX_3ZaHj/view?usp=sharing",
    links: [{ label: "Slides", url: "https://drive.google.com/file/d/1LCNujeRXGXqrx3LR6Pa0EvWdAvUk-NOT/view?usp=sharing" }],
  },
  {
    kind: "published",
    title: "Consumer Information and the Limits to Competition",
    detailPrefix: "With Mark Armstrong. ",
    journal: "American Economic Review",
    detailSuffix: ", 2022, 112(2), 534-577.",
    url: "https://drive.google.com/file/d/1jcaqNL9YwDIzULGYW-6k_nbs3v4CRitX/view?usp=sharing",
    links: [{ label: "Slides", url: "https://drive.google.com/file/d/1h5Z9U3_smeZn_TU3u5QDinlJJrfdDyCn/view?usp=sharing" }],
  },
  {
    kind: "published",
    title: "Mixed Bundling in Oligopoly Markets",
    detailPrefix: "",
    journal: "Journal of Economic Theory",
    detailSuffix: ", 2021, 194, 105257.",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0022053121000740",
  },
  {
    kind: "published",
    title: "Multiproduct Intermediaries",
    detailPrefix: "With Andrew Rhodes and Makoto Watanabe. ",
    journal: "Journal of Political Economy",
    detailSuffix: ", 2021, 129(2), 421-464.",
    url: "https://www.journals.uchicago.edu/doi/abs/10.1086/711917",
    links: [
      { label: "Supplement", url: "https://drive.google.com/open?id=1JsCXqgkwcvf79VA21TV2f7vt7_WZwTwt" },
      { label: "Slides", url: "https://drive.google.com/file/d/1UvWVi7i0y39lQLn--pBKWf17h5ILaxgq/view?usp=sharing" },
    ],
  },
  {
    kind: "published",
    title: "Consumer Search and Retail Market Structure",
    detailPrefix: "With Andrew Rhodes. ",
    journal: "Management Science",
    detailSuffix: ", 2019, 65(6), 2607-2623.",
    url: "https://pubsonline.informs.org/doi/10.1287/mnsc.2018.3058",
  },
  {
    kind: "published",
    title: "Search and Categorization",
    detailPrefix: "With Chaim Fershtman and Arthur Fishman. ",
    journal: "International Journal of Industrial Organization",
    detailSuffix: ", 2018, 57, 225-254.",
    url: "https://www.sciencedirect.com/science/article/pii/S0167718717304423",
  },
  {
    kind: "published",
    title: "A Note on Foreign Direct Investment and Exports in Vertically Differentiated Industries",
    detailPrefix: "With Jie Ma. ",
    journal: "Bulletin of Economic Research",
    detailSuffix: ", 2017, 69(2), 138-146.",
    url: "https://onlinelibrary.wiley.com/doi/pdf/10.1111/boer.12087",
  },
  {
    kind: "published",
    title: "Competitive Bundling",
    detailPrefix: "",
    journal: "Econometrica",
    detailSuffix: ", 2017, 85(1), 145-172.",
    url: "https://www.jstor.org/stable/44155419?seq=1#metadata_info_tab_contents",
    links: [
      { label: "Working paper", url: "https://drive.google.com/open?id=1hCi0EUXSywEoya8PZB_zWHaCokxu0ro5" },
      { label: "Slides", url: "https://drive.google.com/file/d/1gj95axaCuxV5NkgdScPvQfPC5PdXfkza/view?usp=sharing" },
    ],
  },
  {
    kind: "published",
    title: "Search Deterrence",
    detailPrefix: "With Mark Armstrong. ",
    journal: "Review of Economic Studies",
    detailSuffix: ", 2016, 83(1), 26-57.",
    url: "https://www.jstor.org/stable/43868456?seq=1#metadata_info_tab_contents",
    links: [{ label: "Appendix", url: "https://drive.google.com/file/d/1NqSYvPQOOK0oHnPYnctu7dqMUhYSuGwQ/view?usp=sharing" }],
  },
  {
    kind: "published",
    title: "Multiproduct Search and the Joint Search Effect",
    detailPrefix: "",
    journal: "American Economic Review",
    detailSuffix: ", 2014, 104(9), 2918-2939. Distinguished CESifo Affiliate Award in Applied Microeconomics.",
    url: "https://www.jstor.org/stable/43495338?seq=1#metadata_info_tab_contents",
    links: [{ label: "Working paper", url: "https://drive.google.com/open?id=1YNCRXWJu9gbHGjdsTUALrKPMVGS-Pzlq" }],
  },
  {
    kind: "published",
    title: "Price Competition with Consumer Confusion",
    detailPrefix: "With Ioana Chioveanu. ",
    journal: "Management Science",
    detailSuffix: ", 2013, 59(11), 2450-2469.",
    url: "https://pubsonline.informs.org/doi/abs/10.1287/mnsc.2013.1716",
    links: [{ label: "Supplement", url: "https://drive.google.com/file/d/1LRvjbCSaABpmoc4CCS3kpJFXCxUjoEex/view?usp=sharing" }],
  },
  {
    kind: "published",
    title: "Paying for Prominence",
    detailPrefix: "With Mark Armstrong. ",
    journal: "Economic Journal",
    detailSuffix: ", 2011, 121(556), F368-F395.",
    url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1468-0297.2011.02469.x",
  },
  {
    kind: "published",
    title: "Reference Dependence and Market Competition",
    detailPrefix: "",
    journal: "Journal of Economics & Management Strategy",
    detailSuffix: ", 2011, 20(4), 1073-1097.",
    url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1530-9134.2011.00309.x",
  },
  {
    kind: "published",
    title: "Ordered Search in Differentiated Markets",
    detailPrefix: "",
    journal: "International Journal of Industrial Organization",
    detailSuffix: ", 2011, 29(2), 253-262.",
    url: "https://www.sciencedirect.com/science/article/pii/S0167718710000962",
  },
  {
    kind: "published",
    title: "Prominence and Consumer Search",
    detailPrefix: "With Mark Armstrong and John Vickers. ",
    journal: "RAND Journal of Economics",
    detailSuffix: ", 2009, 40(2), 209-233.",
    url: "https://www.jstor.org/stable/25593705?seq=1#metadata_info_tab_contents",
  },
  {
    kind: "published",
    title: "Consumer Protection and the Incentive to Become Informed",
    detailPrefix: "With Mark Armstrong and John Vickers. ",
    journal: "Journal of European Economic Association",
    detailSuffix: ", 2009, 7(2-3), 399-410.",
    url: "http://onlinelibrary.wiley.com/doi/10.1162/JEEA.2009.7.2-3.399/abstract",
  },
  {
    kind: "working",
    title: "Digital Ecosystems and Data Regulation",
    details: "With Andrew Rhodes and Junjie Zhou. 2026.",
    url: "https://drive.google.com/file/d/1teCPHZmZpvZpoFiahbmzPOfoCUr5XU_k/view?usp=sharing",
  },
  {
    kind: "working",
    title: "Personalized Discounts and Consumer Search",
    details: "With Zikun Liu and Jiwoong Shin. 2025.",
    url: "https://drive.google.com/file/d/1c2jzunttVF3YkyvzN-IMP9GH4zffXfHF/view?usp=sharing",
  },
  {
    kind: "working",
    title: "Improved Information in Search Markets",
    details: "2022.",
    url: "https://drive.google.com/file/d/15Qy0Qp8yWANzLlGhog9k8c0JFlKRsj8C/view?usp=sharing",
  },
  {
    kind: "working",
    title: "Reference Dependence and Choice Overload",
    details: "With Joyee Deb. 2018.",
    url: "https://drive.google.com/open?id=1v3rUdjjM9-bj94EVhstN9MPwa9caaHmm",
  },
  {
    kind: "working",
    title: "Consumer Behavioural Biases in Competition: A Survey",
    details: "With Steffen Huck. 2011. Dormant working paper.",
    url: "https://drive.google.com/open?id=1PYIxYrffNZecSaiFOnZl2ybjhOWLQKGO",
  },
  {
    kind: "working",
    title: "Prominence in Search Markets: Competitive Pricing and Central Pricing",
    details: "2009. Dormant working paper.",
    url: "https://drive.google.com/open?id=1anmT2zeJWlcaI2Aq1dywGh3Cj4cScsni",
  },
  {
    kind: "working",
    title: "Advertising, Misperceived Preferences, and Product Design",
    details: "2008. Dormant working paper.",
    url: "https://drive.google.com/open?id=1FS3m_I61h-M9PvprISdW7OymYK8l7b7S",
  },
];

const teaching = [
  {
    level: "MBA",
    title: "Game Theory & Market Design",
    place: "Yale SOM",
    links: [{ label: "Syllabus (2016-now)", url: "https://drive.google.com/open?id=1dJdutIkCSL-Pe0cs3vDiAaxRMRdqzIgk" }],
  },
  {
    level: "PhD",
    title: "Topics in Industrial Organization",
    place: "NYU Stern",
    links: [{ label: "Syllabus (2013-14)", url: "https://drive.google.com/open?id=1vbgRby1Ay_REn_Nfq4mhfr_M_vKvAr5C" }],
  },
  {
    level: "MBA",
    title: "Firms & Markets",
    place: "NYU Stern",
    links: [{ label: "Syllabus (2012-2014)", url: "https://drive.google.com/open?id=10jniDVAL7TrYN6PwR831Hk3UumygwpJa" }],
  },
  {
    level: "MSc",
    title: "Math and Statistics",
    place: "UCL, 2008-09",
    links: [
      { label: "Chapter 0", url: "https://drive.google.com/open?id=1dWVqy9yH1VhoDlD_AMToRWYMLgfMeDd_" },
      { label: "Chapter 1", url: "https://drive.google.com/open?id=1t343cgBf0SkBHhNk-R_HRjDTayfOZ123" },
      { label: "Chapter 2", url: "https://drive.google.com/open?id=1B-ZbyXQilZhGPvTdi-7kNkGzqPA4nF8N" },
      { label: "Chapter 3", url: "https://drive.google.com/open?id=1knJSQ8OyZUeiXAK-H4KMqeE5uD3F5EJM" },
      { label: "Chapter 4", url: "https://drive.google.com/open?id=1PVvIbKDMlDUTLciGlkrOwmH0Rs5X8TCQ" },
      { label: "Chapter 5", url: "https://drive.google.com/open?id=1TsdYTQI9fLCQ37H1VhyzZ9cq5BdBN9jx" },
      { label: "Chapter 6", url: "https://drive.google.com/open?id=1S4mmLmqRfhYnqz1X2uS1Ct-2sc7EJKiI" },
      { label: "Chapter 7", url: "https://drive.google.com/open?id=116OXco-qKDsyA5o2pTVRxWrXFi4t-WjV" },
      { label: "Chapter 8", url: "https://drive.google.com/open?id=1K_SjSfl_xgnjDZ5A97UvXRdkN5mxZn_Q" },
      { label: "Chapter 9", url: "https://drive.google.com/open?id=10OoOqCJU-x5SMkyjDC4E3a1uNU_T05rI" },
    ],
  },
];

const externalLinkAttrs = {
  target: "_blank",
  rel: "noreferrer",
};

function applyExternalAttrs(anchor) {
  Object.entries(externalLinkAttrs).forEach(([key, value]) => anchor.setAttribute(key, value));
}

function renderInsights() {
  const list = document.querySelector("#insights-list");
  if (!list) return;
  list.replaceChildren(
    ...insights.map((item) => {
      const card = document.createElement("a");
      card.className = "insight-card";
      card.href = item.url;
      applyExternalAttrs(card);

      const topic = document.createElement("span");
      topic.textContent = item.topic;
      const title = document.createElement("strong");
      title.textContent = item.title;

      card.append(topic, title);
      return card;
    }),
  );
}

function renderPapers(filter = "all") {
  const list = document.querySelector("#research-list");
  if (!list) return;
  const visible = filter === "all" ? papers : papers.filter((paper) => paper.kind === filter);

  list.replaceChildren(
    ...visible.map((paper) => {
      const card = document.createElement("article");
      card.className = "paper-card";
      card.dataset.kind = paper.kind;

      const body = document.createElement("div");
      const meta = document.createElement("div");
      meta.className = "paper-meta";
      meta.textContent = paper.kind === "published" ? "Publication" : "Working paper";

      const title = document.createElement("h3");
      title.className = "paper-title";
      const titleLink = document.createElement("a");
      titleLink.href = paper.url;
      titleLink.textContent = paper.title;
      applyExternalAttrs(titleLink);
      title.append(titleLink);

      const details = document.createElement("p");
      details.className = "paper-details";
      if (paper.journal) {
        details.append(document.createTextNode(paper.detailPrefix || ""));
        const journal = document.createElement("em");
        journal.className = "journal-name";
        journal.textContent = paper.journal;
        details.append(journal, document.createTextNode(paper.detailSuffix || ""));
      } else {
        details.textContent = paper.details;
      }

      body.append(meta, title, details);

      const links = document.createElement("div");
      links.className = "paper-links";
      const primary = document.createElement("a");
      primary.href = paper.url;
      primary.textContent = "Paper";
      applyExternalAttrs(primary);
      links.append(primary);

      (paper.links || []).forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.label;
        applyExternalAttrs(anchor);
        links.append(anchor);
      });

      card.append(body, links);
      return card;
    }),
  );
}

function renderTeaching() {
  const list = document.querySelector("#teaching-list");
  if (!list) return;
  list.replaceChildren(
    ...teaching.map((course) => {
      const card = document.createElement("article");
      card.className = "teaching-card";

      const level = document.createElement("span");
      level.textContent = `${course.level} | ${course.place}`;
      const title = document.createElement("strong");
      title.textContent = course.title;

      const links = document.createElement("div");
      links.className = "teaching-links";
      course.links.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.label;
        applyExternalAttrs(anchor);
        links.append(anchor);
      });

      card.append(level, title, links);
      return card;
    }),
  );
}

function initResearchFilters() {
  document.querySelectorAll(".filter-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-tabs button").forEach((candidate) => candidate.classList.remove("active"));
      button.classList.add("active");
      renderPapers(button.dataset.filter);
    });
  });
}

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.tagName !== "A") return;
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
}

function initActiveNav() {
  const links = [...document.querySelectorAll(".site-nav a")];
  const currentPage = document.body.dataset.page;
  if (currentPage) {
    links.forEach((link) => link.classList.toggle("active", link.dataset.page === currentPage));
    return;
  }
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if (!sections.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    },
    { rootMargin: "-35% 0px -55% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
}

renderInsights();
renderPapers();
renderTeaching();
initResearchFilters();
initMobileNav();
initActiveNav();
