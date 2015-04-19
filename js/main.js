$(function(){
    menuVisible = false;
    $(window).scroll(scroll);
});

function scroll (){
    var header = $(".header_background");
    var headerHeight = 70;
    if ($(window).scrollTop() > $(".intro").outerHeight() - headerHeight) {
        if (!menuVisible) {
            header.fadeIn();
            menuVisible = true;
       }
    } else {
        if (menuVisible) {
            header.fadeOut();
            menuVisible = false;
       }
       $("#logo").css("margin-top", 150 + $(window).scrollTop()/1.5);
       $(".intro").css("background-position", "center "+($(window).scrollTop()/1.2) + "px");
    }
}
