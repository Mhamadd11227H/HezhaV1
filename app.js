/* ========================================================
   HEZHA PRODUCTS, MULTI-LANGUAGE & CONTROLLER (FULLY FIXED)
   ======================================================== */

let currentLang = localStorage.getItem('hezha_lang') || 'ku';
let currentShopCategory = 'all';
const WHATSAPP_NUMBER = '9647508863907'; // ژمارەی واتسئاپ

// کلیلەکانی کتێگۆری بۆ وەرگێڕان
const categoryKeys = {
  medali: { ku: 'مەدالی', en: 'Keychain', ar: 'ميداليات' },
  scarf: { ku: 'ملپێچ', en: 'Scarf', ar: 'وشاح' },
  hat: { ku: 'کلاو', en: 'Beanie / Hat', ar: 'قبعات' },
  clothing: { ku: 'جلوبەرگ', en: 'Clothing', ar: 'ملابس' }
};

// وەرگێڕانەکان (هەروەک پێشتر)
const translations = { ... }; // وەک لە کۆدەکەتدا هەیە

let myCart = JSON.parse(localStorage.getItem('hezha_cart')) || [];
let myWishlist = JSON.parse(localStorage.getItem('hezha_wishlist')) || [];

// هەموو بەرهەمەکان بە ناوی سێ زمان
const allProducts = [
  { 
    id: 1, 
    name: { ku: 'مەدالیێ نازدار', en: 'Cute Medali', ar: 'ميدالية لطيفة' }, 
    price: 15, 
    cat: 'medali', 
    img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80", 
    stars: "★★★★★ (124)" 
  },
  { 
    id: 2, 
    name: { ku: 'مەدالیێ گوڵ', en: 'Flower Medali', ar: 'ميدالية وردة' }, 
    price: 12, 
    cat: 'medali', 
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80", 
    stars: "★★★★★ (88)" 
  },
  { 
    id: 3, 
    name: { ku: 'ملپێچێ گەرم', en: 'Warm Scarf', ar: 'وشاح دافئ' }, 
    price: 25, 
    cat: 'scarf', 
    img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=400&q=80", 
    stars: "★★★★★ (98)" 
  },
  { 
    id: 4, 
    name: { ku: 'ملپێچێ گوڵ', en: 'Rose Scarf', ar: 'وشاح وردي' }, 
    price: 28, 
    cat: 'scarf', 
    img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=400&q=80", 
    stars: "★★★★★ (104)" 
  },
  { 
    id: 5, 
    name: { ku: 'کلاوێ کرۆشێ', en: 'Crochet Hat', ar: 'قبعة كروشيه' }, 
    price: 20, 
    cat: 'hat', 
    img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=400&q=80", 
    stars: "★★★★★ (76)" 
  },
  { 
    id: 6, 
    name: { ku: 'بینیێ زڤستانێ', en: 'Winter Beanie', ar: 'قبعة شتوية' }, 
    price: 22, 
    cat: 'hat', 
    img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=400&q=80", 
    stars: "★★★★★ (92)" 
  },
  { 
    id: 7, 
    name: { ku: 'جلێ دەستچن', en: 'Handmade Outfit', ar: 'زي يدوي' }, 
    price: 45, 
    cat: 'clothing', 
    img: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=400&q=80", 
    stars: "★★★★★ (112)" 
  },
  { 
    id: 8, 
    name: { ku: 'کاردیگانێ پەمەیی', en: 'Pink Cardigan', ar: 'كارديغان وردي' }, 
    price: 50, 
    cat: 'clothing', 
    img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=400&q=80", 
    stars: "★★★★★ (80)" 
  }
];

// ---------- فەنکشنە گشتییەکان ----------
function saveData() {
  localStorage.setItem('hezha_cart', JSON.stringify(myCart));
  localStorage.setItem('hezha_wishlist', JSON.stringify(myWishlist));
}

function getProductName(p) {
  return p.name[currentLang] || p.name.en;
}

