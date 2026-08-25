/* ========================================================
   HEZHA AUTHENTICATION & OTP SYSTEM (FULLY COMPATIBLE)
   ======================================================== */

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "hezha-store.firebaseapp.com",
  projectId: "hezha-store",
  storageBucket: "hezha-store.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

let isFirebaseConfigured = false;
if (typeof firebase !== 'undefined' && firebaseConfig.apiKey !== "YOUR_API_KEY_HERE") {
  try {
    firebase.initializeApp(firebaseConfig);
    isFirebaseConfigured = true;
  } catch (e) {
    console.warn("Firebase Init Skipped:", e);
  }
}

let currentAuthMode = 'phone';
let confirmationResult = null;
let generatedOtp = "";
let tempUser = {};

function setAuthMode(mode) {
  currentAuthMode = mode;
  const phoneBtn = document.getElementById('togglePhoneBtn');
  const gmailBtn = document.getElementById('toggleGmailBtn');
  const phoneGroup = document.getElementById('phoneInputGroup');
  const gmailGroup = document.getElementById('gmailInputGroup');

  if (mode === 'phone') {
    if (phoneBtn) phoneBtn.classList.add('active');
    if (gmailBtn) gmailBtn.classList.remove('active');
    if (phoneGroup) phoneGroup.style.display = 'block';
    if (gmailGroup) gmailGroup.style.display = 'none';
  } else {
    if (gmailBtn) gmailBtn.classList.add('active');
    if (phoneBtn) phoneBtn.classList.remove('active');
    if (gmailGroup) gmailGroup.style.display = 'block';
    if (phoneGroup) phoneGroup.style.display = 'none';
  }
}

function sendVerificationCode() {
  const nameEl = document.getElementById('regName');
  const phoneEl = document.getElementById('regPhone');
  const gmailEl = document.getElementById('regGmail');
  const addrEl = document.getElementById('regAddress');

  const name = nameEl ? nameEl.value.trim() : '';
  const phone = phoneEl ? phoneEl.value.trim() : '';
  const gmail = gmailEl ? gmailEl.value.trim() : '';
  const address = addrEl ? addrEl.value.trim() : '';

  if (!name) { alert("تکایە ناڤێ خۆ بنڤیسە!"); return; }
  if (currentAuthMode === 'phone' && !phone) { alert("تکایە ژمارا مۆبایلێ بنڤیسە!"); return; }
  if (currentAuthMode === 'gmail' && !gmail) { alert("تکایە ئیمەیڵێ Gmail بنڤیسە!"); return; }

  const target = currentAuthMode === 'phone' ? phone : gmail;
  tempUser = { name, type: currentAuthMode, contact: target, address: address || 'دهۆک' };

  if (isFirebaseConfigured && currentAuthMode === 'phone') {
    try {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
      firebase.auth().signInWithPhoneNumber(phone, window.recaptchaVerifier)
        .then((result) => {
          confirmationResult = result;
          showOtpStep(target);
        }).catch((error) => {
          alert("هەڵە ڕوویدا لە فایربەیس: " + error.message);
        });
    } catch (err) {
      fallbackOtp(target);
    }
  } else {
    fallbackOtp(target);
  }
}

function fallbackOtp(target) {
  generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
  showOtpStep(target);
  alert(`[HEZHA Security] کۆدێ پشتڕاستکرنێ: ${generatedOtp}`);
}

function showOtpStep(target) {
  const step1 = document.getElementById('userAuthStep1');
  const step2 = document.getElementById('userAuthStep2');
  const targetText = document.getElementById('verifyTargetText');

  if (step1) step1.style.display = 'none';
  if (step2) step2.style.display = 'block';
  if (targetText) targetText.innerText = `کۆد بۆ (${target}) هاتە ڕەوانەکرن`;
}

function movePin(current, nextId) {
  if (current && current.value.length >= 1 && nextId) {
    const nextEl = document.getElementById(nextId);
    if (nextEl) nextEl.focus();
  }
}

function verifyAndActivateAccount() {
  const p1 = document.getElementById('pin1')?.value || '';
  const p2 = document.getElementById('pin2')?.value || '';
  const p3 = document.getElementById('pin3')?.value || '';
  const p4 = document.getElementById('pin4')?.value || '';
  const enteredCode = p1 + p2 + p3 + p4;

  if (confirmationResult) {
    confirmationResult.confirm(enteredCode).then(() => {
      completeActivation();
    }).catch(() => {
      alert("کۆدی پشتڕاستکردنەوە هەڵەیە!");
    });
  } else {
    if (enteredCode === generatedOtp) {
      completeActivation();
    } else {
      alert("کۆدێ پشتڕاستکرنێ هەڵەیە! تکایە دووبارە تاقی بکەوە.");
    }
  }
}

function completeActivation() {
  localStorage.setItem('hezha_account', JSON.stringify(tempUser));
  const step2 = document.getElementById('userAuthStep2');
  if (step2) step2.style.display = 'none';
  checkAuthStatus();
  alert(`پیرۆزە ${tempUser.name} گیان! هەژمارا تە هاتە دروستکرن ♡`);
}

function backToStep1() {
  const step1 = document.getElementById('userAuthStep1');
  const step2 = document.getElementById('userAuthStep2');
  if (step2) step2.style.display = 'none';
  if (step1) step1.style.display = 'block';
}

function checkAuthStatus() {
  const stored = localStorage.getItem('hezha_account');
  const loggedView = document.getElementById('userLoggedInView');
  const authStep1 = document.getElementById('userAuthStep1');
  const authStep2 = document.getElementById('userAuthStep2');

  if (stored && loggedView) {
    const user = JSON.parse(stored);
    loggedView.style.display = 'block';
    if (authStep1) authStep1.style.display = 'none';
    if (authStep2) authStep2.style.display = 'none';

    const dispName = document.getElementById('dispName');
    const dispAccountType = document.getElementById('dispAccountType');
    const dispAddress = document.getElementById('dispAddress');
    const editAddress = document.getElementById('editAddress');

    if (dispName) dispName.innerText = user.name;
    if (dispAccountType) dispAccountType.innerText = (user.type === 'phone' ? '📱: ' : '✉️: ') + user.contact;
    if (dispAddress) dispAddress.innerText = '📍 ' + user.address;
    if (editAddress) editAddress.value = user.address;
  } else if (loggedView) {
    loggedView.style.display = 'none';
    if (authStep1) authStep1.style.display = 'block';
    if (authStep2) authStep2.style.display = 'none';
  }
}

function updateSavedAddress() {
  const stored = localStorage.getItem('hezha_account');
  if (stored) {
    let user = JSON.parse(stored);
    const editAddress = document.getElementById('editAddress');
    user.address = (editAddress && editAddress.value.trim()) || user.address;
    localStorage.setItem('hezha_account', JSON.stringify(user));
    checkAuthStatus();
    alert("ناڤونیشان ب سەرکەفتی هاتە گوهۆڕین ✨");
  }
}

function logoutUser() {
  localStorage.removeItem('hezha_account');
  checkAuthStatus();
  alert("تۆ ژ هەژمارا خۆ دەرکەفتی.");
}
