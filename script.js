// Simple script for gallery lightbox + clock

// CLOCK
function pad(n){ return n<10 ? '0'+n : n }
function updateClock(){
  const now = new Date();
  const h = pad(now.getHours());
  const m = pad(now.getMinutes());
  const s = pad(now.getSeconds());
  document.getElementById('clock').textContent = `${h}:${m}:${s}`;
}
updateClock();
setInterval(updateClock, 1000);

// GALLERY & LIGHTBOX
const gallery = document.getElementById('gallery');
const items = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightboxImage');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('closeBtn');

items.forEach(img => {
  img.addEventListener('click', () => {
    lbImg.src = img.src;              // use same src for bigger image (or data-full attribute)
    caption.textContent = img.alt || '';
    lightbox.classList.remove('hidden');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

// Close when click close button or background or press Esc
closeBtn.addEventListener('click', hideLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) hideLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideLightbox();
});

function hideLightbox(){
  lightbox.classList.add('hidden');
  lightbox.setAttribute('aria-hidden', 'true');
  lbImg.src = '';
}
