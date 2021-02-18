// {
//     let textAnimationBlocks = document.querySelectorAll('.textAnimation');
//     if(textAnimationBlocks.length > 0) {
//         textAnimationBlocks.forEach(item => {
//             let textEl = item.querySelector('.typed');
//             let textStr = item.querySelector('.typed-strings');

//             let typed = new Typed(textEl, {
//                 stringsElement: textStr,
//                 typeSpeed: 10,
//                 backSpeed: 0,
//                 backDelay: 4000,
//                 startDelay: 1000,
//                 loop: true,
//                 cursorChar: '',
//             })
//         })
//     }
// }

// Wrap every letter in a span
let textWrapper = document.querySelector('.textAnimation .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");


anime.timeline({loop: true})
  .add({
    targets: '.textAnimation .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.textAnimation .line',
    translateX: [0, document.querySelector('.textAnimation .letters').getBoundingClientRect().width + 20],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.textAnimation .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.textAnimation',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });