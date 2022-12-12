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
/* video 6 */
vid6.addEventListener('timeupdate', function(){
    if(vid6.currentTime >= 2.3 && vid6.currentTime <= 2.7) {
        document.getElementById("o6").disabled = false;
        document.getElementById("o6").style.background='#FF0000';
    }
    else {
        document.getElementById("o6").disabled = true;
        document.getElementById("o6").style.background='#D3D3D3';
    }
});

var modal = document.getElementById("myModal6");
var btn = document.getElementById("o6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  vid6.pause();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  vid6.play();
}


/* video 7 */
vid7.addEventListener('timeupdate', function(){
    if(vid7.currentTime >= 2.3 && vid7.currentTime <= 2.7) {
        document.getElementById("o7").disabled = false;
        document.getElementById("o7").style.background='#FF0000';
    }
    else {
        document.getElementById("o7").disabled = true;
        document.getElementById("o7").style.background='#D3D3D3';
    }
});

/*
var modal2 = document.getElementById("myModal7");
var btn2 = document.getElementById("o7");

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
  vid7.pause();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
  vid7.play();
}*/