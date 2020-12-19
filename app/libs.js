import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  }
});