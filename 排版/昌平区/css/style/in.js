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

    renderArr();
    function renderArr() {
        var html = '';
        for (var i = 0; i < listOne.length; i++) {
            html += `<div class="middle-big">
            <span class="iconfont icon-dui icon"></span>
            <div class="div-img"><img src="./image/秒杀.png" alt=""></div>
            <div class="div-son">
                <p>${listOne[i].subtitle}</p>
                <p>${listOne[i].subtitles}</p>
                <div>
                    <div class="docll">
                        <span>${listOne[i].vip} <small>${listOne[i].noVip}</small></span>
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
        middleBig.innerHTML = html;

        var html = '';
        for (var i = 0; i < listTwo.length; i++) {
            html += `
            <div>
            <span>￥${listTwo[i].vip}</span>
            <div>
                <span>${listTwo[i].time}</span>
                <span>${listTwo[i].dredge}</span>
                <span></span>
            </div>
        </div>`
        }
        topFooter.innerHTML = html;


        var html = '';
        for (var i = 0; i < listStree.length; i++) {
            html += `<div class="div">
            <div>
                <span>${listStree[i].a}</span>
               <div class="div-spanr">
               <span>￥</span>
               <span class="zong-zhi">${listStree[i].b}</span>
               </div>
            </div>
            <div class="top-div-big">
                <div class="top-div">
                    <div class="top-div-top">
                        <span>${listStree[i].c}</span>
                        <span>${listStree[i].d}</span>
                    </div>
                    <div class="top-div-bottom">
                        <span>${listStree[i].e}</span>
                        <span class="iconfont icon-angle-right"></span>
                    </div>
                </div>
                <div class="top-div">
                    <div class="top-div-top">
                        <span>${listStree[i].f}</span>
                        <span>${listStree[i].g}</span>
                    </div>
                    <div class="top-div-bottom">
                        <span>${listStree[i].h}</span>
                        <span class="iconfont icon-angle-right"></span>
                    </div>
                </div>
            </div>
            <div class="top-botton">
                <p>
                    <span>${listStree[i].i}</span>
                    <span>${listStree[i].j}</span>
                </p>
                <p>
                    <span>${listStree[i].k}</span>
                    <span>${listStree[i].l}</span>
                </p>
                <p>${listStree[i].m}</p>
            </div>
           </div>`
        }
        topFooters.innerHTML = html;


        var html = '';
        for (var i = 0; i < listFore.length; i++) {
            html += `<div class="header-sons">
            <div class="imgs">
                <img src="${listFore[i].img}" alt="">
                <span>${listFore[i].subtitles}</span>
            </div>
            <span>${listFore[i].subtitle}</span>
            <span>${listFore[i].c}</span>
            <div class="div-bottomss">
                <div>
                    <span>￥${listFore[i].vip}</span>
                    <span>￥${listFore[i].noVip}</span>
                </div>
                <span class="iconfont icon-gouwuche "></span>
            </div>
        </div>`
        }
        headerBig.innerHTML = html;
        nextRender();
    }

    nextRender();
    function nextRender() {

        // 事件
        // 获取元素  
        // 加
        var shopRight = document.querySelectorAll('.shop-right');

        // 减
        var shopLeft = document.querySelectorAll('.shop-left');

        // 值
        var shopVal = document.querySelectorAll('.shop-val');

        // 全选按钮
        var iconfont = document.getElementById('iconfont');

        // 单选按钮
        var icon = document.querySelectorAll('.icon');



        // 选择
        var conGouwuche = document.querySelectorAll('.icon-gouwuche');

        var inde = [];
        var indes = [];
        a();
        function a() {
            // 全选按钮
            iconfont.addEventListener('click', function () {
                iconfont.classList.toggle('active');
                // 给所有的按钮添加或删除类
                for (var i = 0; i < listOne.length; i++) {
                    iconfont.classList.contains('active') ? icon[i].classList.add('active') : icon[i].classList.remove('active');
                    listOne[i].checked = icon[i].classList.contains('active');
                }
            })

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

                    icon[idx].onclick = function () {
                        icon[idx].classList.toggle('active');
                        listOne[idx].checked = icon[idx].classList.contains("active");
                        var bool = listOne.every(function (item) {
                            return item.checked;
                        })
                        bool ? iconfont.classList.add('active') : iconfont.classList.remove('active');
                        numArr();
                    }
                    conGouwuche[idx].onclick = function () {
                        console.log(1)
                        for (var i = 0; i < listFore.length; i++) {
                            inde.push(listFore[i]);
                        }
                        indes.push(inde.pop())
                        renderArr();
                        indes.forEach(item => {
                            listOne.push(item)
                        })
                        renderArr();
                        numArr();
                    }
                })(i)
            }
        }
    }
    // 总值
    var zongZhi = document.querySelector('.zong-zhi');
    function numArr() {
        var nums = 0;

        for (var i = 0; i < listOne.length; i++) {
            if (listOne[i].checked) {
                // 向下取整
                nums += Math.floor(listOne[i].vip) * listOne[i].val;
            }
        }
        zongZhi.innerText = nums;
    }
    numArr();
})