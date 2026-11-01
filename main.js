// منظمة تعافي الإنمائية — سلوك الواجهة
document.addEventListener("DOMContentLoaded", () => {
  // قائمة الجوال
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  // تمييز الصفحة الحالية في القائمة
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((a) => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });

  // ظهور تدريجي عند التمرير
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // عدّاد الأرقام
  const counters = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || "";
      const start = performance.now();
      const step = (t) => {
        const p = Math.min((t - start) / 1600, 1);
        el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3))).toLocaleString("en-US") + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      counters.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-count]").forEach((el) => counters.observe(el));

  // زر العودة للأعلى
  const top = document.querySelector(".to-top");
  if (top) {
    window.addEventListener("scroll", () => top.classList.toggle("show", scrollY > 500));
    top.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  }

  // تصفية الأخبار
  document.querySelectorAll(".filters button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      document.querySelectorAll("[data-cat]").forEach((item) => {
        item.style.display = f === "all" || item.dataset.cat === f ? "" : "none";
      });
    });
  });

  // النماذج: لا يوجد خادم بعد — تُعرض رسالة تأكيد فقط.
  // لربطها فعليًا: ضع رابط خدمة مثل Formspree في خاصية action للنموذج واحذف هذا الجزء.
  document.querySelectorAll("form[data-demo]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = form.querySelector(".form-msg");
      if (msg) msg.classList.add("show");
      form.reset();
    });
  });

  // السنة في التذييل
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
});
