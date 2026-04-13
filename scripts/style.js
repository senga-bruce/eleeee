 window.addEventListener("scroll", function () {
        const minHeader = document.querySelector(".min-header");
        if (window.scrollY > 50) {
          minHeader.style.transform = "translateY(-100%)";
          minHeader.style.opacity = "0";
        } else {
          minHeader.style.transform = "translateY(0)";
          minHeader.style.opacity = "1";
        }
      });
      var navLinks = document.getElementById("navLinks");
      function showMenu() {
        navLinks.style.right = "0";
      }
      function hideMenu() {
        navLinks.style.right = "-200px";
      }
//    okkkkkkkkkkkkkkkkkkkk
      window.addEventListener("scroll", function () {
        const x = document.querySelector(".min-header");
        if (window.scrollY > 50) {
          minHeader.style.transform = "translateY(-100%)";
          minHeader.style.opacity = "0";
        } else {
          minHeader.style.transform = "translateY(0)";
          minHeader.style.opacity = "1";
        }
      });
      var navLinks = document.getElementById("navLinks");
      function showMenu() {
        navLinks.style.right = "0";
      }
      function hideMenu() {
        navLinks.style.right = "-200px";
      }

      var three = document.getElementById("three");
      function okk() {
        navLinks.style.right = "0";
      }
      function ok() {
        navLinks.style.right = "-200px";
      }

// AOS animations
AOS.init({
        duration: 100, // How long the animation lasts (1 second)
        once: true, // Animation only happens once (better for performance)
      });