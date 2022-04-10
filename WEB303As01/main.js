/*
	WEB 303
	Starting file for Assignment 1 
	Rebecca Scott
*/


$( document ).ready(function() {
	$("input").keyup(function() {
		total = $("#salary").val() * $("#percent").val() / 100;
		console.log(total);
		$("#spend").text('$' + total.toFixed(2));
		

	});
});

//3. Create an event handler to run whenever the salary and percent 
  // fields have changed ("change" event).
  
// / 4. In the event handler calculate the amount you can spend on 
  // gadgets and insert it into the span#spend element with a dollar sign.
  
//  salary * percent / 100