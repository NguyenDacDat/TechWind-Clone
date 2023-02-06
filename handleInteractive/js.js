const headerElement = document.querySelector(".header-wrapper");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 30) {
    headerElement.classList.add("activeBorderBottom");
  } else {
    headerElement.classList.remove("activeBorderBottom");
  }
});
// Automatic slideshow

let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.getElementsByClassName("swiper-slide");
  console.log(slides);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 1300);
}
