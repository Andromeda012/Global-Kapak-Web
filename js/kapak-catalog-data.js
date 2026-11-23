/**
 * Global Kapak Mobilya — Membran Kapak Vitrin Veri Katmanı
 * Not: Şimdilik salt vitrin amaçlı statik önizleme kataloğudur.
 * İleriki aşamada doğrudan ERP / Supabase / FSD Yazılım web servislerine bağlanacak şekilde modüler kurgulanmıştır.
 */

(function (global) {
  const DOOR_MODELS = [
    {
      code: 'GK-101',
      name: 'Milano Düz Seri',
      category: 'modern',
      categoryLabel: 'Modern & Minimal',
      thickness: '18 mm E1 MDF',
      foilSpec: '0.35 mm Soft-Touch PVC / PET',
      minMax: '140×140 mm — 2400×1100 mm',
      desc: 'Sıfır radyüs modern köşe dönüşü ve pürüzsüz mat yüzeyiyle çağdaş mutfak ve banyo projelerinin temel taşı.',
      profileType: 'flat'
    },
    {
      code: 'GK-108',
      name: 'Viyana Çerçeve',
      category: 'klasik',
      categoryLabel: 'Klasik & Çerçeveli',
      thickness: '18 mm E1 MDF',
      foilSpec: '3D Vakum Membran Kaplama',
      minMax: '200×200 mm — 2400×1000 mm',
      desc: 'Çift kademeli CNC çerçeve işlemesiyle lüks yatak odası ve klasik mutfak dolaplarına derinlik katan mimari profil.',
      profileType: 'double_frame'
    },
    {
      code: 'GK-204',
      name: 'Country Kuşaklı',
      category: 'country',
      categoryLabel: 'Country & Camlı',
      thickness: '18 mm E1 MDF',
      foilSpec: 'Ahşap Dokulu / Mat Membran',
      minMax: '240×240 mm — 2300×900 mm',
      desc: 'Geniş kenar bordürü ve iç göbek derziyle sıcak country mutfak, kahve köşesi ve giyinme odası tasarımları için idealdir.',
      profileType: 'country'
    },
    {
      code: 'GK-215',
      name: 'Kafesli Vitrin Camlı',
      category: 'country',
      categoryLabel: 'Country & Camlı',
      thickness: '18 mm E1 MDF',
      foilSpec: '3D Vakum + Cam Kanallı',
      minMax: '300×280 mm — 2200×800 mm',
      desc: 'Üst dolap ve boy vitrin modülleri için CNC açılımlı kafes çıtalı özel cam kapak modeli.',
      profileType: 'grid_glass'
    },
    {
      code: 'GK-302',
      name: 'Nordik Derzli',
      category: 'derzli',
      categoryLabel: 'Derzli & Fluted',
      thickness: '18 mm E1 MDF',
      foilSpec: 'Mat İpek / Doğal Meşe PET',
      minMax: '180×150 mm — 2400×1050 mm',
      desc: '20 mm aralıklı dikey CNC derz kanallarıyla ada mutfaklar, TV üniteleri ve gardıroplarda ritmik çizgisel etki.',
      profileType: 'fluted'
    },
    {
      code: 'GK-310',
      name: 'Asimetrik Kulp Oyuklu',
      category: 'modern',
      categoryLabel: 'Modern & Minimal',
      thickness: '22 mm / 18 mm MDF',
      foilSpec: 'Anti-Parmak İzi Mat PET',
      minMax: '160×160 mm — 2400×1000 mm',
      desc: 'Üst kenardan frezeli entegre J-kulp profili sayesinde harici metal kulp gerektirmeyen yalın görünüm.',
      profileType: 'j_handle'
    },
    {
      code: 'GK-405',
      name: 'Baskı Çıta Klasik',
      category: 'klasik',
      categoryLabel: 'Klasik & Çerçeveli',
      thickness: '18 mm E1 MDF',
      foilSpec: 'İthal PVC Membran',
      minMax: '220×220 mm — 2400×950 mm',
      desc: 'Köşe birleşim hissi veren zarif iç çıta geometrisiyle hem tekil kapaklarda hem boy dolaplarda dengeli oran sunar.',
      profileType: 'single_frame'
    },
    {
      code: 'GK-418',
      name: 'Smart Panel & Boy Kapak',
      category: 'derzli',
      categoryLabel: 'Derzli & Fluted',
      thickness: '18 mm E1 MDF',
      foilSpec: 'High Gloss / Mat Membran',
      minMax: '120×120 mm — 2780×1200 mm',
      desc: 'Duvar lambri, ada arkası kaplama, davlumbaz kutusu ve tavan yüksekliği boy dolaplar için yekpare CNC işleme.',
      profileType: 'smart_panel'
    }
  ];

  const FOIL_SWATCHES = [
    { code: 'GK-M01', name: 'Saf İpek Beyaz', series: 'Mat / Soft-Touch', finish: 'Mat PET', color: '#F4F1EA', darkText: true },
    { code: 'GK-M04', name: 'Sıcak Kaşmir', series: 'Mat / Soft-Touch', finish: 'Mat PET', color: '#D3C9BD', darkText: true },
    { code: 'GK-M09', name: 'Adaçayı Yeşili', series: 'Botanik Mat', finish: 'Mat PVC', color: '#8A9A86', darkText: false },
    { code: 'GK-M14', name: 'Vizon Taş', series: 'Mat / Soft-Touch', finish: 'Mat PET', color: '#9D9287', darkText: false },
    { code: 'GK-M22', name: 'Antrasit Füme', series: 'Anti-Fingerprint', finish: 'Süper Mat', color: '#323639', darkText: false },
    { code: 'GK-A03', name: 'Doğal İtalyan Meşe', series: 'Ahşap Dokulu', finish: 'Senkron Doku', color: '#A57C52', darkText: false },
    { code: 'GK-A07', name: 'Sıcak Amerikan Ceviz', series: 'Ahşap Dokulu', finish: 'Mat Doku', color: '#5E402D', darkText: false },
    { code: 'GK-G02', name: 'Parlak Kırık Beyaz', series: 'High Gloss', finish: 'Yüksek Parlak', color: '#FAF8F3', darkText: true }
  ];

  const COMPLEMENTARY_GROUPS = [
    { icon: '🚪', title: 'Mutfak & Banyo Kapakları', desc: '18mm 1. sınıf nem dayanımlı E1 MDF üzerine 3D vakum membran kaplama; standart veya tam özel ölçü üretim.' },
    { icon: '🪟', title: 'Camlı & Kafesli Kapaklar', desc: 'CNC ile hazırlanmış temiz cam yuvası, gizli arka çıta kanalı ve country kafes bölmeli vitrin kapak seçenekleri.' },
    { icon: '🗄️', title: 'Çekmece, Davlumbaz & Boy Kapak', desc: 'Tüm seri modelleriyle birebir desen uyumlu çekmece alınları, ankastre/davlumbaz kapakları ve boy dolap çözümleri.' },
    { icon: '📐', title: 'Taç, Baza, Işık Bandı & Smart Panel', desc: 'Projeyi eksiksiz tamamlayan aynı renk kodlu süpürgelik, taç profil ve yekpare dekoratif duvar panelleri.' }
  ];

  function buildDoorSvg(profileType) {
    const baseRect = `<rect x="12" y="10" width="126" height="184" rx="4" fill="#FDFBF7" stroke="#C8B9A6" stroke-width="2.2"/>`;
    let inner = '';
    if (profileType === 'flat') {
      inner = `<rect x="15" y="13" width="120" height="178" rx="3" fill="none" stroke="#EAE2D6" stroke-width="1.2"/>
               <line x1="120" y1="150" x2="120" y2="176" stroke="#C5A059" stroke-width="2.6" stroke-linecap="round"/>`;
    } else if (profileType === 'double_frame') {
      inner = `<rect x="26" y="24" width="98" height="156" rx="2" fill="#F6F1E9" stroke="#C5A059" stroke-width="1.8"/>
               <rect x="34" y="32" width="82" height="140" rx="1" fill="#FDFBF7" stroke="#D5C8B8" stroke-width="1.4"/>`;
    } else if (profileType === 'single_frame') {
      inner = `<rect x="28" y="26" width="94" height="152" rx="2" fill="#F7F3EC" stroke="#B59B7C" stroke-width="2"/>
               <line x1="12" y1="10" x2="28" y2="26" stroke="#DFD5C7" stroke-width="1"/>
               <line x1="138" y1="10" x2="122" y2="26" stroke="#DFD5C7" stroke-width="1"/>
               <line x1="12" y1="194" x2="28" y2="178" stroke="#DFD5C7" stroke-width="1"/>
               <line x1="138" y1="194" x2="122" y2="178" stroke="#DFD5C7" stroke-width="1"/>`;
    } else if (profileType === 'country') {
      inner = `<rect x="28" y="26" width="94" height="152" rx="2" fill="#F3ECE2" stroke="#B7A38A" stroke-width="2"/>
               <rect x="36" y="34" width="78" height="136" fill="#FAF7F2" stroke="#D6C9B8" stroke-width="1.2"/>
               <line x1="60" y1="34" x2="60" y2="170" stroke="#DDD1C0" stroke-width="1.2"/>
               <line x1="90" y1="34" x2="90" y2="170" stroke="#DDD1C0" stroke-width="1.2"/>`;
    } else if (profileType === 'grid_glass') {
      inner = `<rect x="26" y="24" width="98" height="156" rx="2" fill="#DCE6EB" stroke="#B7A38A" stroke-width="2"/>
               <line x1="59" y1="24" x2="59" y2="180" stroke="#FDFBF7" stroke-width="3.2"/>
               <line x1="91" y1="24" x2="91" y2="180" stroke="#FDFBF7" stroke-width="3.2"/>
               <line x1="26" y1="76" x2="124" y2="76" stroke="#FDFBF7" stroke-width="3.2"/>
               <line x1="26" y1="128" x2="124" y2="128" stroke="#FDFBF7" stroke-width="3.2"/>`;
    } else if (profileType === 'fluted' || profileType === 'smart_panel') {
      const cols = [24, 38, 52, 66, 80, 94, 108, 122];
      inner = cols.map(x => `<line x1="${x}" y1="18" x2="${x}" y2="186" stroke="#D4C6B4" stroke-width="2"/>`).join('');
    } else if (profileType === 'j_handle') {
      inner = `<rect x="14" y="12" width="122" height="14" rx="2" fill="#E6DDD0"/>
               <line x1="16" y1="27" x2="134" y2="27" stroke="#B58D46" stroke-width="2"/>`;
    }
    return `<svg viewBox="0 0 150 204" class="door-svg-box" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${baseRect}${inner}</svg>`;
  }

  global.GKM_MEMBRANE_CATALOG = {
    DOOR_MODELS,
    FOIL_SWATCHES,
    COMPLEMENTARY_GROUPS,
    buildDoorSvg
  };
})(window);
