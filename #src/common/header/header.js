{
    let header = document.querySelector('.header');
    if(header) {
        let isScroll = window.pageYOffset;
        let menuList = document.querySelector('.menu__list');
        let wrapper = document.querySelector('.wrapper');

        window.addEventListener('scroll', () => {
            if(window.pageYOffset > isScroll) {
                if(window.pageYOffset > header.clientHeight) {
                    header.style.transform = "translateY(-100%)";
                    if(window.pageYOffset > 100) {
                        header.classList.add('is-scrolling');
                    } else {
                        header.classList.remove('is-scrolling');
                        header.style.transform = "translateY(0%)";
                    }
                    // for(let el of menuList.children) {
                    //     el.classList.remove('_active');
                    // }
                    // wrapper.classList.remove('cover')
                     isScroll = window.pageYOffset;
                }
            } else if(window.pageYOffset < isScroll) {
                if(window.pageYOffset > 100) {
                    header.classList.add('is-scrolling');
                } else {
                    header.classList.remove('is-scrolling');
                }
                header.style.transform = "translateY(0%)";
                isScroll = window.pageYOffset;
                
            }
            
        });
    }
}
