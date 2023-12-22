

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


      const toggleVisibility = () => {
        const myDiv = document.getElementById('myDiv');
        const addHeight= document.getElementById('video-2');
        myDiv.style.display = (myDiv.style.display === 'none' || myDiv.style.display === '') ? 'block' : 'none';

        if (myDiv.style.display === 'block') {
          addHeight.classList.add('add_height');
        } else {
          addHeight.classList.remove('add_height');
        }
    }