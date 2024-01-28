
function fade(toFade) {
    var op = 0;  // initial opacity
    toFade.forEach((element) => {
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += 0.01;
        }, 10);
    });
}

fade(document.querySelectorAll('.to-fade'));

var flagWorkExp = true
var flagCert = true

window.addEventListener("scroll", function() {
if(this.scrollY > 1000) {
    if(flagWorkExp) {
        fade(document.querySelectorAll('.work-experience'));
        flagWorkExp = false;
    }
}
else if(this.scrollY > 2200) {
    if(flagCert) {
        fade(document.querySelectorAll('.certs'));
        flagCert = false;
    }
}
})