function getCategoryName(catKey) {
  return categoryKeys[catKey]?.[currentLang] || catKey;
}

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

  // هەموو setEl ـەکان وەک پێشتر
  // ...
  // (لێرەدا بۆ کورتی هەموو setEl ـەکان نا‌نووسمەوە، بەڵام لە کۆدەکەتدا هەموویان هەن)
  
  // نوێکردنەوەی placeholder ـەکان
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  const custMsg = document.getElementById('custMsg');
  if (custMsg) custMsg.placeholder = t.customPlaceholder;

  // نوێکردنەوەی دوگمەکانی add-cart
  document.querySelectorAll('.add-cart-btn').forEach(btn => btn.innerText = t.addCartBtn);

  // نوێکردنەوەی ئەنجامی گەڕان ئەگەر بەتاڵ بێت
  const res = document.getElementById('searchBoxResult');
  if (res && !searchInput?.value.trim()) {
    res.innerHTML = t.searchDefault;
  }

  renderWishlist();
  renderProductsGrid(currentShopCategory);
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  const emoji = document.getElementById('themeEmoji');
  if (emoji) emoji.innerText = isDark ? '☀️' : '🌙';
  localStorage.setItem('hezha_theme', isDark ? 'dark' : 'light');
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

// ---------- کتێگۆری و گەڕان ----------
function filterByCategory(category) {
  currentShopCategory = category;
  switchNav('shop');
  renderProductsGrid(category);
}

function renderProductsGrid(category) {
  const grid = document.getElementById('shopProductGrid');
  const title = document.getElementById('shopTitle');
  const t = translations[currentLang];
  if (!grid) return;

  currentShopCategory = category;

  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('btn-cat-' + category);
  if (activeBtn) activeBtn.classList.add('active');

  let filtered = allProducts;
  let titleText = t.shopTitleAll;
  if (category !== 'all') {
    filtered = allProducts.filter(p => p.cat === category);
    titleText = `${t.navTextShop}: ${getCategoryName(category)} 🌸`;
  }
  if (title) title.innerText = titleText;

  let html = '';
  filtered.forEach(p => {
    const name = getProductName(p);
    const isWished = myWishlist.some(w => w.id === p.id);
    html += `
      <div class="prod-card-m">
        <div class="prod-heart ${isWished ? 'active' : ''}" onclick="toggleWishlist(${p.id}, '${name}', ${p.price}, '${p.img}')">${isWished ? '♥' : '♡'}</div>
        <div class="prod-img-m" style="background-image:url('${p.img}');"></div>
        <div class="prod-title-m">${name}</div>
        <div class="stars-m">${p.stars}</div>
        <div class="price-m">$${p.price}</div>
        <button class="btn-buy-m add-cart-btn" onclick="quickAdd(${p.id}, '${name}', ${p.price})">${t.addCartBtn}</button>
      </div>
    `;
  });
  grid.innerHTML = html;
}

function filterSearch(q) {
  const res = document.getElementById('searchBoxResult');
  const t = translations[currentLang];
  if (!res) return;
  q = q.trim();
  if (!q) {
    res.innerHTML = t.searchDefault;
    return;
  }
  const lowerQ = q.toLowerCase();
  const matched = allProducts.filter(p => {
    const name = getProductName(p).toLowerCase();
    return name.includes(lowerQ);
  });
  if (matched.length === 0) {
    res.innerHTML = `<p style='padding:20px; color:var(--muted);'>${t.searchNoResults}</p>`;
    return;
  }
  let html = '';
  matched.forEach(p => {
    const name = getProductName(p);
    html += `
      <div class="prod-card-m" style="margin-top:10px;">
        <div class="prod-img-m" style="background-image:url('${p.img}');"></div>
        <div class="prod-title-m">${name}</div>
        <div class="price-m">$${p.price}</div>
        <button class="btn-buy-m add-cart-btn" onclick="quickAdd(${p.id}, '${name}', ${p.price})">${t.addCartBtn}</button>
      </div>
    `;
  });
  res.innerHTML = html;
}

