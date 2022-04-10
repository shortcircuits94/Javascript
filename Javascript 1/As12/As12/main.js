/*
	Assignment 12
	jQuery
	WEB230
	Rebecca Scott 
*/

$(document).ready(function(){
	$('.todo-list').on('click', '.todo-item', function(e) {
		if($(e.target).hasClass('completed')) {
			$(e.target).animate({opacity: 1.0}).removeClass('completed');
		} else {
			$(e.target).animate({opacity: 0.5}).addClass('completed');
		}
	});
	$('.todo-list').on('click', '.remove', function(e) {
		$(this).parent().fadeOut(500, function(){
				$(this).remove();
		});
	});
	
	$('#add-item').on('click', function() {
		if($('#new-item-text').val()){
			var $li = $('<li>');
			var $span = $('<span>');
			$span.addClass('remove');
			$li.addClass('todo-item');
			$li.text($('#new-item-text').val());
			$li.hide().insertBefore($('.todo-new')).fadeIn(500);
			$span.appendTo($li);
			$('#new-item-text').val('');
		}
	});
	$('#new-item-text').on('keydown', function(event){
    if(event.keyCode === 13 && $('#new-item-text').val() !== ""){
        event.preventDefault();
        var $li = $('<li>');
        var $span = $('<span>');
        $span.addClass('remove');
		$li.addClass('todo-item');
		$li.text($('#new-item-text').val());
		$li.hide().insertBefore($('.todo-new')).fadeIn(500);
        $span.appendTo($li);
        $('#new-item-text').val("");
    }

});
});
