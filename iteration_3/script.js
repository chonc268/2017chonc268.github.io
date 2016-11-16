$(document).ready(function() { //always do this first. A special event 
  
//fade out and in
$(document).ready(function() {
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    $('.random').fadeOut(3100);
    $('.random').fadeIn(3100);
    });


  //call the function
  drawGridObjects();
  drawGridObject();
  mouseover();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
 

  setInterval(function(){ 
    rotateGridObjects();
    //console.log('function is running');
  }, 1000);
 

  //custom functions
  function rotateGridObjects(){
    var now = new Date();
    var second = now.getSeconds();
    //console.log(second);
    $('.random').css('transform','rotate(' + second*10 + 'deg)');
  }

  function drawRandomObject(){
    //store random value between 0 to 100 to rw and rh
    var rx = Math.floor(Math.random()*100);
    var ry = Math.floor(Math.random()*100);
    var color = "#000";
    if (ry < 30) {
      color = "red";
    }
    else if (rx < 40) {
      color = "yellow";
    }
    else {
      color = "blue"; 
    }
    console.log("rx: " + rx + " ry: " + ry);
    $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh; background-color:" + color + ";'></div>" );
  }

    function drawGridObject(){
    //append new element 20 times, and repeat that 100 times
    for (j = 0; j < 8; j++) {
      for (i = 0; i < 24; i++) { 
        $("body").append( "<div class='elements' style='left:" + i*7 + "vw; top:" + j*100 + "px;'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }

  function drawGridObjects(){
    //append new element 20 times, and repeat that 100 times
    for (j = 0; j < 7.00000000001; j++) {
      for (i = 0; i < 14; i++) { 
        $("body").append( "<div class='element' style='left:" + i*7 + "vw; top:" + j*100 + "px;'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }

 //mouse interaction
 function mouseover (){
  $('.element').mouseover(function(){
    $(this).css('background-color','white');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','black');
  });
};
});





