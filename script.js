// JavaScript for Toggle menu //

var navLinks = document.getElementById("navLinks");

function openMenu(){
    // console.log("Menu Opened");
    navLinks.style.right= "0";
}

function closeMenu(){
    navLinks.style.right= "-200px";
}