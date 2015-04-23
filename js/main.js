$(function(){
    intro = $("#intro-bg");
    introHeight = intro.height();
    logo = $("#logo");
    logoMini = $(".logo-mini");
    mainMenu = $("#main-menu");
    video = $("#video-bricolabs");
    $(window).scroll(scroll);
    $(window).resize(resize);
});

function scroll() {
    var scrollTop = $(window).scrollTop();
    console.log("scroll: " + scrollTop);
    var scrollMod = scrollTop/7;
    intro.css({"transform": "translateY(" + -scrollMod + "px)"});
    logo.css({"transform": "translateY(" + -scrollMod + "px)",
              "opacity": 1-scrollMod/32});
              
    if (scrollTop > introHeight) {
        logoMini.fadeIn();
        mainMenu.addClass("menu-dark");
    } else {
        logoMini.hide();
        mainMenu.removeClass("menu-dark");
    }
    video.css({"margin-top": -200-scrollMod + "px"});
    
}

function resize() {
    console.log("resize");
    introHeight = intro.height();
}
