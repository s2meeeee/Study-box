$(function(){
    $("button").click(function(){
        $("#modal_wrap").fadeIn();
        $("#modal").fadeIn();
        $("body").css("overflow","hidden");
    });
    $("#modal").find("span").click(function(){
        $("#modal_wrap").fadeOut();
        $("#modal").fadeOut();
        $("body").css("overflow","auto");
    });

});
