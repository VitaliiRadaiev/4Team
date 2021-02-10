//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}

}


{
    let testimonials = document.querySelector('.testimonials-block');
    if(testimonials) {
        let dataSlider = new Swiper(testimonials.querySelector('.slider-testimonials__body'), {
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 600,
            //touchRatio: 0,
            //simulateTouch: false,
            loop: true,
            //preloadImages: false,
            //lazy: true,
            // Dotts
            //pagination: {
            //	el: '.slider-quality__pagging',
            //	clickable: true,
            //},
            // Arrows
            navigation: {
                nextEl: testimonials.querySelector('.js-slider-testimonials-btn-next'),
                prevEl: testimonials.querySelector('.js-slider-testimonials-btn-prev'),
            },
            /*
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
            */
            on: {
                lazyImageReady: function () {
                    ibg();
                },
            }
            // And if we need scrollbar
            //scrollbar: {
            //	el: '.swiper-scrollbar',
            //},
        });
    }
}