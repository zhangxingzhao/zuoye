
window.addEventListener('load', function () {
    new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    new BScroll('.big', {
        scrollY: true,
        click: true,
    })
})