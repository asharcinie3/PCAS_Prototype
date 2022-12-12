var vid1 = document.getElementById("vid5");
var vid2 = document.getElementById("vid6");
var vid3 = document.getElementById("vid7");

var scenariobtn5 = document.getElementById("b5");
var scenariobtn6 = document.getElementById("b6");
var scenariobtn7 = document.getElementById("b7");

var playbtn5 = document.getElementById("play5");
var playbtn6 = document.getElementById("play6");
var playbtn7 = document.getElementById("play7");

var pausebtn5 = document.getElementById("pause5");
var pausebtn6 = document.getElementById("pause6");
var pausebtn7 = document.getElementById("pause7");

scenariobtn5.onclick = () =>  {
    document.getElementById('e5').style.display = "block";
    document.getElementById('e6').style.display = "none";
    document.getElementById('e7').style.display = "none";

    vid5.currentTime = 0;
    vid5.pause();
    vid6.currentTime = 0;
    vid6.pause();
    vid7.currentTime = 0;
    vid7.pause();
}

scenariobtn6.onclick = () =>  {
    document.getElementById('e6').style.display = "block";
    document.getElementById('e5').style.display = "none";
    document.getElementById('e7').style.display = "none";

    vid5.currentTime = 0;
    vid5.pause();
    vid6.currentTime = 0;
    vid6.pause();
    vid7.currentTime = 0;
    vid7.pause();
}

scenariobtn7.onclick = () =>  {
    document.getElementById('e7').style.display = "block";
    document.getElementById('e5').style.display = "none";
    document.getElementById('e6').style.display = "none";

    vid5.currentTime = 0;
    vid5.pause();
    vid6.currentTime = 0;
    vid6.pause();
    vid7.currentTime = 0;
    vid7.pause();
}

playbtn5.onclick = () =>  {
    vid5.play();
}

playbtn6.onclick = () =>  {
    vid6.play();
}

playbtn7.onclick = () =>  {
    vid7.play();
}

pausebtn5.onclick = () =>  {
    vid5.pause();
}

pausebtn6.onclick = () =>  {
    vid6.pause();
}

pausebtn7.onclick = () =>  {
    vid7.pause();
}

/* add functionality for override */

vid6.addEventListener('timeupdate', function(){
    if(vid6.currentTime >= 3.0 && vid6.currentTime <= 3.2) {
        document.getElementById("o6").disabled = false;
        document.getElementById("o6").style.background='#FF0000';
    }
    else {
        document.getElementById("o6").disabled = true;
        document.getElementById("o6").style.background='#D3D3D3';
    }
});
