const fullscreenIcon = document.getElementById("fullscreenIcon");
const game = document.getElementById("game");
const page_header = document.querySelector(".page_header");
const page_footer = document.querySelector(".page_footer");
fullscreenIcon.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    page_header.style.display = "none";
    page_footer.style.display = "none";
    game.style.height = "100vh";
    game.style.position = "absolute";
    game.style.top = "0";
    game.classList.add("fullscreen");
    document.documentElement.requestFullscreen().catch((err) => {
      console.error(
        `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
      );
    });
  } else {
    game.style.height = "auto";
    page_header.style.display = "flex";
    page_footer.style.display = "flex";
    game.classList.remove("fullscreen");
    document.exitFullscreen();
  }
}
/*// Get the current URL
const url = new URL(window.location.href);

// Use URLSearchParams to retrieve the value of a parameter
const paramValue = url.searchParams.get('parameter-name');
import otherFile from paramValue+'.js';
function add_game() {
// Import the other JavaScript file
// This line retrieves the information from the other JavaScript file
const infoFromOtherFile = otherFile.someInformation;
}*/
