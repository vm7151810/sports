var navbar = document.getElementById("nav");

var side = 1 ;
function hamburgerToCross(x) {
    x.classList.toggle("change");
    if (side == 1) {
        navbar.style.left = "0px";
        side = 0 ;
    }
    else {
        navbar.style.left = "-300px";
        side = 1 ;
    }
}