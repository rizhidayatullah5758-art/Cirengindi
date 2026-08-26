/* =========================================
   WHATSAPP CIRENG INDI
========================================= */

const nomorWhatsApp = "6282254710903";


/* =========================================
   PESAN PRODUK
========================================= */

function pesan(namaProduk) {

    const teks =
        "Halo Cireng Indi, saya ingin memesan:\n\n" +
        namaProduk +
        "\n\nMohon informasi ketersediaannya.";

    const url =
        "https://wa.me/" +
        nomorWhatsApp +
        "?text=" +
        encodeURIComponent(teks);

    window.open(url, "_blank");
}


/* =========================================
   UPDATE HARGA
========================================= */

function ubahHarga(selectElement) {

    const card =
        selectElement.closest(".product-card");

    if (!card) return;


    const harga =
        selectElement.value;

    const priceElement =
        card.querySelector(".product-price");

    if (!priceElement) return;


    priceElement.textContent =
        "Rp" +
        Number(harga).toLocaleString("id-ID");
}


/* =========================================
   PESAN DENGAN PILIHAN UKURAN / VARIAN
========================================= */

function pesanProduk(button) {

    const card =
        button.closest(".product-card");

    if (!card) return;


    const namaElement =
        card.querySelector(".product-name");

    const select =
        card.querySelector("select");


    const namaProduk =
        namaElement
            ? namaElement.textContent.trim()
            : "Produk";


    let pilihan = "";


    if (select) {

        pilihan =
            select.options[
                select.selectedIndex
            ].text;
    }


    let teks =
        "Halo Cireng Indi, saya ingin memesan:\n\n" +
        namaProduk;


    if (pilihan) {

        teks +=
            "\nPilihan: " +
            pilihan;
    }


    teks +=
        "\n\nMohon informasi ketersediaannya.";


    const url =
        "https://wa.me/" +
        nomorWhatsApp +
        "?text=" +
        encodeURIComponent(teks);


    window.open(url, "_blank");
}
