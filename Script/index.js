/*Shrink Navbar Function*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("headd").style.backgroundColor = "#222";
    document.getElementById("headd").style.boxShadow = "0 10px 15px #111";
  } else {
    document.getElementById("headd").style.backgroundColor = "transparent";
    document.getElementById("headd").style.boxShadow = "none";
  }
}

/*hover and appear content */