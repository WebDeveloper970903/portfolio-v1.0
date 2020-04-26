// Calculating the vh

// 1. get the v unit (viewport height * 1%) 
let vh = window.innerHeight * 0.01;
// set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`); 

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});