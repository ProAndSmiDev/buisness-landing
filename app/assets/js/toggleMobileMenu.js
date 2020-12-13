;
(function () {
  const burger = document.querySelector('.nav__burger');
  const list = document.querySelector('.menu--header');

  burger.addEventListener('click', () => {
    (burger.classList.contains('nav__burger--active'))
      ? burger.classList.remove('nav__burger--active')
      : burger.classList.add('nav__burger--active');

    (list.classList.contains('menu--active'))
      ? list.classList.remove('menu--active')
      : list.classList.add('menu--active');
  });
})();