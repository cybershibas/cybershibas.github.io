"use strict";

$(document).ready(function () {
  AOS.init();
  $('a[href^="#"]').click(function () {
    var href = $.attr(this, 'href');
    $('.js-burger').removeClass('active');
    $('.js-nav').removeClass('active');
    $('body').removeClass('overflow');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500);
    return false;
  });

  if (document.querySelector('.js-burger')) {
    var BURGER = document.querySelector('.js-burger');
    var NAV = document.querySelector('.js-nav');
    var BODY = document.querySelector('body');
    var OVERFLOW = 'overflow';
    var ACTIVE = 'active';
    BURGER.addEventListener('click', function () {
      BURGER.classList.toggle(ACTIVE);
      NAV.classList.toggle(ACTIVE);
      BODY.classList.toggle(OVERFLOW);
    });
  }
}); //window height

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
window.addEventListener('resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
});