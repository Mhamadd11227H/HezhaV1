/* ========================================================
   HEZHA AUTHENTICATION & FIREBASE OTP SYSTEM
   تێبینی: کاتێک لە Firebase پڕۆژەت دروستکرد، زانیارییەکانت لێرە دابنێ
   ======================================================== */

// زانیارییەکانی پڕۆژەی فایربەیس لێرە دادەنرێت
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "hezha-store.firebaseapp.com",
  projectId: "hezha-store",
  storageBucket: "hezha-store.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ئەگەر فایربەیس کۆنفیگ کرابوو، دەستپێدەکات
let isFirebaseConfigured = false;
if (firebaseConfig.apiKey !== "YOUR_API_KEY_HERE") {
  firebase.initializeApp(firebaseConfig);
  isFirebaseConfigured = true;
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
    phoneBtn.classList.add('active');
    gmailBtn.classList.remove('active');
    phoneGroup.style.display = 'block';
    gmailGroup.style.display = 'none';
  } else {
    gmailBtn.classList.add('active');
    phoneBtn.classList.remove('active');
    gmailGroup.style.display = 'block';
    phoneGroup.style.display = 'none';
  }
}

// ناردنی کۆدی پشتڕاستکردنەوە
function sendVerificationCode() {
  const name = document.getElementById('regName').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const gmail = document.getElementById('regGmail').value.trim();
  const address = document.getElementById('regAddress').value.trim();

  if (!name) { alert("تکایە ناڤێ خۆ بنڤیسە!"); return; }
  if (currentAuthMode === 'phone' && !phone) { alert("تکایە ژمارا مۆبایلێ بنڤیسە!"); return; }
  if (currentAuthMode === 'gmail' && !gmail) { alert("تکایە ئیمەیڵێ Gmail بنڤیسە!"); return; }

  const target = currentAuthMode === 'phone' ? phone : gmail;
  tempUser = { name, type: currentAuthMode, contact: target, address: address || 'دهۆک' };

  if (isFirebaseConfigured && currentAuthMode === 'phone') {
    // سیستەمی SMS OTPی فایربەیس
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
    firebase.auth().signInWithPhoneNumber(phone, window.recaptchaVerifier)
      .then((result) => {
        confirmationResult = result;
        showOtpStep(target);
      }).catch((error) => {
        alert("هەڵە ڕوویدا لە ناردنی کۆد: " + error.message);
      });
  } else {
    // سیستەمی لۆکاڵ کاتێک فایربەیس بەستراو نەبێت
    generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    showOtpStep(target);
    alert(`[HEZHA Security] کۆدێ پشتڕاستکرنێ: ${generatedOtp}`);
  }
}

function showOtpStep(target) {
  document.getElementById('userAuthStep1').style.display = 'none';
  document.getElementById('userAuthStep2').style.display = 'block';
  document.getElementById('verifyTargetText').innerText = `کۆد بۆ (${target}) هاتە ڕەوانەکرن`;
}

function movePin(current, nextId) {
  if (current.value.length >= 1 && nextId) {
    document.getElementById(nextId).focus();
  }
}

// پشتڕاستکردنەوەی کۆدەکە
function verifyAndActivateAccount() {
  const p1 = document.getElementById('pin1').value;
  const p2 = document.getElementById('pin2').value;
  const p3 = document.getElementById('pin3').value;
  const p4 = document.getElementById('pin4').value;
  const enteredCode = p1 + p2 + p3 + p4;

  if (confirmationResult) {
    confirmationResult.confirm(enteredCode).then((result) => {
      completeActivation();
    }).catch(() => {
      alert("کۆدی فایربەیس هەڵەیە!");
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
  document.getElementById('userAuthStep2').style.display = 'none';
  checkAuthStatus();
  alert(`پیرۆزە ${tempUser.name} گیان! هەژمارا تە هاتە پشتڕاستکرن و دروستکرن ♡`);
}

function backToStep1() {
  document.getElementById('userAuthStep2').style.display = 'none';
  document.getElementById('userAuthStep1').style.display = 'block';
}

function checkAuthStatus() {
  const stored = localStorage.getItem('hezha_account');
  const loggedView = document.getElementById('userLoggedInView');
  const authStep1 = document.getElementById('userAuthStep1');
  const authStep2 = document.getElementById('userAuthStep2');

  if (stored) {
    const user = JSON.parse(stored);
    loggedView.style.display = 'block';
    authStep1.style.display = 'none';
    authStep2.style.display = 'none';

    document.getElementById('dispName').innerText = user.name;
    document.getElementById('dispAccountType').innerText = (user.type === 'phone' ? '📱 مۆبایل: ' : '✉️ Gmail: ') + user.contact;
    document.getElementById('dispAddress').innerText = '📍 ناڤونیشان: ' + user.address;
    document.getElementById('editAddress').value = user.address;
  } else {
    loggedView.style.display = 'none';
    authStep1.style.display = 'block';
    authStep2.style.display = 'none';
  }
}

function updateSavedAddress() {
  const stored = localStorage.getItem('hezha_account');
  if (stored) {
    let user = JSON.parse(stored);
    user.address = document.getElementById('editAddress').value.trim() || user.address;
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

