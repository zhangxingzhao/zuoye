window.onload = function () {
    var topBsc = new BScroll('.box', {
        scrollX: true,
        click: true
    })

    new BScroll('.bscrolls', {
        scrollY: true,
        click: true
    })



    var headerSpan = document.getElementsByClassName('header-span')[0];
    headerSpan.addEventListener('click', function (e) {
        if (e.target.nodeName === 'SPAN') {
            for (var i = 0; i < headerSpan.children.length; i++) {
                headerSpan.children[i].classList.remove('active');
            }
            e.target.classList.add('active');
            topBsc.scrollToElement(e.target, 500, true, true);
        }
    })
}