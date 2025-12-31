const container = document.getElementById("property-details");
const prop = JSON.parse(localStorage.getItem("selectedProperty"));

if (!prop) {
  container.innerHTML = "<p>Property not found</p>";
} else {
  let imgsHTML = `<div class="carousel-large">`;
  prop.images.forEach(img => {
    imgsHTML += `<img src="${img}">`;
  });
  imgsHTML += "</div>";

  container.innerHTML = `
    <h2>${prop.title}</h2>
    <p>${prop.location} · ${prop.price}</p>
    ${imgsHTML}
    <p>${prop.details}</p>
  `;
}
