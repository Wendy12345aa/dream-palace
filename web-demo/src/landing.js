const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle?.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  siteNav?.classList.toggle("is-open", !open);
});

siteNav?.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) return;
  navToggle?.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
});

const characters = {
  mp: { image: "assets/portraits/mp/fullbody/pt_mp_bright_full_body.webp", alt: "Mu Ping, treasury advisor", cn: "慕平", en: "Mu Ping", role: "Treasury advisor", quote: "“Every promise has a cost. I will make sure the court can see it.”", number: "01" },
  tab: { image: "assets/reference/concepts/characters/tab/tab-full-body-concept-v01.png", alt: "Qing Tang, quality inspector", cn: "清棠", en: "Qing Tang", role: "Quality inspector", quote: "“A beautiful answer is still wrong if it cannot bear scrutiny.”", number: "02" },
  kel: { image: "assets/portraits/kel/fullbody/pt_kel_full_body.webp", alt: "Kai Ning, royal engineer", cn: "恺宁", en: "Kai Ning", role: "Royal engineer", quote: "“Give me the truth of the damage. Then we can build hope that holds.”", number: "03" },
  cx: { image: "assets/reference/concepts/characters/cx/cx-full-body-concept-v01.png", alt: "An unidentified companion concealed in shadow", cn: "???", en: "???", role: "Unintroduced observer", quote: "“Some witnesses do not step into the light on the first morning.”", number: "04" },
};

const characterImage = document.querySelector("#characterImage");
const characterCn = document.querySelector("#characterCn");
const characterEn = document.querySelector("#characterEn");
const characterRole = document.querySelector("#characterRole");
const characterQuote = document.querySelector("#characterQuote");
const characterNumber = document.querySelector(".character-number");

document.querySelectorAll("[data-character]").forEach((tab) => {
  tab.addEventListener("click", () => {
    const data = characters[tab.dataset.character];
    if (!data || !characterImage) return;
    document.querySelectorAll("[data-character]").forEach((item) => { item.classList.toggle("is-active", item === tab); item.setAttribute("aria-selected", String(item === tab)); });
    characterImage.classList.add("is-changing");
    window.setTimeout(() => { characterImage.src = data.image; characterImage.alt = data.alt; characterCn.textContent = data.cn; characterEn.textContent = data.en; characterRole.textContent = data.role; characterQuote.textContent = data.quote; characterNumber.textContent = data.number; characterImage.classList.remove("is-changing"); }, 150);
  });
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
document.querySelectorAll("[data-lightbox]").forEach((item) => item.addEventListener("click", () => { if (!lightbox || !lightboxImage) return; lightboxImage.src = item.dataset.lightbox; lightboxImage.alt = item.querySelector("img")?.alt || "Expanded gallery image"; lightbox.showModal(); }));
lightbox?.querySelector("button")?.addEventListener("click", () => lightbox.close());
lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });
