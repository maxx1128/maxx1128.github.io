// Containerization for component tabs documentation
function ma_wisdom($, patternId) {
  
  var 
    pattern,
    wisdoms = [
      'How different should legality and morality be?',
      'If the sky\'s falling, what was holding it up in the first place?',
      'If we could spy on two-dimensional beings, could four-dimensional beings spy on us?'
    ],
    selected_wisdom = wisdoms[Math.floor(Math.random()*wisdoms.length)]
  ;

  function init() {
    pattern.text(selected_wisdom);
  }
  
  function setEvents() {}

  function docReady() {
    pattern = $("#" + patternId);
    init();
    setEvents();
  }
  
  return docReady;
}


var MA_WISDOM_EXT = {
  
  "init":function(){
    $('.ma-c-wisdom').each(function() {

      id = $(this).attr('id');

      if ( id === undefined ) {
        
        var
          id_num = 1 + Math.floor(Math.random() * 999999999),
          id     = 'UNIQUE_ID_' + id_num
        ;

        $(this).attr('id', id);
      }      

      ma_wisdom(jQuery, id)();
    });
  }
}