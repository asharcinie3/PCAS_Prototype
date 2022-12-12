var vid1 = document.getElementById("vid1");
var vid2 = document.getElementById("vid2");
var vid3 = document.getElementById("vid3");
var vid4 = document.getElementById("vid4");

document.getElementById("b1").onclick = () =>  {
    document.getElementById('e1').style.display = "block";
    document.getElementById('e2').style.display = "none";
    document.getElementById('e3').style.display = "none";
    document.getElementById('e4').style.display = "none";
}

document.getElementById("b2").onclick = () =>  {
    document.getElementById('e2').style.display = "block";
    document.getElementById('e1').style.display = "none";
    document.getElementById('e3').style.display = "none";
    document.getElementById('e4').style.display = "none";
}

document.getElementById("b3").onclick = () =>  {
    document.getElementById('e3').style.display = "block";
    document.getElementById('e1').style.display = "none";
    document.getElementById('e2').style.display = "none";
    document.getElementById('e4').style.display = "none";
}

document.getElementById("b4").onclick = () =>  {
    document.getElementById('e4').style.display = "block";
    document.getElementById('e1').style.display = "none";
    document.getElementById('e2').style.display = "none";
    document.getElementById('e3').style.display = "none";
}

document.getElementById("r1").onclick = () =>  {
    vid1.currentTime = 0;
    vid1.play();
}

document.getElementById("r2").onclick = () =>  {
    vid2.currentTime = 0;
    vid2.play();
}

document.getElementById("r3").onclick = () =>  {
    vid3.currentTime = 0;
    vid3.play();
}

document.getElementById("r4").onclick = () =>  {
    vid4.currentTime = 0;
    vid4.play();
}

document.getElementById("play1").onclick = () =>  {
    vid1.play();
}

document.getElementById("pause1").onclick = () =>  {
    vid1.pause();
}

document.getElementById("play2").onclick = () =>  {
    vid2.play();
}

document.getElementById("pause2").onclick = () =>  {
    vid2.pause();
}

document.getElementById("play3").onclick = () =>  {
    vid3.play();
}

document.getElementById("pause3").onclick = () =>  {
    vid3.pause();
}

document.getElementById("play4").onclick = () =>  {
    vid4.play();
}

document.getElementById("pause4").onclick = () =>  {
    vid4.pause();
}

vid1.addEventListener('timeupdate', function(){
    if(vid1.currentTime > 1) {
        document.getElementById("o1").enabled = true;
        document.getElementById("o1").style.background='#000000';
    }
});

/*if (vid1.currentTime() > 1) {
    document.getElementById("o1").style.background='#FF0000';
    document.getElementById("o1").enabled = true;
}*/
