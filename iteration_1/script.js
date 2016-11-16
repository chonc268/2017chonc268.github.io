$(document).ready(function() { //always do this first. A special event 
  //append new element 100 times
  for (i = 0; i < 1000; i++) { 
    $("body").append( "<div class='element' </div>" );
    console.log("element " + i + " added");
  }
  
  //mouse interaction
  $('.element').mouseover(function(){
    $(this).css('background-color','black');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','black');
  });
});