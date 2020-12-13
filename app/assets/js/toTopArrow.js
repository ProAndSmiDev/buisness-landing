;
(function () {
  const arrowBtn = document.querySelector('.to-top');

  arrowBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
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