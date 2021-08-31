"use strict";

$(document).ready(function () {
  AOS.init(); // accordion

  $(function () {
    $('.accordion__item .accordion__title-wrap').on('click', function (e) {
      e.preventDefault();
      var $this = $(this);

      if (!$this.hasClass('active')) {
        $('.accordion__content').slideUp(400);
        $('.accordion__item .accordion__title-wrap').removeClass('active');
        $('.accordion__item').removeClass('active');
      }

      $this.toggleClass('active');
      $this.parent().toggleClass('active');
      $this.next().slideToggle();
    });
  }); //anchor

  $('a[href^="#"]').click(function () {
    var href = $.attr(this, 'href');
    $('.js-burger').removeClass('active');
    $('.js-nav').removeClass('active');
    $('body').removeClass('overflow');
    $('html, body').animate({
      scrollTop: $(href).offset().top - 40
    }, 1000);
    return false;
  }); //burger

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
  } // slider


  var swiper = new Swiper('.js-item-slider', {
    loop: true,
    autoplay: {
      delay: 400,
      disableOnInteraction: false
    },
    autoplayDisableOnInteraction: true,
    slidersPerView: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    }
  });
}); //window height

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
window.addEventListener('resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
});
var arrOfData = [{
  counter: 1,
  setData: [{
    srcImg: 'images/o01.png',
    textBtn: 'SHIBA C42-V'
  }, {
    srcImg: 'images/o02.png',
    textBtn: 'SHIBA C37-V'
  }, {
    srcImg: 'images/o03.png',
    textBtn: 'SHIBA C43-V'
  }]
}, {
  counter: 1,
  setData: [{
    srcImg: 'images/o11.png',
    textBtn: 'SHIBA C41-V'
  }, {
    srcImg: 'images/o12.png',
    textBtn: 'SHIBA C44-V'
  }, {
    srcImg: 'images/o13.png',
    textBtn: 'SHIBA C38-V'
  }]
}, {
  counter: 1,
  setData: [{
    srcImg: 'images/o21.png',
    textBtn: 'SHIBA C39-V'
  }, {
    srcImg: 'images/o22.png',
    textBtn: 'SHIBA C42-V'
  }, {
    srcImg: 'images/o23.png',
    textBtn: 'SHIBA C36-V'
  }]
}];
var cardWrap = document.querySelector('.card-wrap');
cardWrap.addEventListener('click', function (event) {
  if (!event.target.closest('.card__img-wrap') && !event.target.closest('.card__link')) {
    return;
  }

  var indexCard = Array.from(cardWrap.children).findIndex(function (item) {
    return item === event.target.closest('.card');
  });
  var neededData = arrOfData[indexCard];

  if (neededData.counter === neededData.setData.length) {
    neededData.counter = 0;
  }

  var targetCard = Array.from(cardWrap.children).find(function (item) {
    return item === event.target.closest('.card');
  });
  var cardImg = targetCard.querySelector('img');
  var cardBtn = targetCard.querySelector('button');
  cardImg.src = neededData.setData[neededData.counter].srcImg;
  cardBtn.textContent = neededData.setData[neededData.counter].textBtn;
  neededData.counter += 1;
});