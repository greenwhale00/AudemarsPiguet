window.addEventListener('DOMContentLoaded', () => {

    const MainSlider = new Swiper('.mySwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })

    const DesignSlider = new Swiper('.design_slider', {
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })



})
