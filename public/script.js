// Navbar Responsive Start
const button = document.getElementById('buttonToggle');
const menuMobile = document.getElementById('mobileMenu');
const menu = document.getElementById('changeMenu');

button.addEventListener('click', function () {
  // toggle mengadakan yang belum ada dan menghilangkan jika sudah ada
  menuMobile.classList.toggle('hidden');
  if (menuMobile.classList.contains('hidden')) {
    menu.src = 'img/more.png';
  } else {
    menu.src = 'img/close.png';
  }
});
// Navbar Responsive End
// Carousel Start
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('slide');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add('hidden');
    if(slides[i].classList.contains('hidden')) {
        slides[i].classList.remove('block');
    }
  }
  slides[slideIndex - 1].classList.replace('hidden', 'block');
}
// Carousel End
