/*
	WEB 230
	Assignment 8
	Xiaoyun Shen
	
*/

// set the class name of the player who will start
document.getElementById('X').className = 'current-player';
document.getElementById('O').removeAttribute('class');

// this will run when the page loads
function init() {
	var game = [[1,3,5,8],[4,6,7,2]];
	// find the tbody element. It is there even though we did not put it in our HTML.
	var tbody = document.querySelector('tbody');
	// row is a single row element. We will step through the rows in the outer while loop.
	var row = tbody.firstChild;
	var td;
	while(row) {
		console.log(row.nodeName);
		// td is a single td element. We will step through each td in this row in the inner while loop.
		td = row.firstChild;
		while(td) {
			if(td.tagName === 'TD') {
				td.setAttribute('onclick', 'squareClicked(this);');
			}
			td = td.nextSibling;
		}
		row = row.nextSibling;
	}
	loadGame(game);
    
    var newGameButton=document.querySelector('.button');
    var setBannerButton=document.createElement('INPUT');
    
    setBannerButton.setAttribute('type','button');
    setBannerButton.setAttribute('value','Set Banner');
    setBannerButton.setAttribute('onclick','setBanner()');
    newGameButton.parentElement.insertBefore(setBannerButton,newGameButton);
        
}

function setBanner(){
    var banner=prompt('Banner Text?');
    var h1=document.querySelector('h1');
    var playerDiv=document.querySelector('#players');
	if (h1){
		document.body.removeChild(h1);
	}
	h1=document.createElement('h1');
    h1.textContent=banner;
	document.body.insertBefore(h1,playerDiv);
}

// reset the board when the "New Game" button is clicked
function newGame() {
    var removeNode;
	var tdNodes = document.querySelectorAll('td');
	for(var i=0; i<tdNodes.length; i++) {
		removeNode=tdNodes[i].firstChild;
        if(removeNode){
        tdNodes[i].removeChild(removeNode);
		tdNodes[i].setAttribute('onclick','squareClicked(this)');
        }	 
	}
}

function squareClicked(sqr) {
	if (sqr.firstChild){
		sqr.removeAttribute('onclick');
	}
	if ((document.getElementById('X').className=='current-player') && (!sqr.firstChild)){
			var div=document.createElement('div');
			sqr.appendChild(div);
			div.setAttribute('class','X-marker');
			document.getElementById('O').setAttribute('class','current-player');
			document.getElementById('X').removeAttribute('class');
	    }	 
	if ((document.getElementById('O').className=='current-player')&&(!sqr.firstChild)){
			var div=document.createElement('div');
			sqr.appendChild(div);
			div.setAttribute('class','O-marker');
			document.getElementById('X').className = 'current-player';
			document.getElementById('O').removeAttribute('class');
		}	
	
}

function loadGame(state) {
	var tbody = document.querySelector('tbody');
	var row = tbody.firstChild;
	var td,newEl;
	while(row) {
		console.log(row.nodeName);
		// td is a single td element. We will step through each td in this row in the inner while loop.
		td = row.firstChild;
		while(td) {
			if(td.tagName === 'TD') {
				console.log('Found a TD');
				idNum = td.id;
				idNum = idNum.replace(/\D/g, ''); // Remove all non digit characters, so we have a number.
				idNum = parseInt(idNum); // Convert it to a number.
				// Check to see if it is in the X array, state[0]
				if(state[0].indexOf(idNum) > -1){
					//td.innerHTML = '<div class="X-marker"></div>';
                    
                    newEl=document.createElement('DIV');
                    newEl.className='X-marker';
                    td.appendChild(newEl);
					td.removeAttribute('onclick');
                                
				}
				// Check to see if it is in the O array, state[1]
				if(state[1].indexOf(idNum) > -1){
					//td.innerHTML = '<div class="O-marker"></div>';
                    
                    newEl=document.createElement('DIV');
                    newEl.className='O-marker';
                    td.appendChild(newEl);
					td.removeAttribute('onclick');
				}
				
			}
			td = td.nextSibling;
		}
		row = row.nextSibling;
	}
	
	
}
