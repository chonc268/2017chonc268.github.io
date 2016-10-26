$(document).ready(function() {

	//apend new element 100 times
	for (i = 0; i < 10; i++) { 
  $("body").append( "<div class='element' style='background-color: hsl(" + i * 3.6 + ", 100%, 50%);'></div>" );

console.log("element " + i + " added");
}
	//mouse interaction
	$('.element').mouseover (function() {
		$(this).css('background-color','#9FD2CB');
	});
	$('.element').mouseout (function() {
		$(this).css('background-color','#F6D6D3');
	});
});