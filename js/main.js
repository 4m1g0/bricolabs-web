$(function(){
    intro = $("#intro-bg");
    logo = $("#logo");
    logoMini = $(".logo-mini");
    mainMenu = $("#main-menu");
    menubg = $(".menu-bg");
    protobg = $(".proto-bg");
    video = false;
    $(window).scroll(scroll);
    $(window).resize(resize);
    $(".show-menu").click(displayMenu);
    $(".img-container").click(showImage);
    $(".img-container").hover(function(){
        $(this).children("img").animate({"opacity": 0.2});
    }, function(){
        $(this).children("img").animate({"opacity": 1});
    });
    $(".image-fullscreen").click(closeImage);
    resize();
});

function scroll() {
    var scrollTop = $(window).scrollTop();
    console.log("scroll: " + scrollTop);
    var scrollMod = scrollTop/7;
    intro.css({"transform": "translateY(" + -scrollMod + "px)"});
    logo.css({"transform": "translateY(" + -scrollMod + "px)",
              "opacity": 1-scrollMod/32});
    
    if (windowWidth > 900){
       if (scrollTop > introHeight) {
            logoMini.fadeIn();
            menubg.fadeIn();
            mainMenu.addClass("menu-dark");
        } else {
            logoMini.fadeOut();
            menubg.fadeOut();
            mainMenu.removeClass("menu-dark");
        }
        
        
        if (video != false){
            video.css({"transform": "translateY(" + (-scrollMod) + "px)"});
        } 
    }
    
    if (scrollTop + windowHeight > protoTop) {
       protobg.css({"transform": "translateY(" + (((scrollTop+windowHeight-protoTop)-windowHeight-protoHeight)/7) + "px)"});
    }
}

function resize() {
    console.log("resize");
    if (!video && $(window).width() > 900){
        video = $('<video id="video-bricolabs" autoplay loop preload="auto"><source src="images/bricolabs_video.mp4" type="video/mp4"><source src="images/bricolabs_video.mp4" type="video/ogg"></video>').appendTo($(".video"));
    }
    
    if (video != false) {
        videoHeight = video.height();
    }
    introHeight = intro.height();
    windowHeight = $(window).height();
    windowWidth = $(window).width();
    protoTop = $(".proto").position().top;
    protoHeight = $(".proto").height();
}

function displayMenu() {
    if ($(".show-menu").hasClass("close-menu")) {
        $(".menu-mobile").slideUp();
        $(".show-menu").removeClass("close-menu");
    } else {
        $(".menu-mobile").slideDown();
        $(".show-menu").addClass("close-menu");
    }
}

function showImage() {
    var url = $(this).children("img").attr("src");
    url = String(url).replace("small", "large");
    var image = $('<img src="' + url + '"/>');
    var fullscreen = $(".image-fullscreen");
    var shadow = $(".shadow");
    fullscreen.append(image);
    shadow.show();
    shadow.animate({"opacity": 0.9}, function () {
        fullscreen.show();
    });
}

function closeImage() {
    console.log("closeImage");
    var fullscreen = $(".image-fullscreen");
    fullscreen.children("img").remove();
    fullscreen.hide();
    $(".shadow").animate({"opacity": 0}, function () {
        $(this).hide();
    });
}
