// Basic enhancements and demo data. Replace payment redirect URLs with your real processor links.


// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();


// Mobile nav (optional simple toggle)
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
navToggle.addEventListener('click', () => {
const nav = document.querySelector('.nav');
const open = nav.style.display === 'flex';
nav.style.display = open ? 'none' : 'flex';
navToggle.setAttribute('aria-expanded', String(!open));
});
}


// Demo events/news for dashboard
const eventsList = document.getElementById('eventsList');
if (eventsList) {
const events = [
{ date: '2025-11-05', title: 'Farrier visit' },
{ date: '2025-11-18', title: 'Vaccination clinic (Vet A)' },
{ date: '2025-12-03', title: 'Dentistry day' }
];
eventsList.innerHTML = events.map(e => `<li><strong>${new Date(e.date).toLocaleDateString()}</strong> — ${e.title}</li>`).join('');
}


const newsList = document.getElementById('newsList');
if (newsList) {
const news = [
{ date: '2025-10-20', text: 'Winter blankets: please label clearly and drop by October 31.' },
{ date: '2025-10-12', text: 'New hay delivery schedule posted in the barn office.' }
];
newsList.innerHTML = news.map(n => `<li><strong>${new Date(n.date).toLocaleDateString()}</strong> — ${n.text}</li>`).join('');
}


// Payments (demo). Replace URLs below with real links (e.g., Stripe Payment Links or PayPal hosted buttons).
const BOARD_PAYMENT_URL = 'https://example-payments.com/board'; // TODO: replace
const OTHER_FEES_URL = 'https://example-payments.com/other'; // TODO: replace


function redirectWithParams(url, params){
const u = new URL(url);
Object.entries(params).forEach(([k,v]) => u.searchParams.set(k, v));
window.location.href = u.toString();
}


const boardPaymentForm = document.getElementById('boardPaymentForm');
if (boardPaymentForm){
boardPaymentForm.addEventListener('submit', (e) => {
e.preventDefault();
const horse = document.getElementById('horseSelect').value;
const planAmount = document.getElementById('boardPlan').value;
const month = document.getElementById('boardMonth').value;
}
<script>
  const b = document.getElementById('brandName');
  const s = document.getElementById('brandNameSub');
  if (b && s) s.textContent = b.textContent;
</script>