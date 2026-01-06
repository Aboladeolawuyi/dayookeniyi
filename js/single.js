const API = "https://sheetdb.io/api/v1/xymzjq5wk64fa";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(API)
  .then(res => res.json())
  .then(data => {
    const p = data.find(item => item.id === id);

    if (!p) {
      document.getElementById("property").innerHTML = "Property not found";
      return;
    }

    let images = "";
    for (let i = 1; i <= 10; i++) {
      if (p[`img${i}`]) {
        images += `<img src="${p[`img${i}`]}" />`;
      }
    }

    document.getElementById("property").innerHTML = `
      <h1>${p.title}</h1>
      <p>${p.location}</p>
      <h2>${p.price}</h2>
      <div class="gallery">${images}</div>
      <p>${p.description}</p>
    `;
  });

