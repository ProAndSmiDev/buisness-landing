;
(function () {
  const giveMeFullScreenPls = () => {
    const vh = window.innerHeight * .01;

    document.documentElement.style.setProperty('--vh', vh + 'px');
  };

  window.addEventListener('DOMContentLoaded', giveMeFullScreenPls);
  window.addEventListener('resize', giveMeFullScreenPls);
})();
