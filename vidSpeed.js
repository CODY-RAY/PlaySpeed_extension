var vid = document.getElementById("video")

//youtube
if (vid == null){
    vid = document.getElementsByClassName("video-stream html5-main-video")[0]
}
chrome.runtime.onMessage.addListener(function (speed) {
    vid.playbackRate = speed
   
})