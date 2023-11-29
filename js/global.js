function openMenu() {
    var mobileMenu = document.getElementById("ham-menu").classList.toggle('opened');
    var smallMenu = document.getElementById("ham-menu");
    var styleLineTop = document.getElementById("top-line").style;
    var styleLineBottom = document.getElementById("bottom-line").style;
    var dropMenu = document.getElementById("menu-links-container");

    if(smallMenu.classList.contains('opened')) {
       styleLineTop.webkitTransform ='rotate(45deg) translate(0px, 0px)';
       styleLineBottom.webkitTransform ='rotate(315deg) translate(7px, -7px)';
      //  dropMenu.style.display = "flex";
      // dropMenu.setAttribute("style", "height: 80vh ");
      dropMenu.classList.toggle("hidden");
    } else {
       styleLineTop.webkitTransform ='rotate(0deg) translate(0px, 0px)';
       styleLineBottom.webkitTransform ='rotate(0deg) translate(0px, 0px)';
      //  dropMenu.setAttribute("style", "height: 0vh");
      //  dropMenu.style.display = "none";
      dropMenu.classList.toggle("hidden");
    } 
  }