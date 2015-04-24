$(function(){
    intro = $("#intro-bg");
    logo = $("#logo");
    logoMini = $(".logo-mini");
    mainMenu = $("#main-menu");
    video = false;
    $(window).scroll(scroll);
    $(window).resize(resize);
    resize();
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
    if (video != false){
        video.css({"transform": "translateY(" + -scrollMod + "px)"});
    }

    
}

function resize() {
    console.log("resize");
    if (!video && $(window).width() > 900){
        video = $('<video id="video-bricolabs" autoplay loop preload="auto"><source src="images/bricolabs_video.mp4" type="video/mp4"><source src="images/bricolabs_video.mp4" type="video/ogg"></video>').appendTo($(".video"));
        //video = $("#video");
    }
    
    if (video != false) {
        videoHeight = video.height();
    }
    introHeight = intro.height();
    windowHeight = $(window).height();
}
