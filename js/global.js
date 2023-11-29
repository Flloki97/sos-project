function openMenu() {
    var mobileMenu = document.getElementById("menu-links-container").classList.toggle('opened');
    var smallMenu = document.getElementById("menu-links-container");
    var links = document.getElementById("links-wrapper");

    if(smallMenu.classList.contains('opened')) {
      smallMenu.style.height = "215px";
      document.getElementById("op-cl-menu").src = "../img/close-menu.png";
    } else {
      smallMenu.style.height = "0px";
      document.getElementById("op-cl-menu").src = "../img/ham-menu.png";
      
    } 
  }