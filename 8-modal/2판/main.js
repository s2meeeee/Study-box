// $(function(){
//     $("button").click(function(){
//         $("#modal_wrap").fadIn();
//         $("#modal").fadIn();
//         $("body").css("overflow","hidden")
//     });

//     $("#modal > span").click(function(){
//         $("#modal_wrap").fadOut();
//         $("#modal").fadOut();
//         $("body").css("overflow","auto");
//     });



//     // $("button").click(function(){
//     //     $("#modal_warp").fadeIn.css("display","block");
// 	// 	$("body").css("overflow","hidden");

//     // });

//     // $("#modal_wrap").click(function(){
//     //     $(this).css("display","none");
// 	// 	$("body").css("overflow","auto");
//     // });
// });

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