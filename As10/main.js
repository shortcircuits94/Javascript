/* 
	As 10 
	Start with your Lab 18 solution or this file
	WEB230 Events
	{Xiaoyun Shen}
*/

window.addEventListener('load', function(){
	
	// Add event listeners
	document.getElementById('add-item').addEventListener('click', addItem, false);
	document.querySelector('.todo-list').addEventListener('click', toggleCompleted, false);
	document.querySelector('.todo-list').addEventListener('click', removeItem, false);
//4

    var heading=document.querySelector('h1');
	heading.addEventListener('click',function(){
		text=prompt('Change your heading.');
		if(text){
			heading.innerHTML=text;
		}
	
	
	},false);
	
	function toggleCompleted(event) {
		console.log('=' + event.target.className);
		if(event.target.className.indexOf('todo-item') < 0) {
			return;
		}
		console.log(event.target.className.indexOf('completed'));
		if(event.target.className.indexOf('completed') > -1) {
			console.log(' ' + event.target.className);
			event.target.className = event.target.className.replace(' completed', '');
		} else {
			console.log('-' + event.target.className);
			event.target.className += ' completed';			
		}
	}
	
	
	function addItem() {
		var list = document.querySelector('ul.todo-list');
		var newItem = document.getElementById('new-item-text').value;
		var newListItem = document.createElement('li');		
//3
		if(newItem){
			newListItem.className = 'todo-item';
			newListItem.innerHTML = newItem + '<span class="remove"></span>';
			list.insertBefore(newListItem, document.querySelector('.todo-new'));
//1	
		}
		document.getElementById('new-item-text').value='';
		
	}
	
//2
		var inputArea=document.getElementById('new-item-text');
		inputArea.addEventListener('keydown',function(event){
				if(event.keyCode===13){
					addItem();
					event.preventDefault();            
				}
			},false);    
	
	function removeItem(event) {
		if(event.target.className.indexOf('remove') < 0) {
			return;
		}
		var el = event.target.parentNode;
		el.parentNode.removeChild(el);
	}
	
});
