/*
	WEB 230
	Solution for Lab 14, starting file for Lab 15
	{Your name}
*/

// set the class name of the player who will start
document.getElementById('X').className = 'current-player';
document.getElementById('O').removeAttribute('class');

// this will run when the page loads
function init() {
	// create a NodeList of all the td elements
	var tdNodes = document.getElementsByTagName('td');

	// loop through the NodeList and add a div and set the onclick attribute
	for(var i=0; i<tdNodes.length; i++) {
		tdNodes[i].innerHTML = '<div></div>';
		tdNodes[i].setAttribute('onclick','squareClicked(this)');
	}
}

// reset the board when the "New Game" button is clicked
function newGame() {
	// create a NodeList of all the td elements, again.
	// We could make tdNodes a global variable so we don't have to recreate it.
	// Here I use a different method.
	var tdNodes = document.querySelectorAll('td');
	for(var i=0; i<tdNodes.length; i++) {
		// clear the content of each node
		tdNodes[i].innerHTML = '';
	}
}

function squareClicked(sqr) {
	// show an alert. As a bonus we show which square was clicked.
	alert('You clicked square ' + sqr.id);
}
