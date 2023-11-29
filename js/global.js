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
    icon.src = "../img/close-menu.png";

    // Show the links
    for (var i = 0; i < links.length; i++) {
      links[i].style.display = "block";
    }
  } else {
    smallMenu.style.height = "0px";
    icon.src = "../img/ham-menu.png";

    // Hide the links
    for (var i = 0; i < links.length; i++) {
      links[i].style.display = "none";
    }
  }
}