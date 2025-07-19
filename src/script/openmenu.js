let displayed = false;

function openMenu(){
    var x = document.getElementById("menu");
    x.style.display = "block";

}

function closeMenu(){
    var x = document.getElementById("menu");
    x.style.display = "none";
}

function openInstagramMenu() {
  const menu = document.getElementById("igmenu");
  const igbutton = document.getElementById("igbutton");
  const rect = igbutton.getBoundingClientRect();
  displayed = !displayed;
  menu.classList.toggle("hidden", !displayed);
  menu.classList.toggle("block", displayed);
}
