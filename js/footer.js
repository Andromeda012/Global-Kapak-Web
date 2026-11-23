/**
 * Global Kapak Mobilya — Membran Kapak Bölümü Editorial Footer & Sabit Araçlar
 */

(function () {
  const FOOTER_HTML = `
<footer>
  <div class="footer-cta-banner">
    <div class="footer-cta-inner">
      <div class="footer-cta-text">
        <span class="footer-cta-tag">✦ MEMBRAN KAPAK ÜRETİM MERKEZİ • B2B &amp; ÖZEL ÖLÇÜ</span>
        <h3>Projenize Özel Membran Kapak İmalatı İçin Bize Ulaşın</h3>
        <p>Bağcılar'daki 2.000 m² CNC ve vakum pres tesisimizde tüm renk kartelası ve kapak modellerini 5 iş gününde üretiyoruz.</p>
      </div>
      <div class="footer-cta-actions">
        <a href="https://wa.me/905050151035?text=Merhaba%2C%20membran%20kapak%20modelleri%20ve%20renk%20kartelas%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" class="f-btn-primary">WhatsApp İle Teklif Al →</a>
        <a href="https://beta.globalkapakmobilya.com" target="_blank" rel="noopener" class="f-btn-wa">Mobilya Showroom ↗</a>
      </div>
    </div>
  </div>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="f-logo-wrap">
        <img src="resim/logo.png" alt="Global Kapak Mobilya" style="height:76px;width:auto;background:#FFFFFF;padding:8px 12px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.25);">
      </div>
      <div class="f-brand-name">Global Kapak Mobilya</div>
      <p>18mm E1 masif MDF gövde, 5-eksen CNC işleme ve yüksek vakumlu ithal PVC/PET membran pres teknolojisiyle kurumsal kapak üreticiniz.</p>
      <div class="f-badges">
        <span>🛡️ 5 Yıl Garanti</span>
        <span>🌿 18mm E1 MDF</span>
        <span>⚡ 5 İş Günü İmalat</span>
      </div>
    </div>
    <div class="footer-col">
      <h4>Membran Kapak</h4>
      <a href="#modeller">Kapak Modelleri</a>
      <a href="#kartela">Folyo Renk Kartelası</a>
      <a href="#tamamlayici">Tamamlayıcı Ürünler</a>
      <a href="#fsd-altyapi">FSD Yazılım &amp; B2B</a>
    </div>
    <div class="footer-col">
      <h4>Grup Markalarımız</h4>
      <a href="https://beta.globalkapakmobilya.com" target="_blank" rel="noopener">Hazır Mobilya Showroom (Beta) ↗</a>
      <a href="https://beta.globalkapakmobilya.com/koleksiyon.html" target="_blank" rel="noopener">Yatak Odası &amp; Kahve Köşeleri ↗</a>
      <a href="https://beta.globalkapakmobilya.com/hakkimizda.html" target="_blank" rel="noopener">Kurumsal Hakkımızda ↗</a>
    </div>
    <div class="footer-col">
      <h4>Fabrika &amp; İletişim</h4>
      <a href="tel:05050151035">📞 0 (505) 015 1035</a>
      <a href="mailto:info@globalkapakmobilya.com">✉️ info@globalkapakmobilya.com</a>
      <a href="#iletisim">📍 Yalçın Koreş Cad. Bağlar Mah. No:6B<br>Bağcılar / İstanbul, Türkiye</a>
      <div class="f-hours">🕒 Pzt - Cmt: 08:00 – 18:00</div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Global Kapak Mobilya — Membran Kapak Vitrini (kapak.globalkapakmobilya.com)</p>
    <div class="f-craft-note">İstanbul Fabrika İmalatı • CNC &amp; Membran Vakum Pres</div>
  </div>
</footer>
`;

  const FOOTER_CSS = `
<style id="footer-dynamic-css">
footer {
  background: #0F0C0A;
  color: rgba(245, 239, 235, 0.78);
  padding: 0 40px 28px;
  border-top: 1px solid rgba(197, 160, 89, 0.22);
}
.footer-cta-banner {
  max-width: 1240px;
  margin: 0 auto 48px;
  padding-top: 48px;
}
.footer-cta-inner {
  background: linear-gradient(135deg, rgba(142, 70, 49, 0.28), rgba(22, 18, 15, 0.92));
  border: 1px solid rgba(197, 160, 89, 0.35);
  border-radius: 20px;
  padding: 36px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.footer-cta-tag {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #D8B46E;
  display: block;
  margin-bottom: 8px;
}
.footer-cta-text h3 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 32px;
  color: #fff;
  margin-bottom: 6px;
}
.footer-cta-text p {
  font-size: 14px;
  color: rgba(245, 239, 235, 0.76);
  max-width: 620px;
}
.footer-cta-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.f-btn-primary {
  background: linear-gradient(135deg, #C5A059, #D8B46E);
  color: #0F0C0A;
  font-size: 12px;
  font-weight: 800;
  padding: 13px 24px;
  border-radius: 999px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}
.f-btn-wa {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 13px 22px;
  border-radius: 999px;
}
.footer-grid {
  max-width: 1240px;
  margin: 0 auto 38px;
  display: grid;
  grid-template-columns: 1.4fr 0.9fr 1fr 1fr;
  gap: 36px;
}
.f-brand-name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin: 14px 0 8px;
}
.footer-brand p {
  font-size: 13px;
  line-height: 1.65;
  margin-bottom: 14px;
}
.f-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.f-badges span {
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.footer-col h4 {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #D8B46E;
  margin-bottom: 14px;
}
.footer-col a, .f-hours {
  display: block;
  font-size: 13px;
  color: rgba(245, 239, 235, 0.72);
  margin-bottom: 9px;
}
.footer-col a:hover { color: #D8B46E; }
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 12.5px;
  color: rgba(245, 239, 235, 0.5);
}
.wa-concierge-float {
  position: fixed;
  bottom: 26px;
  right: 26px;
  z-index: 9990;
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #2D6A4F 0%, #40916C 100%);
  color: #fff !important;
  padding: 13px 20px;
  border-radius: 50px;
  box-shadow: 0 12px 32px rgba(45, 106, 79, 0.38);
  font-size: 13px;
  font-weight: 700;
  border: 1px solid rgba(255,255,255,0.25);
}
.wa-concierge-float svg { width: 20px; height: 20px; fill: currentColor; }
@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  footer { padding: 0 20px 24px; }
  .footer-grid { grid-template-columns: 1fr; gap: 24px; }
  .wa-concierge-float span { display: none; }
  .wa-concierge-float { padding: 14px; border-radius: 50%; }
}
</style>
`;

  if (!document.getElementById('footer-dynamic-css')) {
    document.head.insertAdjacentHTML('beforeend', FOOTER_CSS);
  }
  const existing = document.querySelector('footer');
  if (existing) existing.outerHTML = FOOTER_HTML;
  else document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  if (!document.querySelector('.wa-concierge-float')) {
    document.body.insertAdjacentHTML('beforeend', `
      <a href="https://wa.me/905050151035" class="wa-concierge-float" target="_blank" aria-label="WhatsApp ile Hızlı Teklif">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
        <span>Kapak Sipariş &amp; Bilgi</span>
      </a>
    `);
  }
})();
