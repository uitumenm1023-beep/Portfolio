// ---------- Translations ----------
const translations = {
  en: {
    "meta.title": "Munkhdul Uitumen — Developer",
    "meta.description": "Munkhdul Uitumen — backend-leaning developer building mobile and web products in Ulaanbaatar, Mongolia.",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.experience": "Experience",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "hero.name": "Munkhdul Uitumen",
    "hero.terminalResult": "backend-leaning developer, Ulaanbaatar MN",
    "hero.subhead": "I build the backend first, then the mobile and web layers that sit on top of it.",
    "hero.meta": "Senior developer-in-training at MIU, finishing this fall — based in Ulaanbaatar, Mongolia.",
    "hero.ctaWork": "See my work",
    "hero.ctaContact": "Get in touch",
    "hero.photoPlaceholder": "Drop your photo in<br><code>images/profile.jpg</code>",
    "about.heading": "About",
    "about.p1": "I'm a senior at MIU in Ulaanbaatar, graduating this fall. Most of my work happens on the backend — auth flows, database schemas, APIs — but I build the mobile and web layers that use them too, so I can take something from a blank repo to a shipped build on my own when I need to.",
    "about.p2": "Recently that's meant Flutter apps wired to Firebase, a NestJS + GraphQL service backing a full team project, and a React site I built solo from the ground up.",
    "work.heading": "Selected work",
    "work.truckcab.tag": "Built for Google Play",
    "work.truckcab.desc": "A Flutter delivery-management app that connects sellers with drivers. I built the auth flow with email verification, wired up Firestore, and took it through release signing and a full build audit to get it store-ready.",
    "work.rtp.tag": "Team project · MIU",
    "work.rtp.desc": "A full-stack place-rating platform, built with a small team at MIU. I worked mainly on the backend — schema design, the GraphQL API, and auth — with some frontend work on the side.",
    "work.viewLive": "View live →",
    "work.zamyn.title": "Zamyn-Uud Directory",
    "work.zamyn.tag": "Solo build · Full-stack",
    "work.zamyn.desc": "A bilingual business directory for the Zamyn-Uud to Erenhot trade route, built entirely on my own — up to 1,000 listings across 10 service categories, with full CRUD and secret-code-protected entries.",
    "work.zamyn.bilingual": "Mongolian / English",
    "experience.heading": "Experience",
    "experience.role": "Development Intern",
    "experience.item1": "Built the university's affiliated high-school website as part of a small team of classmates, working mainly on the backend with some frontend work.",
    "experience.item2": "Joined the RateThePlace team in the same capacity — backend first, with a share of the frontend.",
    "stack.heading": "Stack",
    "stack.mobile": "Mobile",
    "stack.web": "Web",
    "stack.backend": "Backend",
    "stack.tools": "Tools",
    "contact.heading": "Contact",
    "contact.intro": "Reach out directly — I'll get back to you.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.copy": "Copy",
    "contact.copied": "Copied",
    "contact.copyFail": "Select text to copy",
    "footer.place": "Ulaanbaatar, Mongolia"
  },
  mn: {
    "meta.title": "Үйтүмэн Мөнхдөл — Хөгжүүлэгч",
    "meta.description": "Улаанбаатарт mobile болон web бүтээгдэхүүн хийдэг backend хөгжүүлэгч.",
    "nav.about": "Миний тухай",
    "nav.work": "Төслүүд",
    "nav.experience": "Туршлага",
    "nav.stack": "Технологи",
    "nav.contact": "Холбоо барих",
    "hero.name": "Үйтүмэн Мөнхдөл",
    "hero.terminalResult": "backend хөгжүүлэгч, Улаанбаатар",
    "hero.subhead": "Ихэвчлэн backend дээр ажилладаг, дараа нь үүн дээрээ тулгуурлаад mobile, web хэсгүүдийг нь хийдэг.",
    "hero.meta": "МИУ-д ахлах курст сурдаг, энэ намар төгсөнө — Улаанбаатарт амьдардаг.",
    "hero.ctaWork": "Ажлуудыг харах",
    "hero.ctaContact": "Холбогдох",
    "hero.photoPlaceholder": "Зургаа энд байрлуул<br><code>images/profile.jpg</code>",
    "about.heading": "Миний тухай",
    "about.p1": "Улаанбаатар дахь МИУ-д ахлах курст сурдаг, энэ намар төгсөнө. Ихэнх ажил маань backend дээр байдаг — нэвтрэлт, database, API гэх мэт — гэхдээ тэдгээрийг ашигладаг mobile, web хэсгийг нь ч бас өөрөө хийдэг. Тэгээд хоосон repo-оос эхлээд бэлэн бүтээгдэхүүн хүртэл ганцаараа гаргаж чаддаг.",
    "about.p2": "Сүүлийн үед Firebase-тэй холбосон Flutter апп, багийн том төслийг дэмжсэн NestJS + GraphQL сервис, мөн бүрэн өөрөө хийсэн React вэбсайт дээр ажилласан.",
    "work.heading": "Сонгосон ажлууд",
    "work.truckcab.tag": "Google Play дээр гарсан",
    "work.truckcab.desc": "Худалдагч, жолоочийг холбодог хүргэлтийн Flutter апп. Имэйлээр баталгаажуулдаг нэвтрэлт хийж, Firestore холбож, дэлгүүрт гарахад бэлэн болтол release signing, бүтэн шалгалт хийсэн.",
    "work.rtp.tag": "Багийн төсөл · МИУ",
    "work.rtp.desc": "МИУ-ийн жижиг багтай хамт хийсэн газар үнэлдэг full-stack платформ. Голчлон backend дээр ажилласан — database загвар, GraphQL API, нэвтрэлт — бас жаахан frontend хийсэн.",
    "work.viewLive": "Шууд үзэх →",
    "work.zamyn.title": "Замын-Үүдийн Лавлах",
    "work.zamyn.tag": "Ганцаараа хийсэн · Full-stack",
    "work.zamyn.desc": "Замын-Үүд—Эрээний худалдааны маршрутад зориулсан хос хэлтэй бизнесийн лавлах. Бүгдийг ганцаараа хийсэн — 10 ангилалд 1000 хүртэл бүртгэл, бүрэн CRUD, нууц кодтой хамгаалалттай.",
    "work.zamyn.bilingual": "Монгол / Англи",
    "experience.heading": "Туршлага",
    "experience.role": "Хөгжүүлэгч дадлагажигч",
    "experience.item1": "Ангийн найзуудтайгаа багаараа их сургуулийн харьяа ахлах сургуулийн вэбсайт хийсэн — голчлон backend, жаахан frontend.",
    "experience.item2": "Мөн RateThePlace багт нэгдэж, адилхан backend-ээс эхэлж, жаахан frontend хийсэн.",
    "stack.heading": "Технологи",
    "stack.mobile": "Мобайл",
    "stack.web": "Веб",
    "stack.backend": "Backend",
    "stack.tools": "Хэрэгслүүд",
    "contact.heading": "Холбоо барих",
    "contact.intro": "Шууд бичээрэй — эргэж холбогдъё.",
    "contact.email": "Имэйл",
    "contact.phone": "Утас",
    "contact.copy": "Хуулах",
    "contact.copied": "Хууллаа",
    "contact.copyFail": "Текстийг сонгож хуулна уу",
    "footer.place": "Улаанбаатар, Монгол"
  }
};

