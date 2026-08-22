/* ========================================================
   HEZHA PRODUCTS & CATEGORIES CONTROLLER
   ======================================================== */

let myCart = [
  { name: "Cute Medali", price: 15 },
  { name: "Warm Scarf", price: 25 }
];

let myWishlist = [
  { name: "Cute Medali", price: 15, img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80" }
];

// هەموو بەرهەمەکانی فرۆشگا بە پۆلەکانیانەوە
const allProducts = [
  { name: "Cute Medali", price: 15, cat: "مەدالی", img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80", stars: "★★★★★ (124)" },
  { name: "Warm Scarf", price: 25, cat: "ملپێچ", img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=400&q=80", stars: "★★★★★ (98)" },
  { name: "Crochet Hat", price: 20, cat: "کلاو", img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=400&q=80", stars: "★★★★★ (76)" },
  { name: "Handmade Outfit", price: 45, cat: "جلوبەرگ", img: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=400&q=80", stars: "★★★★★ (112)" }
];

// فیلتەرکردنی بەشەکان کاتێک کلیک لەسەر پۆلێک دەکرێت
function filterByCategory(category) {
  switchNav('shop');
  const grid = document.getElementById('shopProductGrid');
  const title = document.getElementById('shopTitle');

  let filtered = allProducts;
  if (category !== 'all') {
    filtered = allProducts.filter(p => p.cat === category);
    title.innerText = `بەشێ: ${category} 🌸`;
  } else {
    title.innerText = "هەمی بەرهەمێن دەستچن 🌸";
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
        <button class="btn-buy-m" onclick="quickAdd('${p.name}', ${p.price})">زێدەکرن بۆ سەبەتێ</button>
      </div>
    `;
  });
  grid.innerHTML = html;
}

function toggleWishlist(name, price, img) {
  const exists = myWishlist.some(w => w.name === name);
  if (!exists) {
    myWishlist.push({ name, price, img });
    alert(`بەرهەمێ "${name}" هاتە زێدەکرن بۆ حەزژێکریێن من ♡`);
  } else {
    myWishlist = myWishlist.filter(w => w.name !== name);
    alert(`بەرهەمێ "${name}" ژ حەزژێکرییان هاتە راکرن.`);
  }
  document.getElementById('topWishCount').innerText = myWishlist.length;
}

function renderWishlist() {
  const box = document.getElementById('wishlistContentBox');
  if (myWishlist.length === 0) {
    box.innerHTML = `<p style="color:var(--muted); text-align:center; padding:15px;">هیچ بەرهەمەک نەهاتییە هەلبژارتن.</p>`;
    return;
  }
  let html = '';
  myWishlist.forEach(w => {
    html += `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid var(--border); padding-bottom:8px;">
      <span style="font-weight:700;">🌸 ${w.name}</span>
      <span style="font-weight:700; color:var(--deep-berry);">$${w.price}</span>
    </div>`;
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

  if (tab === 'shop') filterByCategory('all');
  if (tab === 'cart') renderCart();
  if (tab === 'wishlist') renderWishlist();
  if (tab === 'profile') checkAuthStatus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function quickAdd(name, price) {
  myCart.push({ name, price });
  document.getElementById('topBagCount').innerText = myCart.length;
  alert(`بەرهەمێ "${name}" هاتە زێدەکرن بۆ سەبەتێ 🌸`);
}

function renderCart() {
  const box = document.getElementById('cartContentBox');
  if (myCart.length === 0) {
    box.innerHTML = `<p style="color:var(--muted); text-align:center; padding:15px;">سەبەتا تە یا ڤالایە.</p>`;
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
      <span>کۆمێ گشتی:</span><span style="color:var(--deep-berry);">$${total}</span>
    </div>
    <button class="btn-pink" style="width:100%;" onclick="checkoutWithAccount(${total})">تەمامکرنا داخوازیێ ب WhatsApp 💬</button>`;
  box.innerHTML = html;
}

function checkoutWithAccount(total) {
  const stored = localStorage.getItem('hezha_account');
  let name = 'نەدیار', contact = 'نەدیار', address = 'نەدیار';

  if (stored) {
    const u = JSON.parse(stored);
    name = u.name;
    contact = u.contact;
    address = u.address;
  }

  const items = myCart.map(i => i.name).join('، ');
  let text = `سڵاڤ HEZHA، داخوازیەکا نوو ژ وێبسایتی:%0A` +
             `👤 کڕیار: ${name}%0A` +
             `📞 پەیوەندی: ${contact}%0A` +
             `📍 ناڤونیشان: ${address}%0A` +
             `🌸 بەرهەم: ${items}%0A` +
             `💰 کۆمێ گشتی: $${total}`;

  window.open(`https://wa.me/?text=${text}`, '_blank');
}

function orderWhatsAppCustom() {
  const item = document.getElementById('custItem').value;
  const msg = document.getElementById('custMsg').value;
  const stored = localStorage.getItem('hezha_account');
  let name = stored ? JSON.parse(stored).name : 'نەدیار';

  let text = `سڵاڤ HEZHA، داخوازیا تایبەت:%0A👤 کڕیار: ${name}%0A🌸 بەرهەم: ${item}%0A💌 نامە: ${msg || 'بێ نامە'}`;
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

function filterSearch(q) {
  const res = document.getElementById('searchBoxResult');
  if (!q.trim()) {
    res.innerHTML = "ل چ بەرهەمەکێ دگەڕیی؟";
    return;
  }
  res.innerHTML = `<div class="prod-card-m" style="margin-top:10px;">
    <div class="prod-title-m">ئەنجام بۆ: "${q}"</div>
    <button class="btn-buy-m" style="margin-top:8px;" onclick="switchNav('shop')">دیتنا هەمی بەرهەمان</button>
  </div>`;
}

checkAuthStatus();
