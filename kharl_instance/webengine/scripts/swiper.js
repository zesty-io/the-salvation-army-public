document.addEventListener("DOMContentLoaded", (event) => {
    const swiperEl = document.querySelector('swiper-container');
    if (swiperEl) {
        // swiper parameters
        const swiperParams = {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 20,
            grid: 1,
            injectStyles:[`
                ::slotted(.swiper-container .swiper-button-prev) {
                    left: 45%;
                    right: auto;
                    bottom: 0;
                    top: auto;
                    height: 30px;
                    color: #000;
                    transform: translateX(-50%);
                }
                ::host {
                    
                }
            `],
            loop: true,
            navigation: true,
            pagination: true,
            breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            },
            on: {
            init() {
                // ...
            },
            },
        };

        // now we need to assign all parameters to Swiper element
        Object.assign(swiperEl, swiperParams);

        // and now initialize it
        swiperEl.initialize();

        const prevButton = swiperEl.shadowRoot.querySelector('.swiper-button-prev');
        const nextButton = swiperEl.shadowRoot.querySelector('.swiper-button-next');
        console.log(prevButton, nextButton)
        if (prevButton && nextButton) {
            prevButton.innerHTML = '';
            nextButton.innerHTML = '';
        }
    }
    
});