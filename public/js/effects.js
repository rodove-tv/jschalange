const menu = document.getElementById("menu");
let menuStatus = false;
const menuButton = document.getElementById("menuBtn");
const title = document.getElementById("title");

function showMenu() {
  if (menuStatus) {
    //menuButton.style.visibility = "visible";
    menu.style.display = "none";
    title.style.display = "block";
    menuButton.style.backgroundColor = "white";
    menuButton.style.padding = "10px";
    menuStatus = false;
    return;
  } else {
    menuButton.style.backgroundColor = "#b1b0b2";
    menuButton.style.padding = "20px";
    menuButton.style.borderRadius = "50%";

    //menuButton.style.visibility = "hidden";
    menuStatus = true;
    title.style.display = "none";
    menu.style.display = "flex";
  }
}
