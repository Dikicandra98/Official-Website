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

// Filter Portofolio
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        // Hapus class active dari semua tombol
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Tambahkan class active ke tombol yang diklik
        button.classList.add('active');

        // Filter item berdasarkan kategori
        portfolioItems.forEach(item => {
            if (category === "all" || item.getAttribute('data-category') === category) {
                item.style.display = "inline-block"; // Perbaikan disini
            } else {
                item.style.display = "none";
            }
        });
    });
});
