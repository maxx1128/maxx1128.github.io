'use strict';

// Containerization for off-canvas nav functionality
function ma_offCanvasNav($, patternId) {

  var pattern;

  function init() {}
  
  function setEvents() {

    pattern.on('click', '.js-offCanvas-toggle', function(){
      pattern.toggleClass('ma-l-default__wrapper--expanded');
    });
  }

  function docReady() {
    pattern = $("#" + patternId);
    init();
    setEvents();
  }
  
  return docReady;
}


var MA_OFFCANVASNAV_EXT = {
  
  "init":function(){
    $('.ma-l-default__wrapper').each(function() {

      id = $(this).attr('id');

      if ( id === undefined ) {
        
        var
          id_num = 1 + Math.floor(Math.random() * 999999999),
          id     = 'UNIQUE_ID_' + id_num
        ;

        $(this).attr('id', id);
      }      

      ma_offCanvasNav(jQuery, id)();
    });
  }
}