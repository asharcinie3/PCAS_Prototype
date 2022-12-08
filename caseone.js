document.getElementById("b1").onclick = () =>  {
    document.getElementById('e1').style.display = "block";
    document.getElementById('e2').style.display = "none";
    document.getElementById('e3').style.display = "none";
    document.getElementById('e4').style.display = "none";
}

document.getElementById("b2").onclick = () =>  {
    document.getElementById('e2').style.display = "block";
    vid2.play();
    document.getElementById('e1').style.display = "none";
    document.getElementById('e3').style.display = "none";
    document.getElementById('e4').style.display = "none";
}

document.getElementById("b3").onclick = () =>  {
    document.getElementById('e3').style.display = "block";
    vid3.play();
    document.getElementById('e1').style.display = "none";
    document.getElementById('e2').style.display = "none";
    document.getElementById('e4').style.display = "none";
}

document.getElementById("b4").onclick = () =>  {
    document.getElementById('e4').style.display = "block";
    vid4.play();
    document.getElementById('e1').style.display = "none";
    document.getElementById('e2').style.display = "none";
    document.getElementById('e3').style.display = "none";
}

var vid1 = document.getElementById("vid1");
var vid2 = document.getElementById("vid2");
var vid3 = document.getElementById("vid3");
var vid4 = document.getElementById("vid4");

document.getElementById("r1").onclick = () =>  {
    vid1.play();
}

document.getElementById("r2").onclick = () =>  {
    vid2.play();
}

document.getElementById("r3").onclick = () =>  {
    vid3.play();
}

document.getElementById("r4").onclick = () =>  {
    vid4.play();
}