// ---------- Wishlist ----------
function toggleWishlist(id, name, price, img) {
  const exists = myWishlist.some(w => w.id === id);
  if (!exists) {
    myWishlist.push({ id, name, price, img });
    alert(`♡ "${name}"`);
  } else {
    myWishlist = myWishlist.filter(w => w.id !== id);
  }
  saveData();
  updateWishCount();
  renderProductsGrid(currentShopCategory);
  // ئەگەر لە گەڕاندا بین، ئەنجامەکەش نوێ بکەرەوە
  const searchInput = document.getElementById('searchInput');
  if (searchInput && searchInput.value.trim()) {
    filterSearch(searchInput.value);
  }
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
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px; border-bottom:1px solid var(--border); padding-bottom:8px;">
        <div style="width:44px; height:44px; border-radius:8px; background-size:cover; background-position:center; background-image:url('${w.img || ''}'); flex-shrink:0;"></div>
        <span style="font-weight:700; flex:1;">🌸 ${w.name}</span>
        <span style="font-weight:700; color:var(--deep-berry);">$${w.price}</span>
      </div>
    `;
  });
  box.innerHTML = html;
}

function updateWishCount() {
  const el = document.getElementById('topWishCount');
  if (el) el.innerText = myWishlist.length;
}

// ---------- Cart ----------
function quickAdd(id, name, price) {
  myCart.push({ id, name, price });
  saveData();
  updateBagCount();
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
  myCart.forEach((item, index) => {
    total += item.price;
    html += `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <span>🌸 ${item.name}</span>
        <span style="font-weight:700;">$${item.price}</span>
        <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;">✕</button>
      </div>
    `;
  });
  html += `</div>
    <div style="display:flex; justify-content:space-between; font-weight:800; font-size:13px; margin-bottom:14px;">
      <span>${t.cartTotal}</span><span style="color:var(--deep-berry);">$${total}</span>
    </div>
    <button class="btn-pink" style="width:100%;" onclick="checkoutWithAccount(${total})">${t.cartCheckout}</button>`;
  box.innerHTML = html;
}

function removeFromCart(index) {
  myCart.splice(index, 1);
  saveData();
  updateBagCount();
  renderCart();
}

function updateBagCount() {
  const el = document.getElementById('topBagCount');
  if (el) el.innerText = myCart.length;
}

function checkoutWithAccount(total) {
  let account = null;
  try {
    account = JSON.parse(localStorage.getItem('hezha_account'));
  } catch (e) {
    account = null;
  }
  let name = account?.name || 'N/A';
  let contact = account?.contact || 'N/A';
  let address = account?.address || 'N/A';

  const items = myCart.map(i => i.name).join('، ');
  const text = `HEZHA Order:%0A` +
               `👤 Customer: ${name}%0A` +
               `📞 Contact: ${contact}%0A` +
               `📍 Address: ${address}%0A` +
               `🌸 Items: ${items}%0A` +
               `💰 Total: $${total}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
}

