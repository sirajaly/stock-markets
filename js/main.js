function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("side_bar").style.minWidth = "270px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("side_bar").style.minWidth = "60px";
}

// Add the following code to open the sidebar by default on larger screens
window.addEventListener("DOMContentLoaded", (event) => {
  if (window.innerWidth > 768) {
    openNav();
  }
});

// Add the following code to close the sidebar when the window is resized to a mobile size
window.addEventListener("resize", (event) => {
  if (window.innerWidth <= 768) {
    closeNav();
  }
});

// WATCH VIDEO FUNCTION
const myDiv = document.getElementById("myDiv");
const addHeight = document.getElementById("video-2");

const watchVideo = () => {
  // Check if myDiv has the class 'hidden'
  if (myDiv.classList.contains("hidden")) {
    // If true, remove the class 'hidden' from myDiv
    myDiv.classList.remove("hidden");

    // Add the class 'add_height' to addHeight (video-2)
    addHeight.classList.add("add_height");
  }
};
