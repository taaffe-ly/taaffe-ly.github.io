// الترويسة والتذييل المشتركان لكل الصفحات — عدّلهما هنا مرة واحدة
// الشعار: logo.png (أخضر) للترويسة، و logo-white.png (أبيض) للتذييل
const BRAND = (file) => `<a href="index.html" class="brand" aria-label="منظمة تعافي الإنمائية"><img src="${file}" alt="منظمة تعافي الإنمائية — Taaffe Foundation"></a>`;

const FB = `<svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-2.8 0-4 1.7-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5z"/></svg>`;

document.getElementById("site-header").outerHTML = `
<div class="topbar"><div class="container">
  <span><a href="mailto:taaffe.df@gmail.com">✉ taaffe.df@gmail.com</a> &nbsp;|&nbsp; <a href="tel:+218927395879" dir="ltr">☎ 092-7395879</a></span>
  <span class="hide-sm">البيضاء — ليبيا · الجبل الأخضر</span>
</div></div>
<header class="header"><div class="container">
  ${BRAND("logo.png")}
  <button class="menu-toggle" aria-label="القائمة" aria-expanded="false"><span></span><span></span><span></span></button>
  <nav class="nav"><ul>
    <li><a href="index.html">الرئيسية</a></li>
    <li><a href="about.html">من نحن</a></li>
    <li><a href="projects.html">مشاريعنا</a></li>
    <li><a href="partners.html">الشركاء</a></li>
    <li><a href="contact.html">تواصل معنا</a></li>
    <li><a href="contact.html#join" class="btn btn--primary">انضم إلينا</a></li>
  </ul></nav>
</div></header>`;

document.getElementById("site-footer").outerHTML = `
<footer class="footer"><div class="container">
  <div class="footer__grid">
    <div>
      ${BRAND("logo-white.png")}
      <p style="margin-top:14px">منظمة مدنية غير ربحية مقرّها البيضاء، تعمل في التوعية والتنمية وتعافي مناطق الجبل الأخضر منذ 2023.</p>
      <div class="socials"><a href="https://facebook.com/Taaffe.DF" target="_blank" rel="noopener" aria-label="فيسبوك">${FB}</a></div>
    </div>
    <div>
      <h4>روابط سريعة</h4>
      <ul><li><a href="about.html">من نحن</a></li><li><a href="projects.html">مشاريعنا</a></li><li><a href="partners.html">الشركاء والتمويل</a></li><li><a href="contact.html">تواصل معنا</a></li></ul>
    </div>
    <div>
      <h4>شارك معنا</h4>
      <ul><li><a href="contact.html#join">تطوّع معنا</a></li><li><a href="contact.html#join">اقترح شراكة</a></li><li><a href="projects.html">أنشطتنا</a></li></ul>
    </div>
    <div>
      <h4>تواصل</h4>
      <ul>
        <li>شارع الخطوط الجوية الليبية، البيضاء — ليبيا</li>
        <li><a href="tel:+218927395879" dir="ltr">092-7395879</a></li>
        <li><a href="mailto:taaffe.df@gmail.com">taaffe.df@gmail.com</a></li>
        <li><a href="https://facebook.com/Taaffe.DF" target="_blank" rel="noopener">facebook.com/Taaffe.DF</a></li>
      </ul>
    </div>
  </div>
  <div class="footer__bottom">
    <span>© <span data-year></span> منظمة تعافي الإنمائية. جميع الحقوق محفوظة.</span>
    <span>مفوضية المجتمع المدني — فرع البيضاء · قيد رقم 4-258</span>
  </div>
</div></footer>
<button class="to-top" aria-label="العودة للأعلى">↑</button>`;
