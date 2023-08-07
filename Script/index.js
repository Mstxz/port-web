/*Shrink Navbar Function*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("headd").style.padding = "10px 10%";
    document.getElementById("headd").style.backgroundColor = "#222";
    document.getElementById("headd").style.boxShadow = "0 10px 15px #111";
  } else {
    document.getElementById("headd").style.padding = "30px 5%";
    document.getElementById("headd").style.backgroundColor = "transparent";
    document.getElementById("headd").style.boxShadow = "none";
  }
}

/*Content Hover*/
const hoverContainer = document.querySelector('.hover-container');
const hoverContent = document.querySelector('.hover-content');

hoverContainer.addEventListener('mouseenter', () => {
    hoverContent.style.display = 'block';
});

hoverContainer.addEventListener('mouseleave', () => {
    hoverContent.style.display = 'none';
});
