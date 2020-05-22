
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