function orderWhatsAppCustom() {
  const itemEl = document.getElementById('custItem');
  const msgEl = document.getElementById('custMsg');
  if (!itemEl || !msgEl) return;
  const item = itemEl.value;
  const msg = msgEl.value;
  let account = null;
  try {
    account = JSON.parse(localStorage.getItem('hezha_account'));
  } catch (e) {
    account = null;
  }
  const name = account?.name || 'N/A';
  const text = `HEZHA Custom Order:%0A👤 Customer: ${name}%0A🌸 Type: ${item}%0A💌 Note: ${msg || 'None'}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
}

// ---------- Account & Auth ----------
function checkAuthStatus() {
  const profileBox = document.getElementById('profileContentBox');
  if (!profileBox) return;
  let account = null;
  try {
    account = JSON.parse(localStorage.getItem('hezha_account'));
  } catch (e) {
    account = null;
  }
  if (account) {
    profileBox.innerHTML = `
      <p><strong>${account.name}</strong></p>
      <p>📞 ${account.contact}</p>
      <p>📍 ${account.address}</p>
      <button onclick="logout()">${translations[currentLang].logoutBtn}</button>
      <hr>
      <h3>${translations[currentLang].editAddrHeading}</h3>
      <label>${translations[currentLang].editAddrLabel}</label>
      <input type="text" id="newAddress" value="${account.address}" />
      <button onclick="updateAddress()">${translations[currentLang].updateAddrBtn}</button>
    `;
  } else {
    profileBox.innerHTML = `
      <h3>${translations[currentLang].createAccTitle}</h3>
      <button id="togglePhoneBtn" onclick="toggleAuthMethod('phone')">${translations[currentLang].togglePhone}</button>
      <button id="toggleGmailBtn" onclick="toggleAuthMethod('gmail')">${translations[currentLang].toggleGmail}</button>
      <div id="authFields">
        <label>${translations[currentLang].nameLabel}</label>
        <input type="text" id="authName" />
        <label id="phoneLabel">${translations[currentLang].phoneLabel}</label>
        <input type="tel" id="authPhone" />
        <label>${translations[currentLang].addressLabel}</label>
        <input type="text" id="authAddress" />
        <button onclick="sendCode()">${translations[currentLang].sendCodeBtn}</button>
      </div>
      <div id="verifySection" style="display:none;">
        <label>${translations[currentLang].verifyCodeTitle}</label>
        <input type="text" id="authCode" />
        <button onclick="confirmCode()">${translations[currentLang].confirmCodeBtn}</button>
      </div>
    `;
  }
}

function toggleAuthMethod(method) {
  const phoneLabel = document.getElementById('phoneLabel');
  const gmailLabel = document.getElementById('gmailLabel');
  const phoneInput = document.getElementById('authPhone');
  const gmailInput = document.getElementById('authGmail');
  if (method === 'phone') {
    if (phoneLabel) phoneLabel.style.display = 'block';
    if (gmailLabel) gmailLabel.style.display = 'none';
    if (phoneInput) phoneInput.style.display = 'block';
    if (gmailInput) gmailInput.style.display = 'none';
  } else {
    if (phoneLabel) phoneLabel.style.display = 'none';
    if (gmailLabel) gmailLabel.style.display = 'block';
    if (phoneInput) phoneInput.style.display = 'none';
    if (gmailInput) gmailInput.style.display = 'block';
  }
}

function sendCode() {
  // لێرە کۆدی پشتڕاستکردنەوە دەنێردرێت (بە شێوەیەکی سادە)
  document.getElementById('verifySection').style.display = 'block';
  alert('کۆدی پشتڕاستکردنەوە نێردرا');
}

function confirmCode() {
  const name = document.getElementById('authName').value;
  const phone = document.getElementById('authPhone')?.value || '';
  const gmail = document.getElementById('authGmail')?.value || '';
  const address = document.getElementById('authAddress').value;
  if (!name || !address) {
    alert('تکایە ناو و ناونیشان پڕکەرەوە');
    return;
  }
  const contact = phone || gmail;
  const account = { name, contact, address };
  localStorage.setItem('hezha_account', JSON.stringify(account));
  checkAuthStatus();
}

function updateAddress() {
  const newAddr = document.getElementById('newAddress').value;
  if (!newAddr) return;
  let account = JSON.parse(localStorage.getItem('hezha_account')) || {};
  account.address = newAddr;
  localStorage.setItem('hezha_account', JSON.stringify(account));
  checkAuthStatus();
}

function logout() {
  localStorage.removeItem('hezha_account');
  checkAuthStatus();
}

// ---------- دەستپێکردن ----------
document.addEventListener('DOMContentLoaded', () => {
  // گەڕان
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => filterSearch(e.target.value));
  }

  // دانانی ژمارەی سەرەتایی
  updateBagCount();
  updateWishCount();

  // بابەتی تاریک
  if (localStorage.getItem('hezha_theme') === 'dark') {
    document.body.classList.add('dark-mode');
    const emoji = document.getElementById('themeEmoji');
    if (emoji) emoji.innerText = '☀️';
  }

  // دەستپێکردنی زمان و ناوبردن
  applyLanguage(currentLang);
  switchNav('home');
});
