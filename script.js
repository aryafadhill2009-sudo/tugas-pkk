// ===== HAMBURGER MENU FUNCTIONALITY =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    // Ubah icon hamburger
    if (navMenu.classList.contains('active')) {
        hamburger.textContent = '✕';
    } else {
        hamburger.textContent = '☰';
    }
});

// Tutup menu saat link diklik (untuk mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.textContent = '☰';
    });
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== PORTFOLIO MODAL =====
const portfolioData = {
    1: {
            title: 'Desain Menu Premium',
        description: 'Menu resto keluarga dengan desain yang rapi, informatif, dan mudah dibaca. Mengutamakan tata letak yang nyaman serta visual menu yang menarik untuk meningkatkan pengalaman pelanggan.',
        year: '2024',
        category: 'Menu Digital & Cetak',
        rating: '⭐⭐⭐⭐⭐ (5.0)',
        image: 'https://files.catbox.moe/i1bg3p.jpeg'
    },
    2: {
        title: 'Desain Menu Standard',
        description: 'Desain menu restoran keluarga dengan layout yang mudah dibaca dan foto produk yang menggugah selera.',
        year: '2024',
        category: 'Menu Cetak',
        rating: '⭐⭐⭐⭐⭐ (4.9)',
        image: 'https://files.catbox.moe/i1bg3p.jpeg'
    },
    3: {
        title: 'Desain Menu Basick',
        description: 'E-menu interaktif dengan QR code untuk food truck. Desain playful dan colorful sesuai target market anak muda.',
        year: '2024',
        category: 'E-Menu & QR Code',
        rating: '⭐⭐⭐⭐⭐ (5.0)',
        image: 'https://files.catbox.moe/gol0d3.png'
    }
};

const modal = document.getElementById('portfolioModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalYear = document.getElementById('modalYear');
const modalCategory = document.getElementById('modalCategory');
const modalRating = document.getElementById('modalRating');

// Buka modal saat portfolio item diklik
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        const portfolioId = this.getAttribute('data-portfolio');
        const data = portfolioData[portfolioId];
        
        if (data) {
            modalImage.src = data.image;
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            modalYear.textContent = data.year;
            modalCategory.textContent = data.category;
            modalRating.textContent = data.rating;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        }
    });
});

// Tutup modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Tutup modal dengan ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe semua elemen dengan class animate
document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-zoom-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ===== HEADER SCROLL EFFECT =====
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Tambahkan background saat scroll
    if (currentScroll > 100) {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.9)';
    }
    
    lastScroll = currentScroll;
});
