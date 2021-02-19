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
let textWrapper = document.querySelectorAll('.textAnimation .typed-strings');
if(textWrapper.length) {
  let tl = anime.timeline({loop: true})
  textWrapper.forEach(text => {
    let letters = text.querySelector('.letters');
    let replaceLetter = new Promise(resolve => {
        letters.innerHTML = letters.textContent.replace(/./g, "<div class='letter'>$&</div>");
        resolve();
    }).then(() => {
      tl.add({
        targets: text,
        opacity: 1,
      })
      .add({
        targets: text.querySelector('.line'),
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: text.querySelector('.line'),
        translateX: [0, text.querySelector('.letters').getBoundingClientRect().width + 20],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      }).add({
        targets: text.querySelectorAll('.letter'),
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
      }).add({
        targets: text,
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
    })
    

  })
}
//textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");


// let tl = anime.timeline({loop: false})
//   tl.add({
//     targets: '.textAnimation .line',
//     scaleY: [0,1],
//     opacity: [0.5,1],
//     easing: "easeOutExpo",
//     duration: 700
//   })
//   .add({
//     targets: '.textAnimation .line',
//     translateX: [0, document.querySelector('.textAnimation .letters-1').getBoundingClientRect().width + 20],
//     easing: "easeOutExpo",
//     duration: 700,
//     delay: 100
//   }).add({
//     targets: '.textAnimation .letters-1 .letter',
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=775',
//     delay: (el, i) => 34 * (i+1)
//   }).add({
//     targets: '.textAnimation',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
