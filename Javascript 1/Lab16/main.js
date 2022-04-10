/*
	WEB230
	Lab 16
	Rebecca Scott
*/

(function(){

	var commentButton = document.getElementById('submit_comment');
	var textarea = document.getElementById('new_comment_text');
	
	commentButton.addEventListener('click', commentSubmit, false);
	commentButton.addEventListener('click', commentCounter, false);
	
	textarea.addEventListener('input', charCounter, false);
	
	textarea.addEventListener('focus', function() {
		document.body.className = 'dark';
	}, false); 
	
	textarea.addEventListener('blur', function(){
		document.body.className = ''; 
	}, false);
	
	textarea.addEventListener('keydown',function(e) {
		if(e.keyCode == 13) {
			e.preventDefault();
			commentSubmit(); 
			commentCounter();
		}
	}, false);
	


	
	var commentDiv = document.getElementById('comments'); 
	commentDiv.addEventListener('click', function(event){
		var clickPara=event.target;
		document.body.className = 'dark';
		textarea.value=textarea.value + ' " '+ clickPara.textContent+ ' " ';
	}, false);
	
	function commentSubmit () {
		var comment = textarea.value; 
		var commentDiv = document.getElementById('comments');
		if(comment) {
			var placeholder = document.querySelector('p.placeholder');
			if (placeholder) {
				placeholder.parentNode.removeChild(placeholder); 
		}
		var newPara = document.createElement('p');
		commentDiv.appendChild(newPara); 
		newPara.textContent = comment; 
		var span = document.createElement('span'); 
		newPara.appendChild(span); 
		span.className = 'delete';
			span.textContent = '';
			span.addEventListener('click', function(event) {
			var para = event.target.parentNode; 
			para.parentNode.removeChild(para);
			event.stopPropagation();
			commentCounter();
		}, false);
		textarea.value = ''; 
		charCounter(); 
	}	
}

	function commentCounter() {
		var commentCount = document.getElementById('comment_count');
		var count = document.getElementsByClassName('delete').length;
		commentCount.textContent = count; 
	}
	
	function charCounter() {
		var characterCount = document.getElementById('character_count');
		characterCount.textContent = textarea.value.length;
	}
}());