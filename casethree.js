var vid1 = document.getElementById("vid8");
var vid2 = document.getElementById("vid9");
var vid3 = document.getElementById("vid10");

document.getElementById("b8").onclick = () =>  {
    document.getElementById('e8').style.display = "block";
    vid8.play();
    document.getElementById('e9').style.display = "none";
    document.getElementById('e10').style.display = "none";
}

document.getElementById("b9").onclick = () =>  {
    document.getElementById('e9').style.display = "block";
    vid9.play();
    document.getElementById('e8').style.display = "none";
    document.getElementById('e10').style.display = "none";
}

document.getElementById("b10").onclick = () =>  {
    document.getElementById('e10').style.display = "block";
    vid10.play();
    document.getElementById('e8').style.display = "none";
    document.getElementById('e9').style.display = "none";
}

document.getElementById("r8").onclick = () =>  {
    vid8.play();
    vid8.currentTime = 0;
}

document.getElementById("r9").onclick = () =>  {
    vid9.play();
    vid9.currentTime = 0;
}

document.getElementById("r10").onclick = () =>  {
    vid10.play();
    vid10.currentTime = 0;
}