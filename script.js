const talks = [
  {
    date: "August 28",
    speaker: "Zhongjing Wei, Apurva Virkud, and Xijia Che",
    format: "In person",
    details: "Student reports: Zhongjing Wei (10-minute USENIX report), Apurva Virkud (12-minute USENIX report), and Xijia Che (20-minute internship talk)."
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
    format: "In person",
    title: "BitGC Made (More) Efficient",
    abstract: "This talk presents our recent progress on one-bit-per-gate garbled circuits, including a set of optimizations that substantially improve both theoretical and practical efficiency. Garbled circuits with one-bit-per-gate communication were recently introduced by Liu et al. (BitGC, Eurocrypt 2025), Meyer et al. (Crypto 2025), and Ishai et al. (Crypto 2025). These works focus primarily on theoretical communication complexity, leaving open questions about practical computational efficiency. To address this gap, we first eliminate key barriers to enable SIMD support for BitGC, leading to a substantial speedup in its homomorphic operations. Second, we demonstrate that XOR gates can be garbled without any communication, improving both efficiency and simplicity. Finally, we present a computationally efficient garbling scheme that requires zero communication for XOR gates and only 5 bits per AND gate. When applied to an AES-128 circuit, our fastest garbling scheme generates a garbled circuit of just 4 KB in 2 minutes on a single CPU core. This talk is based on joint work with Hanlin Liu, Kang Yang, Wen-jie Lu, Yu Yu, Xiao Wang, and Chenkai Weng.",
    bio: "Wenhao Zhang is a Ph.D. student in Computer Science at Northwestern University, advised by Xiao Wang. His research interests lie primarily in applied cryptography, with a focus on secure multiparty computation, fully homomorphic encryption, and hardware-accelerated cryptography."
  },
  {
    date: "September 25",
    speaker: "Mohammad Hassan Ameri Ekhtiarabadi",
    speakerUrl: "https://www.cs.purdue.edu/homes/mameriek/",
    email: "mameriek@purdue.edu",
    format: "In person",
    title: "Random Robust Secret Sharing with Perfect Privacy and Its Applications",
    abstract: [
      "Secret-sharing schemes allow a dealer to distribute n shares of a secret so that any t shares suffice to reconstruct the secret, while any t−1 shares reveal no information about it. Schemes such as Shamir Secret Sharing satisfy a stronger guarantee called (t−1)-perfect privacy, meaning that the joint distribution of any subset of at most t−1 shares is uniformly distributed over its domain. This strong guarantee is essential for applications such as fuzzy password-authenticated key exchange (fPAKE) and conditional encryption—a recent cryptographic primitive introduced to enable secure, personalized password-typo correction. Unfortunately, Shamir Secret Sharing is not robust: corrupted shares can prevent correct reconstruction or cause reconstruction of an incorrect secret. Existing robust secret-sharing schemes address this issue but necessarily sacrifice perfect privacy. We introduce and construct Random Robust Secret Sharing with Perfect Privacy (RRSS), a new notion that preserves (t−1)-perfect privacy while providing robustness against random share corruptions. In our schemes, the secret is recovered with high probability even if an arbitrary subset of up to n−t shares is independently corrupted at random.",
      "We demonstrate the utility of RRSS through two applications. First, we present the first practically efficient fPAKE construction that tolerates Hamming errors. Second, we obtain the first efficient conditional-encryption scheme for arbitrary Hamming distances, improving upon prior work that achieved efficiency only for constant distances. We implement both constructions and empirically demonstrate their practicality."
    ],
    paperUrl: "https://eprint.iacr.org/2026/653.pdf",
    bio: "Mohammad Hassan Ameri is a Ph.D. candidate in Computer Science at Purdue University, advised by Professor Jeremiah Blocki. His research focuses on the theoretical foundations of cryptography, with an emphasis on designing provably secure and efficient cryptographic tools for authentication and privacy. His recent work includes conditional encryption and its applications to password authentication, robust secret sharing with perfect privacy, and memory-hard functions. His work has appeared at ACM CCS, ITCS, and SCN. He expects to graduate in Fall 2026 and is on the 2026–27 job market, seeking postdoctoral opportunities in cryptography and security."
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
    details: "Ph.D. candidate in Computer Science at Carnegie Mellon University, advised by Virginia Smith and Wenting Zheng. His research lies at the intersection of trustworthy machine learning systems and applied cryptography."
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
    slides.textContent = "View slides ↗";
    slides.setAttribute("aria-label", `Slides for ${talk.speaker}’s talk`);
    slides.target = "_blank";
    slides.rel = "noopener noreferrer";
    detailsCell.append(slides);
  }
  if (talk.paperUrl) {
    const paper = document.createElement("a");
    paper.className = "talk-paper";
    paper.href = talk.paperUrl;
    paper.textContent = "Full version ↗";
    paper.setAttribute("aria-label", `Full version of ${talk.speaker}’s paper`);
    paper.target = "_blank";
    paper.rel = "noopener noreferrer";
    detailsCell.append(paper);
  }
  [["Abstract", talk.abstract], ["Speaker bio", talk.bio]].forEach(([label, text]) => {
    if (!text) return;
    const disclosure = document.createElement("details");
    disclosure.className = "talk-disclosure";
    const summary = document.createElement("summary");
    summary.textContent = label;
    disclosure.append(summary);
    const paragraphs = Array.isArray(text) ? text : [text];
    paragraphs.forEach((content) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = content;
      disclosure.append(paragraph);
    });
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
