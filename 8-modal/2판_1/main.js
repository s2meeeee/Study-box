$(function(){
	$("button").click(function(){
		$("#modal_wrap").fadeIn();
		$("body").css("overflow","hidden");
	});

	$("#modal_wrap").click(function(){
		$(this).fadeOut();
		$("body").css("overflow","auto");
	});
});