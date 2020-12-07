;
(function () {
  const giveMeAdaptivePls = () => {
    const vh = window.innerHeight * .01;

    document.documentElement.style.setProperty('--vh', vh + 'px');
  };

  window.addEventListener('DOMContentLoaded', giveMeAdaptivePls);
  window.addEventListener('resize', giveMeAdaptivePls);
})();