let currentLang = localStorage.getItem("lang") || "en";
let terminalDone = false;

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang][key];
    if (text === undefined) return;
    if (el.tagName === "TITLE") {
      document.title = text;
    } else {
      el.innerHTML = text;
    }
  });

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", translations[lang]["meta.description"]);

  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) toggleBtn.textContent = lang === "en" ? "MN" : "EN";

  if (terminalDone) {
    const el = document.getElementById("terminal");
    if (el) el.textContent = `> whoami → ${translations[lang]["hero.terminalResult"]}`;
  }
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  applyLanguage(currentLang === "en" ? "mn" : "en");
});

applyLanguage(currentLang);

// ---------- Terminal intro (single page-load sequence) ----------
(function () {
  const el = document.getElementById("terminal");
  if (!el) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const line = "> whoami";

  function finish() {
    el.textContent = `${line} → ${translations[currentLang]["hero.terminalResult"]}`;
    el.classList.add("done");
    terminalDone = true;
  }

  if (prefersReduced) {
    finish();
    return;
  }

  let i = 0;
  function typeLine() {
    if (i <= line.length) {
      el.textContent = line.slice(0, i);
      i++;
      setTimeout(typeLine, 45);
    } else {
      setTimeout(finish, 350);
    }
  }
  typeLine();
})();

// ---------- Scroll-spy: highlight active nav link + rail dot ----------
(function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".navlinks a");

  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        const navLink = document.querySelector(`.navlinks a[data-nav="${id}"]`);

        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          navLinks.forEach((l) => l.classList.remove("active"));
          if (navLink) navLink.classList.add("active");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
})();

// ---------- Copy to clipboard ----------
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const value = btn.getAttribute("data-copy");
    const original = btn.textContent;

    try {
      await navigator.clipboard.writeText(value);
      btn.textContent = translations[currentLang]["contact.copied"];
      btn.classList.add("copied");
    } catch (err) {
      btn.textContent = translations[currentLang]["contact.copyFail"];
    }

    setTimeout(() => {
      btn.textContent = translations[currentLang]["contact.copy"];
      btn.classList.remove("copied");
    }, 1600);
  });
});