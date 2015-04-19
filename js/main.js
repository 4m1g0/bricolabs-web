$(function(){
    menuVisible = false;
    $(window).scroll(scroll);
});

function scroll (){
    var mywindow = $(window);
    var headerHeight = 70;
    if (mywindow.scrollTop() > $(".intro").outerHeight() - headerHeight) {
        if (!menuVisible) {
            $(".header_background").fadeIn();
            menuVisible = true;
       }
    } else {
        if (menuVisible) {
            $(".header_background").fadeOut();
            menuVisible = false;
       }
        $("#logo").css("margin-top", 150 + mywindow.scrollTop()/1.5);
        $(".intro").css("background-position", "center "+(mywindow.scrollTop()/1.2) + "px");
    }

    var video = $("#video_bricolabs");
    if (mywindow.scrollTop() + mywindow.height() > video.position().top){
        console.log("hola")
        video.css("margin-top", -600 + ((mywindow.scrollTop() + mywindow.height() - video.position().top)/2) + "px");
    }
}
