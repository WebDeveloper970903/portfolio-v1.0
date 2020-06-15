
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
  let socials, navigation__checkbox;
  
  // hide social icons by default
  function hideSocials() {
    socials = document.querySelectorAll('.social');
    navigation__checkbox = document.querySelector('.navigation__checkbox');

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
      document.body.style.backgroundColor = "yellow";
      hideSocials();
      navigation__checkbox.addEventListener('change', function() { // if mobile view and navigation__checkbox is unchecked, then set opacity = 0
        if (this.checked) {
          for (let i = 0; i < socials.length; i++) {
            socials[i].classList.remove('u-opacity-0');
            socials[i].classList.add('u-opacity-1');
            socials[i].style.transition = "opacity, 550ms linear 400ms"; // transition [property] [duration] [ease] [delay];
          }
        } 
        else {
         hideSocials();
        }
      });
    } 
    else { // If media query does not match
      document.body.style.backgroundColor = "pink";
    }
  }
  
  window.addEventListener('resize', hideSocials);
  window.addEventListener('load', hideSocials);

  const phonePort = window.matchMedia("(max-width: 480px)");
  showSocials(phonePort); // Call listener function at run time
  phonePort.addListener(showSocials); // Attach listener function on state changes
})();