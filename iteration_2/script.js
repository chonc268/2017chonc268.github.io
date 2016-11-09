$(document).ready(function() { //always do this first. A special event 
  
//fade out and in
$(document).ready(function() {
    $('.random').fadeOut(3100);
    });

$(document).ready(function() {
    $('.random').fadeIn(3100);
  });

$(document).ready(function() {
    $('.random').fadeOut(3100);
    });

$(document).ready(function() {
    $('.random').fadeIn(3100);
  });

$(document).ready(function() {
    $('.random').fadeOut(3100);
    });

$(document).ready(function() {
    $('.random').fadeIn(3100);
  });

$(document).ready(function() {
    $('.random').fadeOut(3100);
    });

$(document).ready(function() {
    $('.random').fadeIn(3100);
  });

$(document).ready(function() {
    $('.random').fadeOut(3100);
    });

$(document).ready(function() {
    $('.random').fadeIn(3100);
  });

$(document).ready(function() {
    $('.random').fadeOut(3100);
    });

$(document).ready(function() {
    $('.random').fadeIn(3100);
  });

$(document).ready(function() {
    $('.random').fadeOut(3100);
    });

$(document).ready(function() {
    $('.random').fadeIn(3100);
  });


  //call the function
  drawGridObjects();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
 

  //custom functions
  function drawRandomObject(){
    //store random value between 0 to 100 to rw and rh
    var rx = Math.floor(Math.random()*100);
    var ry = Math.floor(Math.random()*100);
    var color = "#000";
    if (ry < 50) {
      color = "red";
    }
    else if (rx < 60) {
      color = "yellow";
    }
    else {
      color = "blue"; 
    }
    console.log("rx: " + rx + " ry: " + ry);
    $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh; background-color:" + color + ";'></div>" );
  }

  function drawGridObjects(){
    //append new element 20 times, and repeat that 100 times
    for (j = 0; j < 16; j++) {
      for (i = 0; i < 20; i++) { 
        $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }
});