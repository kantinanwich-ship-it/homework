document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const search = document.querySelector('.search input');
if (search) search.addEventListener('keydown', e => {
  if (e.key === 'Enter' && search.value.trim()) {
    const term = search.value.trim().toLowerCase();
    const target = [...document.querySelectorAll('h1,h2,h3,p')].find(el => el.textContent.toLowerCase().includes(term));
    if (target) target.scrollIntoView({behavior:'smooth',block:'center'});
    else search.placeholder = 'ยังไม่พบคำนี้ ลองค้นหาใหม่';
  }
});