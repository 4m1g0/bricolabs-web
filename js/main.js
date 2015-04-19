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
    }
}
