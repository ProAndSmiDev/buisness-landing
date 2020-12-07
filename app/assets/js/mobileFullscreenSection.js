;
window.addEventListener('resize', () => {
  const vh = window.innerHeight * .01;

  document.documentElement.style.setProperty('--vh', vh + 'px');
});