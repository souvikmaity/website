function play(){
	var audio=document.getElementById('fullname');
	if (audio.paused) {
		audio.play();
	}
	else{
		audio.currentTime=0;
	}
}

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false);
} else {
    document.attachEvent('oncontextmenu', function() {
        window.event.returnValue = false;
    });
}

(function () {
    $(window).scroll(function () {
     	var oVal;
        oVal = $(window).scrollTop() / 240;
        return $('.scroll-img').css('opacity', oVal);
    });
}.call(this));
