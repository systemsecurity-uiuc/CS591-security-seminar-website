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
    details: "Advised by David Wagner."
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
    speaker: "Ertem Nusret Tas",
    email: "nusret@stanford.edu",
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
  { date: "October 23", speaker: "Umar Iqbal", format: "In person", details: "Talk details forthcoming." },
  {
    date: "October 30",
    speaker: "Ning Zhang",
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
  detailsCell.textContent = talk.details;

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
