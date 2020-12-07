;
(function(){
  const allLinks = document.querySelectorAll('a[href^="#"]');

  allLinks.forEach((link, i) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const blockID = link.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    });
  });
})();