var vid1 = document.getElementById("vid1");
var vid2 = document.getElementById("vid2");
var vid3 = document.getElementById("vid3");
var vid4 = document.getElementById("vid4");

document.getElementById("b1").onclick = () =>  {
    vid1.currentTime = 0;
    document.getElementById('e1').style.display = "block";
    document.getElementById('e2').style.display = "none";
    document.getElementById('e3').style.display = "none";
    document.getElementById('e4').style.display = "none";
}

document.getElementById("b2").onclick = () =>  {
    vid2.currentTime = 0;
    document.getElementById('e2').style.display = "block";
    document.getElementById('e1').style.display = "none";
    document.getElementById('e3').style.display = "none";
    document.getElementById('e4').style.display = "none";
}

document.getElementById("b3").onclick = () =>  {
    vid3.currentTime = 0;
    document.getElementById('e3').style.display = "block";
    document.getElementById('e1').style.display = "none";
    document.getElementById('e2').style.display = "none";
    document.getElementById('e4').style.display = "none";
}

document.getElementById("b4").onclick = () =>  {
    vid4.currentTime = 0;
    document.getElementById('e4').style.display = "block";
    document.getElementById('e1').style.display = "none";
    document.getElementById('e2').style.display = "none";
    document.getElementById('e3').style.display = "none";
}

document.getElementById("r1").onclick = () =>  {
    vid1.currentTime = 0;
    document.getElementById("play1").disabled = false; 
    document.getElementById("play1").style.background = '#fff';
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

document.getElementById("pause1").onclick = () =>  {
    vid1.pause();
}
document.getElementById("pause2").onclick = () =>  {
    vid2.pause();
}

document.getElementById("pause3").onclick = () =>  {
    vid3.pause();
}

document.getElementById("pause4").onclick = () =>  {
    vid4.pause();
}

document.getElementById("play1").onclick = () =>  {
    vid1.play();
}

document.getElementById("play2").onclick = () =>  {
    vid2.play();
}

document.getElementById("play3").onclick = () =>  {
    vid3.play();
}

document.getElementById("play4").onclick = () =>  {
    vid4.play();
}

vid1.addEventListener('timeupdate', function(){
    if(vid1.currentTime < 2 || vid1.currentTime > 3) {
        document.getElementById("o1").disabled = true;
        document.getElementById("o1").style.background='#D3D3D3';
    }
    else {
        document.getElementById("o1").disabled = false;
        document.getElementById("o1").style.background='#FF0000';
    }

    /*if(vid1.currentTime > 3) {
        document.getElementById("play1").disabled = true; 
        document.getElementById("play1").style.background = '#ccc';
    }

    if(vid1.currentTime < 3) {
        document.getElementById("play1").disabled = false; 
        document.getElementById("play1").style.background = '#fff';
    }*/
});

vid1.onended = () => {
    document.getElementById("play1").disabled = true; 
    document.getElementById("play1").style.background = '#ccc';
}

vid2.onended = () => {
    document.getElementById("play2").disabled = true; 
    document.getElementById("play2").style.background = '#ccc';
}

vid3.onended = () => {
    document.getElementById("play3").disabled = true; 
    document.getElementById("play3").style.background = '#ccc';
}

vid4.onended = () => {
    document.getElementById("play4").disabled = true; 
}

/*
vid2.addEventListener('timeupdate', function() {
    if(vid2.currentTime > 3) {
        document.getElementById("play2").disabled = true; 
        document.getElementById("play2").style.background = '#ccc';
    }

    if(vid2.currentTime < 3) {
        document.getElementById("play2").disabled = false; 
        document.getElementById("play2").style.background = '#fff';
    }
});*/


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

/*vid3.addEventListener('timeupdate', function() {
    if(vid3.currentTime > 3) {
        document.getElementById("play3").disabled = true; 
    }

    if(vid3.currentTime < 3) {
        document.getElementById("play3").disabled = false; 
    }
});

vid4.addEventListener('timeupdate', function() {
    if(vid4.currentTime > 3) {
        document.getElementById("play4").disabled = true;
        document.getElementById("play4").style.background='#ccc';       
    }

    if(vid4.currentTime < 3) {
        document.getElementById("play4").disabled = false; 
        document.getElementById("play4").style.background='#fff';    
    }
});*/

