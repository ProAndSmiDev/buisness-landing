;
(function(){
  const burger = document.querySelector('.nav__burger');
  const list = document.querySelector('.nav__list');

  burger.addEventListener('click', () => {
    (burger.classList.contains('nav__burger--active'))
      ? burger.classList.remove('nav__burger--active')
      : burger.classList.add('nav__burger--active');

    (list.classList.contains('list--active'))
      ? list.classList.remove('list--active')
      : list.classList.add('list--active');
  });
})();