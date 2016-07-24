---
---

{% include_relative jquery.min.js %}
{% include_relative lazyload.js %}


$( document ).ready(function() {
    
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

  // Specific tracking for clicking on portfolio items
  $('.portfolio-item').on('click', function(){
   var label = $(this).attr('href');

   ga('send', 'event', 'portfolio', 'click', label);
  });

  $("[data-lazyload]").lazyload({
    effect : "fadeIn"
  });


  {% include_relative analytics.js %}

});



