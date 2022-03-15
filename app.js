
// text glitch

// let sample = document.getElementById('sample'); 
// let count = 20; 
// for (let i = 0; i < count; i++ ) {
//     let glitchBox = document.createElement('div')
//     glitchBox.className = 'box';
//     sample.appendChild(glitchBox);
// }

// setInterval(function(){
//     let glitch = document.getElementsByClassName('box');
// for ( let i = 0 ; i < glitch.length; i++ ) {
//     glitch[i].style.left = Math.floor(Math.random()*100) + 'vw';
//     glitch[i].style.top = Math.floor(Math.random()*100) + 'vh';
//     glitch[i].style.width = Math.floor(Math.random()*400) + 'px';
//     glitch[i].style.height = Math.floor(Math.random()*100) + 'px';
//     glitch[i].style.backgroundPosition = Math.floor(Math.random()*50) + 'px';
// }
// }, 150)




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
      background: '#C4C4C4',
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
      timeline.restart();
    }
    
    if (!isTurnedOn) {
      timeline.reverse();
    }
    
    isTurnedOn = !isTurnedOn;
  }
  
  // Initialize
  $(document).ready(buildTimeline);
  
  // Bindings
  $(document).on('click', SELECTOR_SWITCHER_TV, function() {
    toggleSwitcherTV();
  });
})();
