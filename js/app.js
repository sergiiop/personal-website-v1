const navSlide = () => {
  const menuBtn = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu-list');
  const navLinks = document.querySelectorAll('.menu-list li');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-active')

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.3}s`
      }
    })

    menuBtn.classList.toggle('toggle')
  })
}

navSlide();

