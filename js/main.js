$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".banner__mac img").css({
        "transform" : "translate(0px, " + st/20 + "px"
    });
});
