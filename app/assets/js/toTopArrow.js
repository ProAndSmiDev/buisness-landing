;
(function () {
  const menus = document.querySelectorAll('.menu');
  const arrowBtn = document.querySelector('.to-top');

  arrowBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});

    menus.forEach((item) => {
      const menuLink = item.querySelectorAll('.menu__link');

      menuLink.forEach((link) => {
        link.classList.remove('menu__link--active');

        if (link.innerText.toLocaleLowerCase() === 'home') {
          link.classList.add('menu__link--active');
        }
      });
    });
  });

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    if (scrolled > 100) {
      arrowBtn.classList.add('to-top--active');
    } else {
      arrowBtn.classList.remove('to-top--active');
    }
  });
})();