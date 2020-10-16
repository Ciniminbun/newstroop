function navAnimation(x) {
    if (x.matches) { // If media query matches
        document.getElementById("mySidenav").style.width = "100%";
    } else {
        document.getElementById("mySidenav").style.width = "0";
    }
}

var x = window.matchMedia("(min-width: 600px)")
navAnimation(x) // Call listener function at run time
x.addListener(navAnimation) // Attach listener function on state changes

function openNav() {
document.getElementById("mySidenav").style.width = "60vw";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}