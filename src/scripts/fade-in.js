
function fadeIn () {
    const toFade = document.querySelector('div.fade-in-section');
    var opacity = 0,
    fps = 1000/60;  // 16.67 ms
    function decrease () {
        opacity += 0.05;
        if (opacity >= 1){
            // complete
            toFade.style.opacity = 1;
            return true;
        }
        toFade.style.opacity = opacity;
        setTimeout(decrease,fps);
    }
    decrease();
}