var vid1 = document.getElementById("vid5");
var vid2 = document.getElementById("vid6");
var vid3 = document.getElementById("vid7");

document.getElementById("b5").onclick = () =>  {
    document.getElementById('e5').style.display = "block";
    vid5.play();
    document.getElementById('e6').style.display = "none";
    document.getElementById('e7').style.display = "none";
}

document.getElementById("b6").onclick = () =>  {
    document.getElementById('e6').style.display = "block";
    vid6.play();
    document.getElementById('e5').style.display = "none";
    document.getElementById('e7').style.display = "none";
}

document.getElementById("b7").onclick = () =>  {
    document.getElementById('e7').style.display = "block";
    vid7.play();
    document.getElementById('e5').style.display = "none";
    document.getElementById('e6').style.display = "none";
}

document.getElementById("r5").onclick = () =>  {
    vid5.play();
}

document.getElementById("r6").onclick = () =>  {
    vid6.play();
}

document.getElementById("r7").onclick = () =>  {
    vid7.play();
}