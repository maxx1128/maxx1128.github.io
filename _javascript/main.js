//=include ../_bower_components/jquery/dist/jquery.min.js
//=include lazyload.js

//=include offCanvasNav.js
//=include wisdom.js

//=include sg_tabs.js

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

$(document).ready(function(){
  $("[data-lazyload]").lazyload({
    effect : "fadeIn"
  });

  $('.ma-c-blogContent a').attr('target', '_blank');

  MA_OFFCANVASNAV_EXT.init();
  MA_WISDOM_EXT.init();

  SG_TABS_EXT.init();
});
