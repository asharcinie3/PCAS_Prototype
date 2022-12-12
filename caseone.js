var vid1 = document.getElementById("vid1");
var vid2 = document.getElementById("vid2");
var vid3 = document.getElementById("vid3");
var vid4 = document.getElementById("vid4");

var scenariobtn1 = document.getElementById("b1");
var scenariobtn2 = document.getElementById("b2");
var scenariobtn3 = document.getElementById("b3");
var scenariobtn4 = document.getElementById("b4");

var playbtn1 = document.getElementById("play1");
var playbtn2 = document.getElementById("play2");
var playbtn3 = document.getElementById("play3");
var playbtn4 = document.getElementById("play4");

var pausebtn1 = document.getElementById("pause1");
var pausebtn2 = document.getElementById("pause2");
var pausebtn3 = document.getElementById("pause3");
var pausebtn4 = document.getElementById("pause4");

scenariobtn1.onclick = () =>  {
    vid1.currentTime = 0;
    document.getElementById('e1').style.display = "block";
    document.getElementById('e2').style.display = "none";
    document.getElementById('e3').style.display = "none";
    document.getElementById('e4').style.display = "none";
}

scenariobtn2.onclick = () =>  {
    vid2.currentTime = 0;
    document.getElementById('e2').style.display = "block";
    document.getElementById('e1').style.display = "none";
    document.getElementById('e3').style.display = "none";
    document.getElementById('e4').style.display = "none";
}

scenariobtn3.onclick = () =>  {
    vid3.currentTime = 0;
    document.getElementById('e3').style.display = "block";
    document.getElementById('e1').style.display = "none";
    document.getElementById('e2').style.display = "none";
    document.getElementById('e4').style.display = "none";
}

scenariobtn4.onclick = () =>  {
    vid4.currentTime = 0;
    document.getElementById('e4').style.display = "block";
    document.getElementById('e1').style.display = "none";
    document.getElementById('e2').style.display = "none";
    document.getElementById('e3').style.display = "none";
}

pausebtn1.onclick = () =>  {
    vid1.pause();
}
pausebtn2.onclick = () =>  {
    vid2.pause();
}

pausebtn3.onclick = () =>  {
    vid3.pause();
}

pausebtn4.onclick = () =>  {
    vid4.pause();
}

playbtn1.onclick = () =>  {
    vid1.play();
}

playbtn2.onclick = () =>  {
    vid2.play();
}

playbtn3.onclick = () =>  {
    vid3.play();
}

playbtn4.onclick = () =>  {
    vid4.play();
}

vid1.addEventListener('timeupdate', function(){
    if(vid1.currentTime >= 3.0 && vid1.currentTime < 3.3) {
        document.getElementById("o1").disabled = false;
        document.getElementById("o1").style.background='#FF0000';
    }
    else {
        document.getElementById("o1").disabled = true;
        document.getElementById("o1").style.background='#D3D3D3';
    }
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("o1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  vid1.pause();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  vid1.play();
}
