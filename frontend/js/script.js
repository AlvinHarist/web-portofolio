document.getElementById('downloadCvBtn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'frontend/js/cv.pdf';         // PDF path
  link.download = 'cv-alvin-haristianto-07-2025.pdf';     // Desired download filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Import from module
import Swiper from 'swiper';
import 'swiper/css'; // optionally import CSS if you're bundling

const swiper = new Swiper('.swiper', {
loop: true,
autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false,
},
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
});
