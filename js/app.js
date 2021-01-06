const navSlide = () => {
  const menuBtn = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu-list');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-active')
  })
}

navSlide();

