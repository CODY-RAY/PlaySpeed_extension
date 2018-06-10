function speed(button) {
    chrome.tabs.query({currentWindow:true,active:true},function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, button.target.getAttribute("val"))
    })
}

document.addEventListener('DOMContentLoaded', function () {
     document.getElementById('button0').addEventListener('click', speed);
     document.getElementById('button1').addEventListener('click', speed);
     document.getElementById('button2').addEventListener('click', speed);
     document.getElementById('button3').addEventListener('click', speed);
     document.getElementById('button4').addEventListener('click', speed);
})