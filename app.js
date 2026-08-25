/* ========================================================
   HEZHA PRODUCTS, MULTI-LANGUAGE & CONTROLLER
   ======================================================== */

let currentLang = 'ku'; // ku -> en -> ar

const translations = {
  ku: {
    langBtn: "🌐 کوردی",
    topBadge: "✨ کرۆشێیا تایبەت",
    heroText: "هندەک تشت دهێنە چێکرن...<br>هندەک تشت دهێنە هەستپێکرن. ♡",
    heroShopBtn: "Shop Now ♡ →",
    heroCustomBtn: "Make It Personal ✨",
    featDelivery: "گەهاندنا دهۆکێ 🚚",
    featGift: "پێچانا دیاریێ 🎁",
    featQuality: "ب کوالێتییا بلند 💎",
    secCatTitle: "بەشێن ئیشێن دەستچن ♡",
    secSeeAll: "هەمییان ببینە →",
    catCard1: "مەدالی",
    catCardSub1: "مەدالیێن نازدار",
    catCard2: "ملپێچ",
    catCardSub2: "ملپێچێن گەرم",
    catCard3: "کلاو",
    catCardSub3: "کلاوێن کرۆشێ",
    catCard4: "جل و بەرگ",
    catCardSub4: "جلوبەرگێن دەستچن",
    secBestTag: "پترترین داخوازی کری",
    badgeHotText: "🔥 پڕفرۆش",
    addCartBtn: "زێدەکرن بۆ سەبەتێ",
    shopTitleAll: "هەمی بەرهەمێن دەستچن 🌸",
    shopBackHome: "← سەرەکی",
    catAll: "هەمی",
    cat1: "مەدالی 🎀",
    cat2: "ملپێچ 🧣",
    cat3: "کلاو 🧶",
    cat4: "جل و بەرگ 👗",
    searchTitle: "لێگەڕیان 🔍",
    searchPlaceholder: "ناڤێ بەرهەمی بنڤیسە...",
    searchDefault: "ل چ بەرهەمەکێ دگەڕیی؟",
    wishTitle: "حەزژێکریێن من ♡",
    wishShopTag: "کڕین",
    wishEmpty: "هیچ بەرهەمەک نەهاتییە هەلبژارتن.",
    delivTitle: "گەهاندنا دهۆکێ و دەوروبەر 🚚",
    delivBackHome: "← سەرەکی",
    delivSelectLabel: "جهێ گەهاندنێ هەلبژێرە:",
    delivStartBtn: "دەستپێکرنا کڕینێ 🛍️",
    customTitle: "داخوازیا تایبەت ✨",
    customItemLabel: "جۆرێ دەستچنی:",
    customMsgLabel: "نامەیا کارتێ:",
    customPlaceholder: "نامەیەکا جوان بنڤیسە...",
    customSendBtn: "فرێکرن ب WhatsApp 💬",
    cartTitle: "سەبەتا تە 🛍️",
    cartEmpty: "سەبەتا تە یا ڤالایە.",
    cartTotal: "کۆمێ گشتی:",
    cartCheckout: "تەمامکرنا داخوازیێ ب WhatsApp 💬",
    profileTitle: "پرۆفایل و هەژمار 👤",
    editAddrHeading: "دەستکاریکرنا ناڤونیشانی",
    editAddrLabel: "باژێڕ و ناڤونیشان:",
    updateAddrBtn: "نویکرنا ناڤونیشانی",
    logoutBtn: "دەرکەفتن ژ هەژمارێ (Logout)",
    createAccTitle: "دروستکرنا هەژمارێ ✨",
    togglePhone: "ب ژمارا مۆبایلێ 📱",
    toggleGmail: "ب ناڤونیشانێ Gmail ✉️",
    nameLabel: "ناڤێ تە یێ سیانی:",
    phoneLabel: "ژمارا مۆبایلێ (WhatsApp):",
    gmailLabel: "ئیمەیڵ (Gmail):",
    addressLabel: "باژێڕ و ناڤونیشان:",
    sendCodeBtn: "ناردنا کۆدێ پشتڕاستکرنێ 📩",
    verifyCodeTitle: "کۆدێ پشتڕاستکرنێ بنڤیسە 🔐",
    confirmCodeBtn: "پشتڕاستکرن ✓",
    backBtn: "← زڤڕین",
    navTextHome: "سەرەکی",
    navTextShop: "فرۆشگەهـ",
    navTextSearch: "لێگەڕیان",
    navTextWish: "حەزژێکری",
    navTextProfile: "پرۆفایل",
    dir: "rtl"
  },
  en: {
    langBtn: "🌐 English",
    topBadge: "✨ Exclusive Crochet",
    heroText: "Some things are made...<br>Some things are felt. ♡",
    heroShopBtn: "Shop Now ♡ →",
    heroCustomBtn: "Make It Personal ✨",
    featDelivery: "Duhok Delivery 🚚",
    featGift: "Gift Wrapping 🎁",
    featQuality: "Premium Quality 💎",
    secCatTitle: "Handmade Categories ♡",
    secSeeAll: "View All →",
    catCard1: "Keychain",
    catCardSub1: "Cute Keychains",
    catCard2: "Scarf",
    catCardSub2: "Warm Scarves",
    catCard3: "Beanie / Hat",
    catCardSub3: "Crochet Hats",
    catCard4: "Clothing",
    catCardSub4: "Handmade Outfits",
    secBestTag: "Most Requested",
    badgeHotText: "🔥 Bestseller",
    addCartBtn: "Add to Bag",
    shopTitleAll: "All Handmade Items 🌸",
    shopBackHome: "← Home",
    catAll: "All",
    cat1: "Keychain 🎀",
    cat2: "Scarf 🧣",
    cat3: "Beanie 🧶",
    cat4: "Clothing 👗",
    searchTitle: "Search 🔍",
    searchPlaceholder: "Search handmade items...",
    searchDefault: "What are you looking for?",
    wishTitle: "My Wishlist ♡",
    wishShopTag: "Shop",
    wishEmpty: "No items saved in wishlist.",
    delivTitle: "Duhok & Region Delivery 🚚",
    delivBackHome: "← Home",
    delivSelectLabel: "Choose Delivery Area:",
    delivStartBtn: "Start Shopping 🛍️",
    customTitle: "Custom Order Studio ✨",
    customItemLabel: "Select Crochet Type:",
    customMsgLabel: "Card Message:",
    customPlaceholder: "Write a lovely message...",
    customSendBtn: "Send via WhatsApp 💬",
    cartTitle: "Your Shopping Bag 🛍️",
    cartEmpty: "Your bag is empty.",
    cartTotal: "Total:",
    cartCheckout: "Checkout via WhatsApp 💬",
    profileTitle: "Profile & Account 👤",
    editAddrHeading: "Edit Address",
    editAddrLabel: "City & Address:",
    updateAddrBtn: "Update Address",
    logoutBtn: "Logout Account",
    createAccTitle: "Create Account ✨",
    togglePhone: "By Phone 📱",
    toggleGmail: "By Gmail ✉️",
    nameLabel: "Full Name:",
    phoneLabel: "Phone Number (WhatsApp):",
    gmailLabel: "Gmail Address:",
    addressLabel: "City & Address:",
    sendCodeBtn: "Send Verification Code 📩",
    verifyCodeTitle: "Enter Verification Code 🔐",
    confirmCodeBtn: "Verify ✓",
    backBtn: "← Back",
    navTextHome: "Home",
    navTextShop: "Shop",
    navTextSearch: "Search",
    navTextWish: "Wishlist",
    navTextProfile: "Profile",
    dir: "ltr"
  },
  ar: {
    langBtn: "🌐 العربية",
    topBadge: "✨ كروشيه حصري",
    heroText: "بعض الأشياء تُصنع...<br>وبعضها يُشعر بها. ♡",
    heroShopBtn: "تسوق الآن ♡ →",
    heroCustomBtn: "طلب خاص ✨",
    featDelivery: "توصيل دهوك 🚚",
    featGift: "تغليف هدايا 🎁",
    featQuality: "جودة عالية 💎",
    secCatTitle: "أقسام المشغولات اليدوية ♡",
    secSeeAll: "عرض الكل →",
    catCard1: "ميداليات",
    catCardSub1: "ميداليات مميزة",
    catCard2: "وشاح",
    catCardSub2: "أوشحة دافئة",
    catCard3: "قبعات",
    catCardSub3: "قبعات كروشيه",
    catCard4: "ملابس",
    catCardSub4: "أزياء يدوية",
    secBestTag: "الأكثر طلباً",
    badgeHotText: "🔥 الأكثر مبيعاً",
    addCartBtn: "إضافة إلى السلة",
    shopTitleAll: "جميع المنتجات اليدوية 🌸",
    shopBackHome: "← الرئيسية",
    catAll: "الكل",
    cat1: "ميداليات 🎀",
    cat2: "وشاح 🧣",
    cat3: "قبعات 🧶",
    cat4: "ملابس 👗",
    searchTitle: "البحث 🔍",
    searchPlaceholder: "اكتب اسم المنتج...",
    searchDefault: "عن ماذا تبحث؟",
    wishTitle: "قائمتي المفضلة ♡",
    wishShopTag: "تسوق",
    wishEmpty: "لا توجد عناصر في المفضلة.",
    delivTitle: "توصيل دهوك والمناطق 🚚",
    delivBackHome: "← الرئيسية",
    delivSelectLabel: "اختر موقع التوصيل:",
    delivStartBtn: "ابدأ التسوق 🛍️",
    customTitle: "استوديو الطلب الخاص ✨",
    customItemLabel: "نوع القطعة:",
    customMsgLabel: "رسالة الكارت:",
    customPlaceholder: "اكتب رسالة لطيفة...",
    customSendBtn: "إرسال عبر WhatsApp 💬",
    cartTitle: "حقيبة التسوق 🛍️",
    cartEmpty: "حقيبتك فارغة.",
    cartTotal: "المجموع الكلي:",
    cartCheckout: "إتمام الطلب عبر WhatsApp 💬",
    profileTitle: "الملف الشخصي والحساب 👤",
    editAddrHeading: "تعديل العنوان",
    editAddrLabel: "المدينة والعنوان:",
    updateAddrBtn: "تحديث العنوان",
    logoutBtn: "تسجيل الخروج",
    createAccTitle: "إنشاء حساب جديد ✨",
    togglePhone: "عبر الهاتف 📱",
    toggleGmail: "عبر Gmail ✉️",
    nameLabel: "الاسم الثلاثي:",
    phoneLabel: "رقم الهاتف (WhatsApp):",
    gmailLabel: "البريد الإلكتروني:",
    addressLabel: "المدينة والعنوان:",
    sendCodeBtn: "إرسال رمز التحقق 📩",
    verifyCodeTitle: "أدخل رمز التحقق 🔐",
    confirmCodeBtn: "تأكيد ✓",
    backBtn: "← رجوع",
    navTextHome: "الرئيسية",
    navTextShop: "المتجر",
    navTextSearch: "البحث",
    navTextWish: "المفضلة",
    navTextProfile: "حسابي",
    dir: "rtl"
  }
};

