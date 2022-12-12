var vid1 = document.getElementById("vid8");
var vid2 = document.getElementById("vid9");
var vid3 = document.getElementById("vid10");

var scenariobtn8 = document.getElementById("b8");
var scenariobtn9 = document.getElementById("b9");
var scenariobtn10 = document.getElementById("b10");

var playbtn8 = document.getElementById("play8");
var playbtn9 = document.getElementById("play9");
var playbtn10 = document.getElementById("play10");

var pausebtn8 = document.getElementById("pause8");
var pausebtn9 = document.getElementById("pause9");
var pausebtn10 = document.getElementById("pause10");

scenariobtn8.onclick = () =>  {
    document.getElementById('e8').style.display = "block";
    document.getElementById('e9').style.display = "none";
    document.getElementById('e10').style.display = "none";

    vid8.currentTime = 0;
    vid8.pause();
    vid9.currentTime = 0;
    vid9.pause();
    vid10.currentTime = 0;
    vid10.pause();
}

scenariobtn9.onclick = () =>  {
    document.getElementById('e9').style.display = "block";
    document.getElementById('e8').style.display = "none";
    document.getElementById('e10').style.display = "none";

    vid8.currentTime = 0;
    vid8.pause();
    vid9.currentTime = 0;
    vid9.pause();
    vid10.currentTime = 0;
    vid10.pause();
}

scenariobtn10.onclick = () =>  {
    document.getElementById('e10').style.display = "block";
    document.getElementById('e8').style.display = "none";
    document.getElementById('e9').style.display = "none";

    vid8.currentTime = 0;
    vid8.pause();
    vid9.currentTime = 0;
    vid9.pause();
    vid10.currentTime = 0;
    vid10.pause();
}

playbtn8.onclick = () =>  {
    vid8.play();
}

playbtn9.onclick = () =>  {
    vid9.play();
}

playbtn10.onclick = () =>  {
    vid10.play();
}

pausebtn8.onclick = () =>  {
    vid8.pause();
}

pausebtn9.onclick = () =>  {
    vid9.pause();
}

pausebtn10.onclick = () =>  {
    vid10.pause();
}

/* override case 8 */
vid8.addEventListener('timeupdate', function(){
    if(vid8.currentTime >= 3.2 && vid8.currentTime <= 4.0) {
        document.getElementById("o8").disabled = false;
        document.getElementById("o8").style.background='#FF0000';
    }
    else {
        document.getElementById("o8").disabled = true;
        document.getElementById("o8").style.background='#D3D3D3';
    }
});
