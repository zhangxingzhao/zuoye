window.addEventListener('load', function () {
    var bscroll = new BScroll('.section', {
        scrollY: true,
        click: true,
        scrollbar: true
    });

    var middleBig = document.getElementsByClassName('top-middle')[0];
    var topFooter = document.getElementsByClassName('top-footer')[0];
    var topFooters = document.getElementsByClassName('top-footers')[0];
    var headerBig = document.getElementsByClassName('header-big')[0];
    var sectionFooter = document.getElementsByClassName('section-footer')[0];
    // 渲染
    function middleTop(data, site, callBack) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += `<div class="middle-big">
            <span class="iconfont icon-dui icon"></span>
            <div class="div-img"><img src="./image/秒杀.png" alt=""></div>
            <div class="div-son">
                <p>${data[i].subtitle}</p>
                <p>${data[i].subtitles}</p>
                <div>
                    <div class="docll">
                        <span>${data[i].vip} <small>${data[i].noVip}</small></span>
                    </div>
                    <div class="shop">
                        <span class="shop-left">-</span>
                        <span class="shop-val">1</span>
                        <span class="shop-right">+</span>
                    </div>
                </div>
            </div>
        </div>`
        }
        site.innerHTML = html;
        callBack && callBack();
    }
    middleTop(listOne, middleBig, function () {
    })


    function middleFooter(data, site, callBack) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += `
            <div>
            <span>￥${data[i].vip}</span>
            <div>
                <span>${data[i].time}</span>
                <span>${data[i].dredge}</span>
                <span></span>
            </div>
        </div>`
        }
        site.innerHTML = html;
        callBack && callBack();
    }
    middleFooter(listTwo, topFooter, function () {
    })

    function middleBottom(data, site, callBack) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += `<div class="div">
            <div>
                <span>${data[i].a}</span>
               <div class="div-spanr">
               <span>￥</span>
               <span class="zong-zhi">${data[i].b}</span>
               </div>
            </div>
            <div class="top-div-big">
                <div class="top-div">
                    <div class="top-div-top">
                        <span>${data[i].c}</span>
                        <span>${data[i].d}</span>
                    </div>
                    <div class="top-div-bottom">
                        <span>${data[i].e}</span>
                        <span class="iconfont icon-angle-right"></span>
                    </div>
                </div>
                <div class="top-div">
                    <div class="top-div-top">
                        <span>${data[i].f}</span>
                        <span>${data[i].g}</span>
                    </div>
                    <div class="top-div-bottom">
                        <span>${data[i].h}</span>
                        <span class="iconfont icon-angle-right"></span>
                    </div>
                </div>
            </div>
            <div class="top-botton">
                <p>
                    <span>${data[i].i}</span>
                    <span>${data[i].j}</span>
                </p>
                <p>
                    <span>${data[i].k}</span>
                    <span>${data[i].l}</span>
                </p>
                <p>${data[i].m}</p>
            </div>
           </div>
            
            `
        }
        site.innerHTML = html;
        callBack && callBack();
    }
    middleBottom(listStree, topFooters, function () {
    })

    function dataCentent(data, site, callBack) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += `<div class="header-sons">
            <div class="imgs">
                <img src="${data[i].img}" alt="">
                <span>${data[i].subtitles}</span>
            </div>
            <span>${data[i].subtitle}</span>
            <span>${data[i].c}</span>
            <div class="div-bottomss">
                <div>
                    <span>￥${data[i].vip}</span>
                    <span>￥${data[i].val}</span>
                </div>
                <span class="iconfont icon-gouwuche "></span>
            </div>
        </div>`
        }
        site.innerHTML = html;
        callBack && callBack();
    }

    dataCentent(listFore, headerBig, function () {

    })


    // 事件
    // 获取元素  
    // 加
    var shopRight = document.getElementsByClassName('shop-right');

    // 减
    var shopLeft = document.getElementsByClassName('shop-left');

    // 值
    var shopVal = document.getElementsByClassName('shop-val');

    // 全选按钮
    var iconfont = document.getElementById('iconfont');

    // 单选按钮
    var icon = document.getElementsByClassName('icon');

    // 总值
    var zongZhi = document.querySelector('.zong-zhi');

    // 加入购物车的选择
    var conGouwuche = document.getElementsByClassName('icon-gouwuche');
    // push进来的数据
    var inde = [];
    // 截取出来的数据
    var indes = [];

    jiajian()
    uu()
    function jiajian() {
        for (var i = 0; i < shopRight.length; i++) {
            (function (idx) {

                // 获取初始值
                var count = shopVal[idx].innerText;
                // 点击减号的时候让值减
                shopLeft[idx].onclick = function () {
                    count--;
                    // 判断边界值
                    count <= 1 ? count = 1 : count - 1;
                    shopVal[idx].innerText = count;
                    listOne[idx].val = count;
                    numArr();
                }
                // 点击加号的时候让值加
                shopRight[idx].onclick = function () {
                    count++;
                    shopVal[idx].innerText = count;
                    listOne[idx].val = count;
                    numArr();
                }
                // 点击单选按钮
                icon[idx].onclick = function () {
                    icon[idx].classList.toggle('active');
                    listOne[idx].checked = icon[idx].classList.contains("active");
                    var bool = listOne.every(function (item) {
                        return item.checked;
                    })
                    bool ? iconfont.classList.add('active') : iconfont.classList.remove('active');
                    numArr();
                }
            })(i)
        }
    }

    function uu() {
        for (var j = 0; j < conGouwuche.length; j++) {
            (function (ind) {
                // 加入购物车
                conGouwuche[ind].onclick = function () {

                    listOne.push(listFore.splice(ind, 1)[0]);

                    
                    dataCentent(inde, headerBig, function () {
                    });
               
                    dataCentent(listFore, headerBig, function () {
                    });
                 
                    middleTop(listOne, middleBig, function () {
                    });
                    uu();
                    jiajian();
                    numArr();
                }
            })(j)
        }
    }

    // 全选按钮
    iconfont.addEventListener('click', function () {
        iconfont.classList.toggle('active');
        // 给所有的按钮添加或删除类
        for (var i = 0; i < listOne.length; i++) {
            console.log(listOne)
            iconfont.classList.contains('active') ? icon[i].classList.add('active') : icon[i].classList.remove('active');
            listOne[i].checked = icon[i].classList.contains('active');
        }
    })

    function numArr() {
        var nums = 0;
        // for (let i = 0; i < listOne.length; i++) {
        //     if (listOne[i].checked) {
        //         // 向下取整
        //         nums += Math.floor(listOne[i].vip) * listOne[i].val;
        //     }
        // }
        console.log()
        listOne.forEach(function (item) {
            if (item.checked) {
                console.log(item)
                nums += +(Math.floor(item.vip) * item.val);
            }
        })
        zongZhi.innerText = nums;
        console.log(nums);
    }
    numArr();

})