// Smooth Scroll
document.querySelectorAll('.bottom-nav button').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.target);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animasi muncul saat scroll
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.classList.add('visible');
        }
    });
});

// Countdown Timer
const countdownEl = document.getElementById('countdown');
const weddingDate = new Date('2025-12-25T10:00:00').getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        countdownEl.innerHTML = `Hitung Mundur: ${days} hari ${hours} jam ${minutes} menit`;
    } else {
        countdownEl.innerHTML = "Hari Pernikahan Telah Tiba!";
    }
}, 1000);

// Form Ucapan
const form = document.getElementById('ucapanForm');
const listUcapan = document.getElementById('listUcapan');
let ucapanData = JSON.parse(localStorage.getItem('ucapan')) || [];

function renderUcapan() {
    listUcapan.innerHTML = ucapanData.map(u => `<p><strong>${u.nama}:</strong> ${u.pesan}</p>`).join('');
}
renderUcapan();

form.addEventListener('submit', e => {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const pesan = document.getElementById('pesan').value;
    ucapanData.push({ nama, pesan });
    localStorage.setItem('ucapan', JSON.stringify(ucapanData));
    renderUcapan();
    form.reset();
});

// Lightbox untuk galeri
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.background = 'rgba(0,0,0,0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.innerHTML = `<img src="${img.src}" style="max-width:90%; max-height:90%; bordertbox.remove());
        document.body.appendChild(lightbox);
    });
}).addEventListener('click', () => {
        document.body.removeChild(lightbox);
    }
