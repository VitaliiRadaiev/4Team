{
    let textAnimationBlocks = document.querySelectorAll('.textAnimation');
    if(textAnimationBlocks.length > 0) {
        textAnimationBlocks.forEach(item => {
            let textEl = item.querySelector('.typed');
            let textStr = item.querySelector('.typed-strings');

            let typed = new Typed(textEl, {
                stringsElement: textStr,
                typeSpeed: 100,
                backSpeed: 0,
                backDelay: 500,
                startDelay: 1000,
                loop: true,
                cursorChar: '',
            })
        })
    }
}
