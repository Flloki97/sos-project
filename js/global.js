// function openMenu() {
//     var mobileMenu = document.getElementById("menu-links-container").classList.toggle('opened');
//     var smallMenu = document.getElementById("menu-links-container");
//     var links = document.getElementById("links-wrapper");

//     if(smallMenu.classList.contains('opened')) {
//       smallMenu.style.height = "215px";
//       document.getElementById("op-cl-menu").src = "../img/close-menu.png";
//     } else {
//       smallMenu.style.height = "0px";
//       document.getElementById("op-cl-menu").src = "../img/ham-menu.png";
      
//     } 
//   }


function openMenu() {
  var smallMenu = document.getElementById("menu-links-container");
  var links = document.getElementById("menu-links-container").getElementsByTagName("a");
  var icon = document.getElementById("op-cl-menu");

  smallMenu.classList.toggle('opened');

  if (smallMenu.classList.contains('opened')) {
    smallMenu.style.height = "215px";
    icon.src = "../img/close-menu.webp";

    // Show the links
    for (var i = 0; i < links.length; i++) {
      links[i].style.display = "block";
    }
  } else {
    smallMenu.style.height = "0px";
    icon.src = "../img/ham-menu.webp";

    // Hide the links
    for (var i = 0; i < links.length; i++) {
      links[i].style.display = "none";
    }
  }
}

// window.addEventListener('load', function () {
//   // Hide the loading animation
//   document.querySelector('.loading-screen').style.display = 'none';

//   // Display the content
//   document.querySelector('.page-container').style.display = 'block';
// });

window.addEventListener('load', function () {
  // Show the loading animation initially (assuming it's hidden by default)
  document.querySelector('.loading-screen').style.display = 'flex';

  // Wait for 3 seconds before hiding the loading animation
  setTimeout(function () {
    // Start the fade-out animation for the loading screen
    document.querySelector('.loading-screen').style.opacity = '0';

    // After the fade-out animation (adjust the duration in CSS), hide the loading screen
    setTimeout(function () {
      document.querySelector('.loading-screen').style.display = 'none';

      // Display the content (assuming there is a .page-container element)
      document.querySelector('.page-container').style.display = 'block';
    }, 500); // Adjust this value based on your CSS transition duration
  }); // Wait for 3 seconds before starting the fade-out
});


// animate content on viewport

document.addEventListener('DOMContentLoaded', function() {
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    var elements = document.querySelectorAll('.animate-that');
    elements.forEach(function(element) {
      if (isInViewport(element) && !element.classList.contains('animate__animated')) {
        element.classList.add('animate__animated', 'animate__fadeInLeft');
      }
    });
  }

  
  // Attach the handleScroll function to the scroll event
  window.addEventListener('scroll', handleScroll);
  
  // Initial check on page load
  handleScroll();
  

});

