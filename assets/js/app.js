/*===========================================================================================================
*  TRIGGERING CSS3 TRANSITIONS
===========================================================================================================*/


/**  Scroll based animations
*****************************************************/
(function() {
  let elems, viewport_H;

  function init() {
		elems = document.querySelectorAll('.hide');
    viewport_H = window.innerHeight;
  }

  function getPosition() {
    for (let i = 0; i < elems.length; i++) {
      let elem = elems[i];
      let positionFromTop = elems[i].getBoundingClientRect().top;

      if (positionFromTop - viewport_H <= 0) {
				elem.classList.remove('hide');
        elem.classList.add('card-slidein');
			}
    }
  }

	window.addEventListener('scroll', getPosition);
  window.addEventListener('load', init);
  window.addEventListener('resize', init);

  init();
  getPosition();
})();


/**  Social icons - mobile display
*****************************************************/
(function() {
  let socials = document.querySelectorAll('.social');
  let navigation__checkbox = document.querySelector('.navigation__checkbox');

// hide social icons by default
  function hideSocials() {
    for (let i = 0; i < socials.length; i++) {
      if (socials[i].classList.contains('u-opacity-1')) {
        socials[i].classList.remove('u-opacity-1');
      }
      socials[i].classList.add('u-opacity-0');
      socials[i].style.transition = "opacity, 100ms linear 0s"; // transition [property] [duration] [ease] [delay];
    }
  }

  function showSocials(phonePort) {
    if (phonePort.matches) { // If media query matches
      // reposition Whatsapp icon to left on mobile phones (landscape)
      const whatsappIcon = document.querySelector('.whatsapp');
      whatsappIcon.classList.add('u-position-left-8');

      hideSocials();
      
      navigation__checkbox.addEventListener('change', function() { // if mobile view and navigation__checkbox is unchecked, then set opacity = 0
        if (this.checked) {
          for (let i = 0; i < socials.length; i++) {
            socials[i].classList.remove('u-opacity-0');
            socials[i].classList.add('u-opacity-1');
            socials[i].style.transition = "opacity, 550ms linear 400ms"; // transition [property] [duration] [ease] [delay];
          }
        } 
        if (!this.checked) {
          hideSocials();
        }
      });
    } 
  } 

  function removeOpc(m2lDevices) {
    if (m2lDevices.matches) { // If media query matches   
      for (let i = 0; i < socials.length; i++) {
        socials[i].classList.remove('u-opacity-0');
      }  
    } 
  } 

  const phonePort = window.matchMedia("(max-width: 480px)");
  showSocials(phonePort); // Call listener function at run time
  phonePort.addListener(showSocials); // Attach listener function on state changes

  const m2lDevices = window.matchMedia("(min-width: 768px)");
  removeOpc(m2lDevices); 
  m2lDevices.addListener(removeOpc);
})(); 


/**  Smooth scroll effect
*****************************************************/
function smoothScrroll(target, duration) {
  let tar = document.querySelector(target);
  let tarPos = tar.getBoundingClientRect().top;
  let pageStartPos = window.pageYOffset;
  let dist = tarPos - pageStartPos;
  let startTime = null;
  
  function animate(currTime) {
    if (startTime === null) startTime = currTime;
    let timeElapsed = currTime - startTime;
    let run = easeInOutQuad(timeElapsed, pageStartPos, dist, duration); // t, b, c, d
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animate);
  }
  // quadratic easing in/out - acceleration until halfway, then deceleration - http://gizma.com/easing/
  function easeInOutQuad(t, b, c, d) {
    t /= d/2;
	  if (t < 1) return c/2*t*t + b;
	  t--;
	  return -c/2 * (t*(t-2) - 1) + b;
  }
  
  requestAnimationFrame(animate);
}

let toAbout = document.querySelector('.btn--scroll-down');
toAbout.addEventListener('click', function() {
  smoothScrroll('#about', 1000);
});
let toHome = document.querySelector('.btn--scroll-up');
toHome.addEventListener('click', function() {
  smoothScrroll('#home', 2000);
});
