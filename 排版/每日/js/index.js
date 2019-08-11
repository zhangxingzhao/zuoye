window.addEventListener('load', function () {

    // 左边的bscroll
    var bscLeft = new BScroll('.left', {
        click: true,
        scrollY: true,
        scrollbar: true
    });

    // 右上的bscroll
    var bscTop = new BScroll('.right-top', {
        click: true,
        scrollX: true,
    });

    // 右下的bscroll
    var bscBottom = new BScroll('.botton-one', {
        click: true,
        scrollX: true,
        probeType: 3
    });

    // 获取元素
    // 左边
    var cententLeft = document.getElementsByClassName('section-left')[0];

    // 右上
    var cententTop = document.getElementsByClassName('bsc')[0];

    // 右下
    var cententBottom = document.getElementsByClassName('botton-bsc')[0];

    // 高度
    var heightArr = null;

    // 当前下标
    var currentIndex = 0;

    // 左边
    function dataLeft(data, parent, callBack) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += `
            <span data-id="${i}"  class="${i === 0 ? 'active' : ''}  ">${data[i].name}</span>`
        }
        parent.innerHTML = html;
        callBack && callBack();
    }
    dataLeft(lMenuData, cententLeft, function () {

    })

    // 左边事件
    cententLeft.addEventListener('click', function (e) {
        var event = e || window.event;
        var target = event.target || event.srcElement;
        if (target.nodeName === 'SPAN') {
            for (var i = 0; i < cententLeft.children.length; i++) {
                cententLeft.children[i].classList.remove('active');
                cententLeft.children[i].style.color = '';
            }
            target.classList.add('active');
            target.style.color = colorArr();
            // 给左边的添加实时滚动   
            bscLeft.scrollToElement(target, 500, true, true);
            currentIndex = target.dataset.id;
            renderRight(currentIndex);
        }
    })

    // 右上渲染
    function dataRight(data, parent, callBack) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += `
                <span data-index="${i}" class="${i === 0 ? 'topColor' : ''}">${data[i].name}</span>`
        }
        parent.innerHTML = html;
        callBack && callBack();
    }
    // 右边事件
    cententTop.addEventListener('click', function (e) {
        var event = e || window.event;
        var target = event.target || event.srcElement;
        if (target.nodeName === 'SPAN') {
            bscTop.scrollToElement(target, 500, true, true);
            bscBottom.scrollToElement(cententBottom.children[target.dataset.index], 500, 0, 0);
        }
    })


    // 右下渲染
    function dataRightDow(data, parent, callBack) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += `<div class="right-big">
                <div class="nav" >${data[i].title}</div>`;
            for (var j = 0; j < data[i].list.length; j++) {
                var datas = data[i].list[j];
                html += `<div class="right-centent">
                    <div class="left-img">
                        <img src="./image/秒杀.png" alt="">
                    </div>
                    <div class="img-right">
                        <p>${datas.name}</p>
                        <p>${datas.subtitle}</p>
                        <div>
                            <div>
                                <span>￥${datas.vip.price}</span>
                                <span>￥${datas.noVip.price}</span>
                            </div>
                            <div class="iconfont icon-gouwuche"></div>
                        </div>
                    </div>
                </div>`
            } html += `</div>`
        }
        parent.innerHTML = html;
        callBack && callBack();
    }
 

    // 监听滚动
    bscBottom.on('scroll', function (size) {

        var res = heightArr.filter(function (item) {
            return -size.y > item;
        });

        for (var i = 0; i < cententTop.children.length; i++) {
            cententTop.children[i].classList.remove('topColor');
        }

        var idx = res.length <= 0 ? 0 : res.length;
        idx = res.length >= heightArr.length ? heightArr.length - 1 : res.length;
        cententTop.children[idx].classList.add('topColor');
        bscTop.scrollToElement(cententTop.children[idx], 500, true, true);
    });


    // 右边事件
    cententTop.addEventListener('click', function (e) {
        var event = e || window.event;
        var target = event.target || event.srcElement;
        if (target.nodeName === 'SPAN') {
            for (var i = 0; i < cententTop.children.length; i++) {
                cententTop.children[i].classList.remove('topColor');
                cententTop.children[i].style.color = '';
            }
            target.style.color = colorArr();
            target.classList.add('topColor');

            // 给上面的添加实时滚动
            bscTop.scrollToElement(target, 500, true, true);

        }
    })

    // 渲染右边内容
    function renderRight(ind) {
        dataRightDow(rConData[ind].cellList, cententBottom, function () {
            heightArr = Array.from(cententBottom.children).map(function (item) {
                return item.offsetTop;
            });
        })
        dataRight(rConData[ind].menuInfo, cententTop, function () {

        });
    }

    renderRight(currentIndex);


    // // 封装随机色
    function colorArr() {
        return ` rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},1)`
    }
})