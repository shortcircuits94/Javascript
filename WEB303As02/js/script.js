// WEB303 Assignment 2
// Rebecca Scott



$(document).ready(function(){
    $("#vconvert").click(function(){
        $("#solution").load("solutions.html #vconvert");
    });
	$("#vprospect").click(function(){
		$("#solution").load("solutions.html #vprospect");
	});
	$("#vretain").click(function(){
		$("#solution").load("solutions.html #vretain");
	});
});





/*Use jQuery to bring in content from the 
solutions.html
 file.
When the user clicks on one of the links, the correct content
will be inserted into the 
#solution
 div.
Hint:
- Use the jQuery 
.on()
 method to create the event handlers
- Use the jQuery 
.load()
 method to do the AJAX
 "vprospect" href="#">vProspect 2.0</a> | 
      <a id="vconvert" href="#">vConvert 2.0</a> | 
      <a id="vretain" */