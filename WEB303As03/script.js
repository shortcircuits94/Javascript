$(document).ready(function() {
    $.get("team.json", function(teammembers) {
		teammembers.forEach(function(teammember, name, title, bio) {
				$("#team").html("<h3>Name: " + this.name + "</h3><br /><h4>Title: " + this.title + "</h4><br /><p>Bio: " + this.bio + "</p>");
		});
	});
});

/*

	$.each(this, function(name, title, bio) {
				$("#team").html("<h3>Name: " + this.name + "</h3><br /><h4>Title: " + this.title + "</h4><br /><p>Bio: " + this.bio + "</p>");console.log(teammembers[i].name + ' ' + teammembers[i].title); for (var i = 0; i < teammembers.length; i++)






/*
Use the $.getJSON() method to get the team.json file.

Use the $.each() method or the newer JavaScript .forEach()
 method to loop through the elements of the array in
the objec
For each object in the array insert the name,title, and bio
into thediv#team. Put the name in anh3 thetitle in an h4, and the bio in a p
*/