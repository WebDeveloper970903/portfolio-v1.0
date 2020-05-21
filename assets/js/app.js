
/*===========================================================================================================
*  TRIGGERING CSS3 TRANSITIONS
===========================================================================================================*/


/** Page Load Transitions / <body onload="slidein('elem')">
*****************************************************/
function slideoc(elm) {
	console.log("Page load: slideOpen");

	const elem = document.getElementById(elm);
	// elem.style.background = clr; // colour;
	elem.style.transition = "height, 0.5s linear 0s"; // transition [property] [duration] [ease] [delay];
	elem.style.height = "100%";
}

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
			// else {
			// 	elem.classList.add('hide');
			// 	elem.classList.remove('card-slidein');
			// }
    }
  }

	window.addEventListener('scroll', getPosition);
  window.addEventListener('load', init);
  window.addEventListener('resize', init);

  init();
  getPosition();
})();