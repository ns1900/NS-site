// JavaScript Document

var main = function(){  
    $('#about').click(function(){
        $('#introduction').slideToggle(400);
		$('#drop-btn').toggle(400);
	});
	
	$('#drop-btn').click(function(){
		$('#introduction').hide(400);
		$('#drop-btn').hide(400);
	});
	
	$('.en-btn').mouseenter(function(){
		$('#en').show();
		$('#zh').hide();	
	});  
	
	$('.zh-btn').mouseenter(function(){
		$('#zh').show();
		$('#en').hide();	
	});
};
    
$(document).ready(main);
