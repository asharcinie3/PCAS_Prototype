var vid1 = document.getElementById("vid5");
var vid2 = document.getElementById("vid6");
var vid3 = document.getElementById("vid7");

document.getElementById("b5").onclick = () =>  {
    document.getElementById('e5').style.display = "block";
    document.getElementById('e6').style.display = "none";
    document.getElementById('e7').style.display = "none";
}

document.getElementById("b6").onclick = () =>  {
    document.getElementById('e6').style.display = "block";
    document.getElementById('e5').style.display = "none";
    document.getElementById('e7').style.display = "none";
}

document.getElementById("b7").onclick = () =>  {
    document.getElementById('e7').style.display = "block";
    document.getElementById('e5').style.display = "none";
    document.getElementById('e6').style.display = "none";
}

document.getElementById("play5").onclick = () =>  {
    vid5.play();
}

document.getElementById("play6").onclick = () =>  {
    vid6.play();
}

document.getElementById("play7").onclick = () =>  {
    vid7.play();
}

document.getElementById("pause5").onclick = () =>  {
    vid5.pause();
}

document.getElementById("pause6").onclick = () =>  {
    vid6.pause();
}

document.getElementById("pause7").onclick = () =>  {
    vid7.pause();
}