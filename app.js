/* ========================================================
   HEZHA STORE & THEME CONTROLLER
   ======================================================== */

let myCart = [
  { name: "Rosie Bouquet", price: 28 },
  { name: "Sweet Bear", price: 22 }
];

// مۆدی شەوانە و ڕۆژ
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  document.getElementById('themeEmoji').innerText = isDark ? '☀️' : '🌙';
  localStorage.setItem('hezha_theme', isDark ? 'dark' : 'light');
}

// لۆدکردنی ستایلی هەڵبژێردراو لە کاتی کردنەوە
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
