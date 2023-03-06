let slides = document.querySelectorAll(".slider-item");
let slideIndex = 1;

run();
function run(){
    showSlidesAuto()
    showSlides(slideIndex);

}
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function showSlides(n=1) {
    let i;
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
function showSlidesAuto(){
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlidesAuto, 8000);
}
