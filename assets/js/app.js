// Calculating the vh

// // 1. get the v unit (viewport height * 1%) 
// let vh = window.innerHeight * 0.01;
// // set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`); 

// // We listen to the resize event
// window.addEventListener('resize', () => {
//   // We execute the same script as before
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

console.log("Hello world :)");
// Trigger CSS animation on a child elem upon user hover on parent elem

// add event listener to parent elem
// var aElem = document.getElementsByClassName("featured");
// aElem.addEventListener('mouseover', function(e) {
//  console.log("Element hovered");
// });
function animateCard(elem) {
 console.log("onmouseOVER");              
 console.log(elem);              
 // animate elem (scale and move elem up)
  // const arrow = document.querySelector('.');
  // transform: translateY(-1.5rem) scale(1.03rem);
  document.getElementById("featured-card").style.transform = "translateY(-1.5rem) scale(1.03rem)";
  // elem.style.backgroundColor = "blue";
}

function normalise(elem) {
 console.log("onmouseOUT");
}
// Add hover attribute to  a child elem
  