;
(function() {
  const arrowBtn = document.querySelector('.to-top');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    if(scrolled > 100) {
      arrowBtn.classList.add('to-top--active');
    }
    else {
      arrowBtn.classList.remove('to-top--active');
    }
  });
})();