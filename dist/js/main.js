$(document).ready(function(){

  'use strict';

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    dots: true,
    pauseOnHover: false,
 });
 $('.news-box').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
  });
  $('.reviews-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
  });
  $('.menu-icon').click(function() {
    $(this).toggleClass('active');
    $('.top-menu__nav').toggleClass('toggle');
   
  })
  $('.test').click(function() {
    $('.done').toggleClass('fade');
   
  })
  
  $('select').niceSelect();

  var $projects = $('.galery-container');

  $projects.isotope({
      itemSelector: '.galery-photo',
      layoutMode: 'fitRows'
  });

  $('ul.filters > li').on('click', function(e){

      e.preventDefault();

      var filter = $(this).attr('data-filter');

      $('ul.filters > li').removeClass('active');
      $(this).addClass('active');

      $projects.isotope({filter: filter});

  });
  $('.galery-photo').magnificPopup({
    type: 'image',
    zoom: {
        enabled: true,
        duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
    }
    });

});

var nav = $('.top-menu');
 
$(window).scroll(function () {
  if ($(this).scrollTop() > 30) {
    nav.addClass("on");
  } else {
    nav.removeClass("on");
  }
});


$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
       $('.back-to-top').fadeIn();
  } else {
      $('.back-to-top').fadeOut();
  }
});    
$('.back-to-top').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 700);
  return false;
});

