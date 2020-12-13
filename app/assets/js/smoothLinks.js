;
(function(){
  const allLinks = document.querySelectorAll('a[href^="#"]');

  allLinks.forEach((link, i) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const blockID = link.getAttribute('href').substr(1);
      const blockEl = document.getElementById(blockID).offsetTop;

      (window.innerWidth >= 768)
        ? window.scrollTo({top: blockEl - 85, behavior:'smooth'})
        : window.scrollTo({top: blockEl - 56, behavior:'smooth'});
    });
  });
})();