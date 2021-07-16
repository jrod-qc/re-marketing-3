$(".re-marketing-play-btn i").click(() => {
    $(".re-marketing-video-modal").css("display", "flex");
    $("#re-marketing-video").trigger('play');
})

$(".re-marketing-video-modal").click(() => {
    $(".re-marketing-video-modal").css("display", "none");
    $("#re-marketing-video").trigger('pause');
})

$(".re-marketing-form-modal-display-btn").click(() => {
    $(".re-marketing-form-modal").css("display", "flex");
    $(".re-marketing-form-modal").css("bottom", "0");
})

$(".re-marketing-form-modal-exit-btn i").click(() => {
    $(".re-marketing-form-modal").css("bottom", "-100%");
})