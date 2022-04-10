/*
	WEB 230
	Starting file for Assignment 11 (Lab 19 Solution)
	Rebecca Scott
*/

$(document).ready(function(){
	$('#X').addClass('current-player');

	function switchPlayer() {
		var player = $('.current-player').attr('id');
		$('#players div').removeClass('current-player');
		if(player === 'X') {
			$('#O').addClass('current-player');
		} else {
			$('#X').addClass('current-player');
		}
	}

	$('table').on('click', squareClicked);
	
	function squareClicked(e) {
		var $sqr = $(e.target);
		var player = $('.current-player').attr('id');
		if(!$sqr.attr('class')) {
			$sqr.addClass(player + '-marker');
			switchPlayer();
		}
		var winInfo = checkWin();
		if (winInfo.win) {
			
			$("td").each(function(index) {
				if (winInfo.play.indexOf(index)>=0) {
					$(this).css("background-color", "#ADFF2F");
				}
			});
			console.log("You won!");
			 alert('Player ' + winInfo.winner + ' won!');
			// [0,1,2], [3,4,5], [6,7,8],
			//[0,3,6], [1,4,7], [2,5,8],
			//[0,4,8], [2,4,6]
		}
	}
	
	$('#newGame').on('click',newGame);
	
	function newGame() {
		$('td').removeAttr('class').removeAttr('style');
		$('#O').removeClass('current-player');
		$('#X').addClass('current-player');

	}
	
	// Get an array of markers on each square
	function getBoard() {
		var board = [];
		// Step 1: Your code here
		$('td').each(function() {
			board.push(this.className.charAt(0));
			console.log(board);
		});
		return board;
	}
	
	// This function is provided. You don't need to change it.
	// Check for winner
	function checkWin() {
		var board = getBoard();
		// array of possible win sets
		var winArray = [
			[0,1,2], [3,4,5], [6,7,8],
			[0,3,6], [1,4,7], [2,5,8],
			[0,4,8], [2,4,6] ];
			var winInfo = {win: false};
		// loop through the possible win sets
		for(var i=0; i<winArray.length; i++) {
			// get the marks at the three win locations
			a = board[winArray[i][0]];
			b = board[winArray[i][1]];
			c = board[winArray[i][2]];
			// see if the same marker is at each location
			if(a && a === b && b === c) {
				winInfo.win = true;
				winInfo.play = winArray[i];
				winInfo.winner = a;
				return winInfo;
			}
		}
		return winInfo;
	}
	
});
