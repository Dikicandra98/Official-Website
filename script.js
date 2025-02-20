// Ambil semua elemen dengan class "hidden"
const elements = document.querySelectorAll('.hidden');

// Fungsi untuk mengecek apakah elemen sudah masuk ke viewport
const checkVisibility = () => {
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    // Jika elemen masuk ke viewport, tambahkan class "show"
    if (elementTop < window.innerHeight && elementBottom >= 0) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
};

// Jalankan fungsi saat di-scroll dan saat halaman dimuat
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);