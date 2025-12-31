const properties = [
  {
    id: 1,
    title: "5 Bedroom Detached House",
    location: "Megamound Estate, Ikota, Lekki, Lagos",
    price: "",
    images: [
      "assets/properties/home1/home1a.jpeg",
      "assets/properties/home1/home1b.jpeg",
      "assets/properties/home1/home1c.jpeg", "assets/properties/home1/home1d.jpeg", "assets/properties/home1/home1e.jpeg", "assets/properties/home1/home1f.jpeg", "assets/properties/home1/home1g.jpeg", "assets/properties/home1/home1h.jpeg", "assets/properties/home1/home1i.jpeg", "assets/properties/home1/home1j.jpeg",
    ],
    details: "5 Bedroom Detached House with Swimming pool and Bq at Megamound Estate, Ikota, Lekki, Lagos"
  },
  {
    id: 1,
    title: "4 Bedroom Semi-Detached House with Bq",
    location: "Royal Pine Estate, Orchid Road, Lekki, Lagos",
    price: "",
    images: [
      "assets/properties/home2/home2a.jpeg",
      "assets/properties/home2/home2b.jpeg",
      "assets/properties/home2/home2c.jpeg", "assets/properties/home2/home2d.jpeg", "assets/properties/home2/home2e.jpeg", "assets/properties/home2/home2f.jpeg", "assets/properties/home2/home2g.jpeg", "assets/properties/home2/home2h.jpeg", "assets/properties/home2/home2i.jpeg", "assets/properties/home2/home2j.jpeg",
    ],
    details: "4 Bedroom Semi-Detached House with Bq at Royal Pine Estate, Orchid Road, Lekki, Lagos"
  },
  {
    id: 1,
    title: "4 Bedroom Semi-Detached House with Bq",
    location: " Westend Estate, Ikota, Lekki, Lagos",
    price: "",
    images: [
      "assets/properties/home3/home3a.jpeg",
      "assets/properties/home3/home3b.jpeg",
      "assets/properties/home3/home3c.jpeg", "assets/properties/home3/home3d.jpeg", "assets/properties/home3/home3e.jpeg", "assets/properties/home3/home3f.jpeg", "assets/properties/home3/home3g.jpeg", "assets/properties/home3/home3h.jpeg", "assets/properties/home3/home3i.jpeg", "assets/properties/home3/home3j.jpeg",
    ],
    details: "4 Bedroom Semi-Detached House with Bq at Westend Estate, Ikota, Lekki, Lagos"
  },
  {
    id: 1,
    title: "4 Bedroom Semi-Detached House with Bq",
    location: "Oral Estate Extension, Lekki, Lagos",
    price: "",
    images: [
      "assets/properties/home4/home4a.jpeg",
      "assets/properties/home4/home4b.jpeg",
      "assets/properties/home4/home4c.jpeg", "assets/properties/home4/home4d.jpeg", "assets/properties/home4/home4e.jpeg", "assets/properties/home4/home4f.jpeg", "assets/properties/home4/home4g.jpeg", "assets/properties/home4/home4h.jpeg", "assets/properties/home4/home4i.jpeg", "assets/properties/home4/home4j.jpeg",
    ],
    details: "4 Bedroom Semi-Detached House with Bq at Oral Estate Extension, Lekki, Lagos"
  },
  {
    id: 1,
    title: "4 Bedroom Semi-Detached House with Bq",
    location: "Royal Pine Estate, Orchid Road, Lekki, Lagos",
    price: "",
    images: [
      "assets/properties/home5/home5a.jpeg",
      "assets/properties/home5/home5b.jpeg",
      "assets/properties/home5/home5c.jpeg", "assets/properties/home5/home5d.jpeg", "assets/properties/home5/home5e.jpeg", "assets/properties/home5/home5f.jpeg", "assets/properties/home5/home5g.jpeg", "assets/properties/home5/home5h.jpeg", "assets/properties/home5/home5i.jpeg", "assets/properties/home5/home5j.jpeg",
    ],
    details: "4 Bedroom Semi-Detached House with Bq at Royal Pine Estate, Orchid Road, Lekki, Lagos"
  },
  {
    id: 1,
    title: "4 Bedroom Semi-Detached House with Bq",
    location: "Royal Pine Estate, Orchid Road, Lekki, Lagos",
    price: "",
    images: [
      "assets/properties/home6/home6a.jpeg",
      "assets/properties/home6/home6b.jpeg",
      "assets/properties/home6/home6c.jpeg", "assets/properties/home6/home6d.jpeg", "assets/properties/home6/home6e.jpeg", "assets/properties/home6/home6f.jpeg", "assets/properties/home6/home6g.jpeg", "assets/properties/home6/home6h.jpeg", "assets/properties/home6/home6i.jpeg", "assets/properties/home6/home6j.jpeg",
    ],
    details: "4 Bedroom Semi-Detached House with Bq at Royal Pine Estate, Orchid Road, Lekki, Lagos"
  },
];

const grid = document.getElementById("listing-grid");

properties.forEach((prop) => {
  const card = document.createElement("div");

  card.style.cssText = `
    background:#fff;
    border-radius:16px;
    overflow:hidden;
    box-shadow:0 15px 35px rgba(0,0,0,0.1);
    cursor:pointer;
    transition:all 0.3s ease;
  `;

  card.onmouseover = () => {
    card.style.transform = "translateY(-8px)";
    card.style.boxShadow = "0 25px 45px rgba(0,0,0,0.2)";
  };
  card.onmouseout = () => {
    card.style.transform = "none";
    card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.1)";
  };

  let imgIndex = 0;

  const img = document.createElement("img");
  img.src = prop.images[0];
  img.style.cssText = `
    width:100%;
    height:220px;
    object-fit:cover;
    transition:opacity 0.5s;
  `;

  setInterval(() => {
    imgIndex = (imgIndex + 1) % prop.images.length;
    img.src = prop.images[imgIndex];
  }, 2500);

  const info = document.createElement("div");
  info.style.padding = "18px";

  info.innerHTML = `
    <h3 style="margin:0 0 6px">${prop.title}</h3>
    <div style="color:#777;font-size:14px">${prop.location}</div>
    <div style="color:#0a3d62;font-weight:bold;margin:10px 0">${prop.price}</div>
    <div style="font-size:13px;color:#555">${prop.details}</div>
  `;

  card.appendChild(img);
  card.appendChild(info);

  card.onclick = () => {
    localStorage.setItem("selectedProperty", JSON.stringify(prop));
    location.href = "property.html";
  };

  grid.appendChild(card);
});