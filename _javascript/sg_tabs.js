// Containerization for component tabs documentation
function sg_tabs($, patternId) {
  
  var pattern;

  function init() {
    pattern.find('.sg-tabs__tabItem:first-of-type').addClass('sg-tabs__tabItem--active');

    pattern.find('.sg-tabs__contentPanel:first-of-type').addClass('sg-tabs__contentPanel--active');
  }
  
  function setEvents() {
    pattern.on('click', '.sg-tabs__tabItem', function(){

      var selected_id = $(this).attr('tabs-link-id');

      pattern.find('.sg-tabs__tabItem').removeClass('sg-tabs__tabItem--active');
      $(this).addClass('sg-tabs__tabItem--active');

      pattern.find('.sg-tabs__contentPanel').each(function(){

        var content_id = $(this).attr('tabs-content-id');

        content_id == selected_id ? $(this).addClass('sg-tabs__contentPanel--active') : $(this).removeClass('sg-tabs__contentPanel--active')

      });
    });
  }

  function docReady() {
    pattern = $("#" + patternId);
    init();
    setEvents();
  }
  
  return docReady;
}


var SG_TABS_EXT = {
  
  "init":function(){
    $('.sg-tabs').each(function() {

      id = $(this).attr('id');

      if ( id === undefined ) {
        
        var
          id_num = 1 + Math.floor(Math.random() * 999999999),
          id     = 'UNIQUE_ID_' + id_num
        ;

        $(this).attr('id', id);
      }      

      sg_tabs(jQuery, id)();
    });
  }
}