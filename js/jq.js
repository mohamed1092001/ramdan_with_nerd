listBtn.onclick = function () {
    this.classList.toggle("active")
    let status = this.getAttribute("status")
    if (status == 'off') {
        this.setAttribute("status", "on")
        mContainer.style.height = "200px"
    } else {
        this.setAttribute("status", "off")
        mContainer.style.height = "0px"
    }
}

// sound

// ################# jquery

$(".sound").click(function () {
    let sName = $(this).find(".sound-title").html();
    $("marquee").html(sName + " ...")
    $(".controlsContainer button").removeAttr("disabled")
    $(".sound").find("audio").trigger("pause");
    $(".sound").removeClass("playingSound");
    $(this).addClass("playingSound");
    $(this).find("audio")[0].currentTime = 0;
    $(this).find("audio").trigger("play");
    $("#playBtn").addClass("playOn").removeClass("pause").attr("playing", "on");
})


$("#playBtn").click(function () {
    let playing = $(this).attr("playing")
    if (playing == "off") {
        let playing = $(this).attr("playing", "on");
        $(".playingSound").find("audio").trigger("play");
        $(".playingSound").find("img").attr("src", "img/wave.gif")
        $("#playBtn").addClass("playOn").removeClass("pause");
    } else {
        let playing = $(this).attr("playing", "off");
        $(".playingSound").find("audio").trigger("pause");
        $(".playingSound").find("img").attr("src", "img/pause.PNG")
        $("#playBtn").addClass("pause").removeClass("playOn");
    }
})

$("#prevBtn").click(function () {
    $(".sound").find("audio").trigger("pause");
    $(".playingSound").prev().find("audio")[0].currentTime = 0;
    $(".playingSound").prev().find("audio").trigger("play");
    $(".playingSound").addClass("lastPlayed");
    $(".sound").removeClass("playingSound");
    $(".lastPlayed").prev().addClass("playingSound");
    $(".sound").removeClass("lastPlayed");
    $("#playBtn").addClass("playOn").removeClass("pause").attr("playing", "on");
})

$("#nextBtn").click(function () {
    $(".sound").find("audio").trigger("pause");
    $(".playingSound").next().find("audio")[0].currentTime = 0;;
    $(".playingSound").next().find("audio").trigger("play");
    $(".playingSound").addClass("lastPlayed");
    $(".sound").removeClass("playingSound");
    $(".lastPlayed").next().addClass("playingSound");
    $(".sound").removeClass("lastPlayed");
    $("#playBtn").addClass("playOn").removeClass("pause").attr("playing", "on");
})

$("#volumeBtn").click(function () {
    let volume = $(this).attr("volume");
    if (volume == "on") {
        $(this).attr("volume", "off");
        $(this).find("i").removeClass("fa-volume-high").addClass("fa-volume-xmark");
        $(".sound").find("audio").prop("muted", true)
    } else {
        $(this).attr("volume", "on");
        $(this).find("i").addClass("fa-volume-high").removeClass("fa-volume-xmark");
        $(".sound").find("audio").prop("muted", false)
    }
})