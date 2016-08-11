// Major dependencies
var $ = require('jquery');

// Modernizr tests and the trigger to run them
require('browsernizr/test/css/flexbox');
require('browsernizr/test/css/flexwrap');
require('browsernizr');

require("./lazyload.js");

$(document).ready(function() {
  
  // To toggle the menus on the homepage and other pages
  $('.header__icon').on('click', function(){
    $('header').toggleClass('hide-menu');
    $('.home-nav').toggleClass('hide-home-menu');
  });

  // On homepage, button to scroll from opening section
  $("#learn-more-button").click(function() {
    $('html, body').animate({
        scrollTop: $(".l-home__info").offset().top
    }, 1500);
  });

  // Makes all blog links open in a new tab
  $('.l-post a').each(function() {
    $(this).attr('target', '_blank');
  });

  // for the side sliding menu
  $('.sliding-panel__button,.sliding-panel__fade-screen,.sliding-panel__close').on('click touchstart',function (e) {
    $('.sliding-panel__container,.sliding-panel__fade-screen').toggleClass('sliding-panel__container--is-visible');
    e.preventDefault();
  });


  // Specific tracking for clicking on portfolio items
  $('.portfolio-item').on('click', function(){
   var label = $(this).attr('href');

   ga('send', 'event', 'portfolio', 'click', label);
  });

  $("[data-lazyload]").lazyload({
    effect : "fadeIn"
  });

});






