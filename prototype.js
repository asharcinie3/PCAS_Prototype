/* cover functionality for case one page */
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

/* cover functionality for case two page */
document.getElementById("a").onclick = () =>  {
    document.getElementById('a1').style.display = "block";
}

document.getElementById("b6").onclick = () =>  {
    document.getElementById('e6').style.display = "block";
}

document.getElementById("b7").onclick = () =>  {
    document.getElementById('e7').style.display = "block";
}

