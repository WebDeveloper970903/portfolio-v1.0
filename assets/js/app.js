
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
  function showSocials(phoneP) {
    if (phoneP.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";

      let socials = document.querySelectorAll('.social');
      let navigation__checkbox = document.querySelector('.navigation__checkbox');
      
      navigation__checkbox.addEventListener('change', function() {
        if (this.checked) {
          console.log('checkbox is checked');
          // show icons
          for (let i = 0; i < socials.length; i++) {
            socials[i].classList.remove('u-opacity-0');
            socials[i].classList.add('u-opacity-1');
            socials[i].style.transition = "opacity, 650ms linear 0s"; // transition [property] [duration] [ease] [delay];
          }
        } 
        else {
          // hide icons
          for (let i = 0; i < socials.length; i++) {
            socials[i].classList.remove('u-opacity-1');
            socials[i].classList.add('u-opacity-0');
            socials[i].style.transition = "opacity, 250ms linear 0s"; // transition [property] [duration] [ease] [delay];
          }
        }
      });
      // hide icons by default
      for (let i = 0; i < socials.length; i++) {
        socials[i].classList.add('u-opacity-0');
      }
    } 
    else { // If media query does not matches
      document.body.style.backgroundColor = "pink";
    }
  }

  function hideSocials(phoneL) {
    if (phoneL.matches) { // If media query matches
      document.body.style.backgroundColor = "blue";
      let socials = document.querySelectorAll('.social');
      for (let i = 0; i < socials.length; i++) {
        socials[i].classList.add('u-opacity-0');
      }
    }
  } 
  
  const phoneP = window.matchMedia("(max-width: 480px)");
  showSocials(phoneP); // Call listener function at run time
  phoneP.addListener(showSocials); // Attach listener function on state changes

  const phoneL = window.matchMedia("(min-width: 481px) and (max-width: 767px)");
  hideSocials(phoneL); // Call listener function at run time
  phoneL.addListener(hideSocials); // Attach listener function on state changes
