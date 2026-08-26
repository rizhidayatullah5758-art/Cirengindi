const products = [
  {
    name: "Chicken Katsu",
    options: [
      ["1 kg", 110000],
      ["500 gr", 55000],
      ["250 gr", 28000]
    ]
  },
  {
    name: "Nugget Ayam",
    options: [
      ["1 kg", 120000],
      ["500 gr", 60000],
      ["250 gr", 30000]
    ]
  },
  {
    name: "Sempol Ayam",
    options: [
      ["Isi 30", 40000],
      ["Isi 45", 60000]
    ]
  },
  {
    name: "Tahu Bakso",
    options: [
      ["Isi 10", 35000]
    ]
  },
  {
    name: "Pempek Ikan Tenggiri",
    options: [
      ["1 kg", 110000],
      ["500 gr", 55000],
      ["Per box", 25000]
    ]
  },
  {
    name: "Cilok",
    options: [
      ["1 kg", 55000],
      ["520 gr", 30000]
    ]
  },
  {
    name: "Cireng",
    options: [
      ["1 kg", 55000],
      ["520 gr", 30000]
    ]
  },
  {
    name: "Cireng Isi",
    options: [
      ["1 pack isi 6 - Ayam Pedas", 25000],
      ["1 pack isi 6 - Original", 25000]
    ]
  },
  {
    name: "Bola Ayam Keju",
    options: [
      ["1 box isi 10", 40000]
    ]
  },
  {
    name: "Bitterballen",
    options: [
      ["1 box isi 10", 40000]
    ]
  },
  {
    name: "Bakso Ayam",
    options: [
      ["1 pack isi 50", 55000],
      ["1 pack isi 25", 28000]
    ]
  },
  {
    name: "Jamu",
    options: [
      ["Manjakani", 28000],
      ["Komplit", 28000],
      ["Kunyit Asam", 28000],
      ["Jahe Latte", 30000],
      ["Jahe Original", 28000],
      ["Sari Kacang Hijau", 28000]
    ]
  },
  {
    name: "Ebi Furai",
    options: [
      ["1 box", 40000]
    ]
  },
  {
    name: "Baceman Frozen",
    options: [
      ["1 box", 35000]
    ]
  },
  {
    name: "Ayam Ungkep",
    options: [
      ["Isi 5", 60000]
    ]
  },
  {
    name: "Dimsum Crispy",
    options: [
      ["1 box", 40000]
    ]
  },
  {
    name: "Rollade Ayam",
    options: [
      ["1 box", 35000]
    ]
  },
  {
    name: "Kebab Pisang",
    options: [
      ["1 box", 35000]
    ]
  },
  {
    name: "Kebab Daging",
    options: [
      ["1 box", 45000]
    ]
  },
  {
    name: "Corndog",
    options: [
      ["1 box", 30000]
    ]
  },
  {
    name: "Churros",
    options: [
      ["1 box", 30000]
    ]
  },
  {
    name: "Kentang Goreng",
    options: [
      ["1 box", 25000]
    ]
  },
  {
    name: "Frozen Mix Platter",
    options: [
      ["1 paket", 75000]
    ]
  },
  {
    name: "Puding Mix",
    options: [
      ["1 paket", 20000]
    ]
  },
  {
    name: "Salad Jelly",
    options: [
      ["1 paket", 15000]
    ]
  },
  {
    name: "Rengginang",
    options: [
      ["1 paket", 35000]
    ]
  }
];


function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(number);
}


function renderProducts() {
  const container = document.getElementById("product-list");

  if (!container) return;

  container.innerHTML = "";

  products.forEach((product) => {

    const card = document.createElement("div");
    card.className = "product-card";

    const title = document.createElement("h3");
    title.textContent = product.name;

    card.appendChild(title);


    if (product.options.length === 1) {

      const option = product.options[0];

      const description = document.createElement("p");
      description.textContent = option[0];

      const price = document.createElement("span");
      price.className = "product-price";
      price.textContent = formatRupiah(option[1]);

      card.appendChild(description);
      card.appendChild(price);

    } else {

      const select = document.createElement("select");
      select.className = "product-select";

      product.options.forEach((option, index) => {

        const optionElement = document.createElement("option");

        optionElement.value = index;
        optionElement.textContent =
          `${option[0]} - ${formatRupiah(option[1])}`;

        select.appendChild(optionElement);

      });

      const price = document.createElement("span");
      price.className = "product-price";

      price.textContent =
        formatRupiah(product.options[0][1]);

      select.addEventListener("change", () => {

        const selected =
          product.options[select.value];

        price.textContent =
          formatRupiah(selected[1]);

      });

      card.appendChild(select);
      card.appendChild(price);
    }

    container.appendChild(card);
  });
}


document.addEventListener("DOMContentLoaded", renderProducts);
