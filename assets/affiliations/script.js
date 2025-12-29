document.querySelectorAll(".card-header").forEach(header => {
  header.addEventListener("click", () => {
    const card = header.parentElement;
    card.classList.toggle("active");
  });
});
