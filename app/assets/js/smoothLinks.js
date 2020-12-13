;
(function () {
  const toggleActiveLink = (el) => {
    const menus = document.querySelectorAll('.menu');

    menus.forEach((m) => {
      const menuLink = m.querySelectorAll('.menu__link');

      menuLink.forEach((mLink) => {
        mLink.classList.remove('menu__link--active');

        if (mLink.innerText && mLink.innerText === el.innerText) {
          mLink.classList.add('menu__link--active');
        }
      });
    });
  };
  const allLinks = document.querySelectorAll('a[href^="#"]');

  allLinks.forEach((link, i) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const blockID = link.getAttribute('href').substr(1);
      const blockEl = document.getElementById(blockID).offsetTop;

      console.log(link.innerText, link);

      (window.innerWidth >= 768)
        ? window.scrollTo({top: blockEl - 85, behavior: 'smooth'})
        : window.scrollTo({top: blockEl - 56, behavior: 'smooth'});

      if (link.closest('.menu')) {
        toggleActiveLink(link);
      }
    });
  });
})();