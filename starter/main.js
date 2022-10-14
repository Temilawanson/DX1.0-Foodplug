// ES5

// console.log("send me your account number")
// var writeup="sapa nice one"
// console.log(hamburgerdiv)
// console.log(document)
// alert(writeup)

var hamburgerdiv = document.querySelector(".hamburger")
var mobileLinks = document.querySelector(".mobile-links-holder")
var mybackdrop = document.querySelector(".back-drop")

function dosomething() {
   hamburgerdiv.classList.toggle("showburger")
   mobileLinks.classList.toggle("show-mobile-links-holder")
   mybackdrop.classList.toggle("show-backdrop")
}