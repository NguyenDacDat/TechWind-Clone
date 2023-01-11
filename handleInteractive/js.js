const headerElement = document.querySelector(".header-wrapper");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 30) {
    headerElement.classList.add("activeBorderBottom");
  } else {
    headerElement.classList.remove("activeBorderBottom");
  }
});
// Scroll headers
