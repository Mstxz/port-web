let displayed = false;
let igbutton = document.getElementById("igbutton");

function openMenu(){
    var x = document.getElementById("menu");
    x.style.display = "block";

}

function closeMenu(){
    var x = document.getElementById("menu");
    x.style.display = "none";
}

function openInstagramMenu() {
  const igbutton = document.getElementById("igbutton");
  const rect = igbutton.getBoundingClientRect();
  displayed = !displayed;
  igmenu.classList.toggle("hidden", !displayed);
  igmenu.classList.toggle("block", displayed);
}

document.addEventListener("click", function(event) {
  const ig = document.getElementById("igmenu");
  const igbutton = document.getElementById("igbutton");

  // Check if click is outside both the menu and the button
  if (!ig.contains(event.target) && !igbutton.contains(event.target)) {
    ig.classList.add("hidden");
    displayed = false;
  }
});
