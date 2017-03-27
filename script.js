$( function() {
    $( "#DragBar" ).draggable({
      containment:"parent"   //sets containment for element. Docuemtnation here: http://api.jqueryui.com/draggable/
      
      
    });
  } );


function HideShow(){ //Toggles display function for drag bar
  var x = document.getElementById('DragBar');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
