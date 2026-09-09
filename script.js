const talks = [
  {
    date: "August 28",
    speaker: "Zhongjing Wei, Apurva, and Xijia Che",
    format: "In person",
    details: "Student reports: Zhongjing Wei (10-minute USENIX report), Apurva (12-minute USENIX report), and Xijia Che (20-minute internship talk)."
  },
  {
    date: "September 4",
    speaker: "Sizhe Chen",
    speakerUrl: "https://sizhe-chen.github.io/",
    format: "Virtual",
    title: "Securing LLMs Against Prompt Injection for Agentic Applications",
    abstract: "Prompt injection is widely recognized as a major security threat to AI agents, in which external untrusted data (websites, documents, and emails) may contain an injected prompt (“Ignore previous instructions and …”) that arbitrarily manipulates an agent’s operations. The best-defended existing LLMs still suffer from near-100% attack success rates (ASRs) under adaptive prompt-injection attacks. In this talk, I will discuss our latest efforts, SecPO and SecOPD, to fine-tune LLMs with an order-of-magnitude lower ASRs (0% -- 13.3%) against the current strongest prompt-injection attacks. Specifically, we (1) separate the trusted prompt and untrusted data into two input channels; (2) simulate strong adaptively attacked training samples for the model to learn robustness from; and (3) design the loss according to a principle that approximates a (nonexistent) secure-and-powerful LLM. Without a noticeable utility drop, our defended Qwen3.6-27B achieves security that generalizes to realistic agentic tasks with multiple trusted and untrusted messages. We fully open our training set with optimized injections, code for our recipe, and the defended model, which is more robust than industry-scale adversarially-trained GPT-5.5 in agentic tasks.",
    bio: "Sizhe Chen is a Computer Science Ph.D. candidate at UC Berkeley’s Berkeley AI Research (BAIR), working with Prof. David Wagner. He studies real-world AI security problems with general and principled solutions. He developed StruQ, Meta-SecAlign, SecPO, and SecOPD, the most robust open LLMs against adaptive prompt injection attacks. His research has been supported by selective industry fundings, including NVIDIA Fellowship, Meta-BAIR Commons, and Google-BAIR Commons. Previously, he obtained an M.Eng. and a B.Eng. from Shanghai Jiao Tong University.",
    slidesUrl: "https://github.com/systemsecurity-uiuc/CS591-security-seminar-website/blob/main/slides/2026-09-04-sizhe-chen.pdf"
  },
  { date: "September 11", speaker: "To be announced", format: "To be announced", details: "Talk details forthcoming." },
  {
    date: "September 18",
    speaker: "Wenhao Zhang",
    speakerUrl: "https://wzhang.cc/",
    format: "To be announced",
    details: "Northwestern University · Advised by Xiao Wang."
  },
  {
    date: "September 25",
    speaker: "Mohammad Hassan Ameri Ekhtiarabadi",
    email: "mameriek@purdue.edu",
    format: "To be announced",
    details: "Fuzzy password-authenticated key exchange (PAKE), including random robust secret-sharing techniques for efficient Hamming-distance construction."
  },
  {
    date: "October 2",
    speaker: "To be announced",
    format: "To be announced",
    details: "Talk details forthcoming."
  },
  {
    date: "October 9",
    speaker: "Phuoc Pham Van Long",
    email: "phuoc_pham_van_long@brown.edu",
    format: "To be announced",
    details: "Brown University · Advised by Peihan Miao."
  },
  {
    date: "October 16",
    speaker: "Zachary DeStefano",
    speakerUrl: "https://www.mathmasterzach.com/",
    format: "To be announced",
    details: "Talk details forthcoming."
  },
  { date: "October 23", speaker: "Umar Iqbal", speakerUrl: "https://engineering.washu.edu/faculty/Umar-Iqbal.html", format: "In person", details: "Assistant Professor, Washington University in St. Louis." },
  {
    date: "October 30",
    speaker: "Ning Zhang",
    speakerUrl: "https://engineering.washu.edu/faculty/Ning-Zhang.html",
    format: "In person",
    details: "Associate Professor, Washington University in St. Louis."
  },
  {
    date: "November 6",
    speaker: "Dung Bui",
    speakerUrl: "https://dungbui15.github.io/",
    format: "To be announced",
    details: "Talk details forthcoming."
  },
  {
    date: "November 13",
    speaker: "Qi Pang",
    email: "qipang@cmu.edu",
    format: "To be announced",
    details: "Ph.D. candidate in Computer Science at Carnegie Mellon University, advised by Virginia Smith and Wenting Zheng. Her research lies at the intersection of trustworthy machine learning systems and applied cryptography."
  },
  { date: "November 20", speaker: "No seminar", format: "—", details: "No seminar scheduled." },
  { date: "November 27", speaker: "No seminar", format: "—", details: "Thanksgiving break." },
  { date: "December 4", speaker: "Kimberly Ruth", format: "In person", details: "Talk details forthcoming." },
  { date: "December 11", speaker: "To be announced", format: "To be announced", details: "Talk details forthcoming." }
];

const scheduleBody = document.querySelector("#schedule-body");

talks.forEach((talk) => {
  const row = document.createElement("tr");

  const dateCell = document.createElement("td");
  dateCell.textContent = talk.date;

  const speakerCell = document.createElement("td");
  if (talk.speakerUrl || talk.email) {
    const speakerLink = document.createElement("a");
    speakerLink.href = talk.speakerUrl || `mailto:${talk.email}`;
    speakerLink.textContent = talk.speaker;
    if (talk.speakerUrl) {
      speakerLink.target = "_blank";
      speakerLink.rel = "noopener noreferrer";
    }
    speakerCell.append(speakerLink);
  } else {
    speakerCell.textContent = talk.speaker;
  }

  const formatCell = document.createElement("td");
  formatCell.textContent = talk.format;
  if (talk.format === "In person" || talk.format === "Virtual") formatCell.classList.add("format");

  const detailsCell = document.createElement("td");
  if (talk.title) {
    const title = document.createElement("p");
    title.className = "talk-title";
    title.textContent = talk.title;
    detailsCell.append(title);
  }
  if (talk.details) {
    const description = document.createElement("p");
    description.className = "talk-description";
    description.textContent = talk.details;
    detailsCell.append(description);
  }
  if (talk.slidesUrl) {
    const slides = document.createElement("a");
    slides.className = "talk-slides";
    slides.href = talk.slidesUrl;
    slides.textContent = "Slides";
    slides.setAttribute("aria-label", `Slides for ${talk.speaker}’s talk`);
    detailsCell.append(slides);
  }
  [["Abstract", talk.abstract], ["Speaker bio", talk.bio]].forEach(([label, text]) => {
    if (!text) return;
    const disclosure = document.createElement("details");
    disclosure.className = "talk-disclosure";
    const summary = document.createElement("summary");
    summary.textContent = label;
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    disclosure.append(summary, paragraph);
    detailsCell.append(disclosure);
  });

  if (talk.speaker === "To be announced" || talk.speaker === "No seminar") row.classList.add("schedule-muted");
  [speakerCell, formatCell].forEach((cell) => {
    if (cell.textContent === "To be announced" || cell.textContent === "—") cell.classList.add("tba");
  });

  row.append(dateCell, speakerCell, formatCell, detailsCell);
  scheduleBody.append(row);
});

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#primary-nav");

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  navigation.classList.toggle("open", !open);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.hash === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -55%" });

sections.forEach((section) => observer.observe(section));
