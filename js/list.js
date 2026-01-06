
const API = "https://sheetdb.io/api/v1/xymzjq5wk64fa";
const container = document.getElementById("property-list");

fetch(API)
  .then(res => res.json())
  .then(properties => {
    properties.forEach(p => {
      const card = document.createElement("div");
      card.className = "property-card";

      card.innerHTML = `
        <img src="${p.img1}" />
        <h3>${p.title}</h3>
        <p>${p.location}</p>
        <strong>${p.price}</strong>
      `;

      card.onclick = () => {
        window.location.href = `property.html?id=${p.id}`;
      };

      container.appendChild(card);
    });
  });

