const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-section--right');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
  })
}

navSlide();

