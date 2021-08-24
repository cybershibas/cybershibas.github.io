"use strict";

$(document).ready(function () {
  AOS.init(); // accordion

  $(function () {
    $(".accordion__item .accordion__title-wrap").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);

      if (!$this.hasClass("active")) {
        $(".accordion__content").slideUp(400);
        $(".accordion__item .accordion__title-wrap").removeClass("active");
        $(".accordion__item").removeClass("active");
      }

      $this.toggleClass("active");
      $this.parent().toggleClass("active");
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
  }
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
    srcImg: "images/h1-1.jpg",
    textBtn: "SHIBA C41-V"
  }, {
    srcImg: "images/h1-2.jpg",
    textBtn: "SHIBA C37-V"
  }, {
    srcImg: "images/h1-3.jpg",
    textBtn: "SHIBA C43-V"
  }]
}, {
  counter: 1,
  setData: [{
    srcImg: "images/h2-1.jpg",
    textBtn: "SHIBA C45-V"
  }, {
    srcImg: "images/h2-2.jpg",
    textBtn: "SHIBA C44-V"
  }, {
    srcImg: "images/h2-3.jpg",
    textBtn: "SHIBA C38-V"
  }]
}, {
  counter: 1,
  setData: [{
    srcImg: "images/h3-1.jpg",
    textBtn: "SHIBA C39-V"
  }, {
    srcImg: "images/h3-2.jpg",
    textBtn: "SHIBA C42-V"
  }, {
    srcImg: "images/h3-3.jpg",
    textBtn: "SHIBA C36-V"
  }]
}];
var cardWrap = document.querySelector(".card-wrap");
cardWrap.addEventListener("click", function (event) {
  if (!event.target.closest(".card__img-wrap") && !event.target.closest(".card__link")) {
    return;
  }

  var indexCard = Array.from(cardWrap.children).findIndex(function (item) {
    return item === event.target.closest(".card");
  });
  var neededData = arrOfData[indexCard];

  if (neededData.counter === neededData.setData.length) {
    neededData.counter = 0;
  }

  var targetCard = Array.from(cardWrap.children).find(function (item) {
    return item === event.target.closest(".card");
  });
  var cardImg = targetCard.querySelector("img");
  var cardBtn = targetCard.querySelector("button");
  cardImg.src = neededData.setData[neededData.counter].srcImg;
  cardBtn.textContent = neededData.setData[neededData.counter].textBtn;
  neededData.counter += 1;
});