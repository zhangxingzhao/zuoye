var nav = new BScroll('.bsc', {
    click: true,
    scrollX: true
})

new BScroll('.bscro',{
    click:true,
    scrollY:true
})

var sectionLeft = document.getElementsByClassName('section-left')[0];

sectionLeft.addEventListener('click', function (e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;
    if (target.nodeName === 'SPAN') {
        for (var i = 0; i < sectionLeft.children.length; i++) {
            sectionLeft.children[i].className = '';
        }
        target.className = 'active';
        nav.scrollToElement(target,500,true,true);
    }
})