let myCart = [
  { name: "Cute Medali", price: 15 },
  { name: "Warm Scarf", price: 25 }
];

let myWishlist = [
  { name: "Cute Medali", price: 15, img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80" }
];

const allProducts = [
  { name: "Cute Medali", price: 15, cat: "مەدالی", img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80", stars: "★★★★★ (124)" },
  { name: "Flower Medali", price: 12, cat: "مەدالی", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80", stars: "★★★★★ (88)" },
  { name: "Warm Scarf", price: 25, cat: "ملپێچ", img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=400&q=80", stars: "★★★★★ (98)" },
  { name: "Rose Scarf", price: 28, cat: "ملپێچ", img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=400&q=80", stars: "★★★★★ (104)" },
  { name: "Crochet Hat", price: 20, cat: "کلاو", img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=400&q=80", stars: "★★★★★ (76)" },
  { name: "Winter Beanie", price: 22, cat: "کلاو", img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=400&q=80", stars: "★★★★★ (92)" },
  { name: "Handmade Outfit", price: 45, cat: "جلوبەرگ", img: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=400&q=80", stars: "★★★★★ (112)" },
  { name: "Pink Cardigan", price: 50, cat: "جلوبەرگ", img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=400&q=80", stars: "★★★★★ (80)" }
];

function cycleLanguage() {
  if (currentLang === 'ku') currentLang = 'en';
  else if (currentLang === 'en') currentLang = 'ar';
  else currentLang = 'ku';

  localStorage.setItem('hezha_lang', currentLang);
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const t = translations[lang];
  document.documentElement.dir = t.dir;
  document.documentElement.lang = lang;

  const setEl = (id, val, isHtml = false) => {
    const el = document.getElementById(id);
    if (el) isHtml ? el.innerHTML = val : el.innerText = val;
  };

  setEl('langBtn', t.langBtn);
  setEl('topBadge', t.topBadge);
  setEl('heroText', t.heroText, true);
  setEl('heroShopBtn', t.heroShopBtn);
  setEl('heroCustomBtn', t.heroCustomBtn);
  setEl('featDelivery', t.featDelivery);
  setEl('featGift', t.featGift);
  setEl('featQuality', t.featQuality);
  setEl('secCatTitle', t.secCatTitle);
  setEl('secSeeAll', t.secSeeAll);
  setEl('catCard1', t.catCard1);
  setEl('catCardSub1', t.catCardSub1);
  setEl('catCard2', t.catCard2);
  setEl('catCardSub2', t.catCardSub2);
  setEl('catCard3', t.catCard3);
  setEl('catCardSub3', t.catCardSub3);
  setEl('catCard4', t.catCard4);
  setEl('catCardSub4', t.catCardSub4);
  setEl('secBestTag', t.secBestTag);
  setEl('badgeHotText', t.badgeHotText);
  setEl('shopBackHome', t.shopBackHome);
  setEl('btn-cat-all', t.catAll);
  setEl('btn-cat-مەدالی', t.cat1);
  setEl('btn-cat-ملپێچ', t.cat2);
  setEl('btn-cat-کلاو', t.cat3);
  setEl('btn-cat-جلوبەرگ', t.cat4);
  setEl('searchTitle', t.searchTitle);
  setEl('wishTitle', t.wishTitle);
  setEl('wishShopTag', t.wishShopTag);
  setEl('delivTitle', t.delivTitle);
  setEl('delivBackHome', t.delivBackHome);
  setEl('delivSelectLabel', t.delivSelectLabel);
  setEl('delivStartBtn', t.delivStartBtn);
  setEl('customTitle', t.customTitle);
  setEl('customItemLabel', t.customItemLabel);
  setEl('customMsgLabel', t.customMsgLabel);
  setEl('customSendBtn', t.customSendBtn);
  setEl('cartTitle', t.cartTitle);
  setEl('profileTitle', t.profileTitle);
  setEl('editAddrHeading', t.editAddrHeading);
  setEl('editAddrLabel', t.editAddrLabel);
  setEl('updateAddrBtn', t.updateAddrBtn);
  setEl('logoutBtn', t.logoutBtn);
  setEl('createAccTitle', t.createAccTitle);
  setEl('togglePhoneBtn', t.togglePhone);
  setEl('toggleGmailBtn', t.toggleGmail);
  setEl('nameLabel', t.nameLabel);
  setEl('phoneLabel', t.phoneLabel);
  setEl('gmailLabel', t.gmailLabel);
  setEl('addressLabel', t.addressLabel);
  setEl('sendCodeBtn', t.sendCodeBtn);
  setEl('verifyCodeTitle', t.verifyCodeTitle);
  setEl('confirmCodeBtn', t.confirmCodeBtn);
  setEl('backBtn', t.backBtn);
  setEl('navTextHome', t.navTextHome);
  setEl('navTextShop', t.navTextShop);
  setEl('navTextSearch', t.navTextSearch);
  setEl('navTextWish', t.navTextWish);
  setEl('navTextProfile', t.navTextProfile);

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  const custMsg = document.getElementById('custMsg');
  if (custMsg) custMsg.placeholder = t.customPlaceholder;

  document.querySelectorAll('.add-cart-btn').forEach(btn => btn.innerText = t.addCartBtn);

  filterByCategory('all');
}

function filterByCategory(category) {
  switchNav('shop');
  const grid = document.getElementById('shopProductGrid');
  const title = document.getElementById('shopTitle');
  const t = translations[currentLang];

  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('btn-cat-' + category);
  if (activeBtn) activeBtn.classList.add('active');

  let filtered = allProducts;
  if (category !== 'all') {
    filtered = allProducts.filter(p => p.cat === category);
    title.innerText = `${t.navTextShop}: ${category} 🌸`;
  } else {
    title.innerText = t.shopTitleAll;
  }

  let html = '';
  filtered.forEach(p => {
    html += `
      <div class="prod-card-m">
        <div class="prod-heart" onclick="toggleWishlist('${p.name}', ${p.price}, '${p.img}')">♡</div>
        <div class="prod-img-m" style="background-image:url('${p.img}');"></div>
        <div class="prod-title-m">${p.name}</div>
        <div class="stars-m">${p.stars}</div>
        <div class="price-m">$${p.price}</div>
        <button class="btn-buy-m add-cart-btn" onclick="quickAdd('${p.name}', ${p.price})">${t.addCartBtn}</button>
      </div>
    `;
  });
  grid.innerHTML = html;
}

function toggleWishlist(name, price, img) {
  const exists = myWishlist.some(w => w.name === name);
  if (!exists) {
    myWishlist.push({ name, price, img });
    alert(`♡ "${name}"`);
  } else {
    myWishlist = myWishlist.filter(w => w.name !== name);
  }
  document.getElementById('topWishCount').innerText = myWishlist.length;
}

function renderWishlist() {
  const box = document.getElementById('wishlistContentBox');
  const t = translations[currentLang];
  if (!box) return;
  if (myWishlist.length === 0) {
    box.innerHTML = `<p style="color:var(--muted); text-align:center; padding:15px;">${t.wishEmpty}</p>`;
    return;
  }
  let html = '';
  myWishlist.forEach(w => {
    html += `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid var(--border); padding-bottom:8px;">
        <span style="font-weight:700;">🌸 ${w.name}</span>
        <span style="font-weight:700; color:var(--deep-berry);">$${w.price}</span>
      </div>
    `;
  });
  box.innerHTML = html;
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  document.getElementById('themeEmoji').innerText = isDark ? '☀️' : '🌙';
  localStorage.setItem('hezha_theme', isDark ? 'dark' : 'light');
}

if (localStorage.getItem('hezha_theme') === 'dark') {
  document.body.classList.add('dark-mode');
  const emoji = document.getElementById('themeEmoji');
  if (emoji) emoji.innerText = '☀️';
}

function switchNav(tab) {
  document.querySelectorAll('.tab-view').forEach(t => t.classList.remove('active-tab'));
  const target = document.getElementById('tab-' + tab);
  if (target) target.classList.add('active-tab');

  document.querySelectorAll('.dock-link').forEach(l => l.classList.remove('active'));
  const activeNav = document.getElementById('nav-' + tab);
  if (activeNav) activeNav.classList.add('active');

  if (tab === 'cart') renderCart();
  if (tab === 'wishlist') renderWishlist();
  if (tab === 'profile') checkAuthStatus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function quickAdd(name, price) {
  myCart.push({ name, price });
  document.getElementById('topBagCount').innerText = myCart.length;
  alert(`🌸 "${name}"`);
}

function renderCart() {
  const box = document.getElementById('cartContentBox');
  const t = translations[currentLang];
  if (!box) return;
  if (myCart.length === 0) {
    box.innerHTML = `<p style="color:var(--muted); text-align:center; padding:15px;">${t.cartEmpty}</p>`;
    return;
  }
  let total = 0;
  let html = `<div style="border-bottom:1px solid var(--border); padding-bottom:8px; margin-bottom:10px;">`;
  myCart.forEach(item => {
    total += item.price;
    html += `<div style="display:flex; justify-content:space-between; margin-bottom:6px;"><span>🌸 ${item.name}</span><span style="font-weight:700;">$${item.price}</span></div>`;
  });
  html += `</div>
    <div style="display:flex; justify-content:space-between; font-weight:800; font-size:13px; margin-bottom:14px;">
      <span>${t.cartTotal}</span><span style="color:var(--deep-berry);">$${total}</span>
    </div>
    <button class="btn-pink" style="width:100%;" onclick="checkoutWithAccount(${total})">${t.cartCheckout}</button>`;
  box.innerHTML = html;
}

function checkoutWithAccount(total) {
  const stored = localStorage.getItem('hezha_account');
  let name = 'N/A', contact = 'N/A', address = 'N/A';

  if (stored) {
    const u = JSON.parse(stored);
    name = u.name;
    contact = u.contact;
    address = u.address;
  }

  const items = myCart.map(i => i.name).join('، ');
  let text = `HEZHA Order:%0A` +
             `👤 Customer: ${name}%0A` +
             `📞 Contact: ${contact}%0A` +
             `📍 Address: ${address}%0A` +
             `🌸 Items: ${items}%0A` +
             `💰 Total: $${total}`;

  window.open(`https://wa.me/?text=${text}`, '_blank');
}

function orderWhatsAppCustom() {
  const item = document.getElementById('custItem').value;
  const msg = document.getElementById('custMsg').value;
  const stored = localStorage.getItem('hezha_account');
  let name = stored ? JSON.parse(stored).name : 'N/A';

  let text = `HEZHA Custom Order:%0A👤 Customer: ${name}%0A🌸 Type: ${item}%0A💌 Note: ${msg || 'None'}`;
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

function filterSearch(q) {
  const res = document.getElementById('searchBoxResult');
  const t = translations[currentLang];
  if (!res) return;
  if (!q.trim()) {
    res.innerHTML = t.searchDefault;
    return;
  }
  const matched = allProducts.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  if (matched.length === 0) {
    res.innerHTML = "<p style='padding:20px; color:var(--muted);'>No results found.</p>";
    return;
  }
  let html = '';
  matched.forEach(p => {
    html += `
      <div class="prod-card-m" style="margin-top:10px;">
        <div class="prod-img-m" style="background-image:url('${p.img}');"></div>
        <div class="prod-title-m">${p.name}</div>
        <div class="price-m">$${p.price}</div>
        <button class="btn-buy-m add-cart-btn" onclick="quickAdd('${p.name}', ${p.price})">${t.addCartBtn}</button>
      </div>
    `;
  });
  res.innerHTML = html;
}

// Initial setup
const savedLang = localStorage.getItem('hezha_lang') || 'ku';
currentLang = savedLang;
applyLanguage(currentLang);
checkAuthStatus();
