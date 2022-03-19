// on / off screen
// ###############

(function() {

  var SELECTOR_SCREEN_ELEMENT = '.screen';
  var SELECTOR_SWITCHER_TV = '#switcher-tv';
  
  var isTurnedOn = true;
  
  var timeline;
  
  function buildTimeline() {
    timeline = new TimelineMax({
      paused: true
    });
    
    timeline
    .to(SELECTOR_SCREEN_ELEMENT, .2, {
      width: '100vw',
      height: '2px',
      background: '#9A9A9A',
      ease: Power2.easeOut
    })
    .to(SELECTOR_SCREEN_ELEMENT, .2, {
      width: '0',
      height: '0',
      background: '#ffffff'
    });
  }

  function toggleSwitcherTV() {
    if (isTurnedOn) {
      // yes();
      timeline.restart();
    }
    
    if (!isTurnedOn) {
      timeline.reverse();
    }
    
    isTurnedOn = !isTurnedOn;
  }

  $(document).ready(buildTimeline);
  $(document).on('click', SELECTOR_SWITCHER_TV, function() {
    toggleSwitcherTV();
  });
})();

// vcr audio
// ###############

function play() {
  var audio = document.getElementById("audio");
  audio.preload = 'auto';
  audio.play();
}

