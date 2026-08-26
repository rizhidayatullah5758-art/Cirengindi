/* =========================================
   KONFIGURASI WHATSAPP
========================================= */

const nomorWhatsApp = "6282254710903";


/* =========================================
   AMBIL SEMUA SLIDE & NAVIGASI
========================================= */

const slides = document.querySelectorAll(".slide");
const navButtons = document.querySelectorAll(".nav-button");

let currentSlide = 0;


/* =========================================
   PINDAH SLIDE
========================================= */

function goToSlide(index) {

    if (index < 0 || index >= slides.length) {
        return;
    }

    currentSlide = index;

    slides.forEach((slide, i) => {

        slide.classList.toggle(
            "active",
            i === currentSlide
        );

    });

    navButtons.forEach((button, i) => {

        button.classList.toggle(
            "active",
            i === currentSlide
        );

    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   PESAN PRODUK
========================================= */

function pesanProduk(namaProduk) {

    const pesan =
        `Halo Cireng Indi, saya ingin memesan ${namaProduk}.`;

    const url =
        `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
}


/* =========================================
   PESAN PAKET
========================================= */

function pesanPaket(namaPaket) {

    const pesan =
        `Halo Cireng Indi, saya ingin menanyakan ${namaPaket}. Saya ingin mengetahui pilihan paket dan harganya.`;

    const url =
        `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
}


/* =========================================
   DETEKSI SLIDE SAAT SCROLL
========================================= */

function updateActiveSlide() {

    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {

        const rect = slide.getBoundingClientRect();

        const distance =
            Math.abs(rect.top);

        if (distance < closestDistance) {

            closestDistance = distance;
            closestIndex = index;

        }

    });

    currentSlide = closestIndex;

    navButtons.forEach((button, index) => {

        button.classList.toggle(
            "active",
            index === currentSlide
        );

    });
}


/* =========================================
   SWIPE UNTUK HP
========================================= */

let touchStartX = 0;
let touchEndX = 0;


document.addEventListener(
    "touchstart",
    function (event) {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    { passive: true }
);


document.addEventListener(
    "touchend",
    function (event) {

        touchEndX =
            event.changedTouches[0].screenX;

        handleSwipe();

    },
    { passive: true }
);


function handleSwipe() {

    const swipeDistance =
        touchEndX - touchStartX;

    const minimumSwipe = 60;

    if (Math.abs(swipeDistance) < minimumSwipe) {
        return;
    }

    if (swipeDistance < 0) {

        // Geser kiri
        if (currentSlide < slides.length - 1) {
            goToSlide(currentSlide + 1);
        }

    } else {

        // Geser kanan
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }

    }
}


/* =========================================
   TOMBOL NAVIGASI
========================================= */

navButtons.forEach((button, index) => {

    button.addEventListener(
        "click",
        function () {

            goToSlide(index);

        }
    );

});


/* =========================================
   INISIALISASI
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        goToSlide(0);

    }
);
