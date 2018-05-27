$(function() {
	$('.wenbenkuang .in-text').focus(function(){
		if($(this).val()=='棒棒哒'){
			$(this).attr({value:''})	
		}
	}).blur(function(){
		if($(this).val()==''){
			$(this).attr({value:'棒棒哒'})
		}
		
	});

});