  // Get iframe and play button
  var video = document.getElementById("myVideo");
  var playButton = document.getElementById("playButton");

  // Function to play the video
  function playVideo() {
    // Replace "your_video_id" with the actual YouTube video ID
    var videoId = "https://www.youtube.com/embed/p7HKvqRI_Bo?si=wuAYHKJbRCh7pLNu";

    // Construct the YouTube video URL with the video ID
    var videoUrl = "https://www.youtube.com/embed/p7HKvqRI_Bo?si=wuAYHKJbRCh7pLNu" + videoId + "?autoplay=1";

    // Set the iframe src attribute to the constructed URL
    video.src = videoUrl;
  }

  // Add click event listener to the play button
  playButton.addEventListener("click", playVideo);

      function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("side_bar").style.width = "280px";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("side_bar").style.width = "60px";
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