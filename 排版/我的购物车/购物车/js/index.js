window.addEventListener('load', function () {
    new BScroll('.bscro', {
        scrollY: true,
        click: true,

    })

    var dataContent = {
        data: [{
            p1: '买减',
            p2: '小度智能音箱大金刚+小度畅听VIP会员年卡 音箱立减30元',
            p3: '换商品',
            p4: './image/3.jpg',
            p5: '小度人工智能音箱大金刚 百度旗下人工智能助手一个人的金属乐队，一家人的大指挥家',
            p6: '黑色',
            campignPirce: '199.00',
            num: '1',
            checked: false
        }, {
            p1: '买减',
            p2: '小度智能音箱大金刚+小度畅听VIP会员年卡 音箱立减30元',
            p3: '换商品',
            p4: './image/3.jpg',
            p5: '小度人工智能音箱大金刚 百度旗下人工智能助手一个人的金属乐队，一家人的大指挥家',
            p6: '黑色',
            campignPirce: '199.00',
            num: '1',
            checked: false
        }
            , {
            p1: '买减',
            p2: '小度智能音箱大金刚+小度畅听VIP会员年卡 音箱立减30元',
            p3: '换商品',
            p4: './image/3.jpg',
            p5: '小度人工智能音箱大金刚 百度旗下人工智能助手一个人的金属乐队，一家人的大指挥家',
            p6: '黑色',
            campignPirce: '199.00',
            num: '1',
            checked: false
        }],


        render() {
            var html = '';
            for (var i = 0; i < this.data.length; i++) {
                html += `
                    <div class="section">
                    <div class="section-top">
                        <span>${this.data[i].p1}</span>
                        <p>${this.data[i].p2}</p>
                        <span>${this.data[i].p3}></span>
                    </div>
                    <div class="section-bottom">
                        <div class="icon">
                            <span class="iconfont icon-dui danXuan " ></span>
                        </div>
                        <div class="div-img">
                            <img src="${this.data[i].p4}" alt="">
                        </div>
                        <div class="div-content">
                            <p>${this.data[i].p5}</p>
                            <span>${this.data[i].p6}</span>
                            <div class="span-new">
                               <div class="con">
                                    <span>￥</span>
                                    <span class="dataNum">${this.data[i].campignPirce}</span>
                               </div>
                                <div class="cons">
                                    <span class="lefts">-</span>
                                    <span class="middle-num">${this.data[i].num}</span>
                                    <span class="rights">+</span>
                                </div>
                            </div>
                        </div>
                     </div>
                    </div>`
            }
            document.getElementsByClassName('bscro-big')[0].innerHTML = html;
        }
    }
    dataContent.render();

    // 单选框
    var danXuan = document.querySelectorAll('.danXuan');
    this.console.log(danXuan)
    // 减号按钮
    var lefts = document.querySelectorAll('.lefts');
    // 加号按钮
    var rights = document.querySelectorAll('.rights');
    // // 中间的值
    var middleNum = document.querySelectorAll('.middle-num');
    //全选按钮
    var iconVal = document.querySelectorAll('.icon-val')[0];

    // 总值
    var zongZhi = document.querySelector('.zong-zhi');
    // 单价
    var dataNum = document.querySelectorAll('.dataNum');


    var count;
    for (var i = 0; i < danXuan.length; i++) {
        (function (i) {
            danXuan[i].onclick = function () {
                danXuan[i].classList.toggle('active');
            }

            count = middleNum[i].innerText
            lefts[i].onclick = function () {
                count--;
                if (count <= 1) {
                    count = 1;
                } else {
                    count - 1;
                }
                middleNum[i].innerText = count;
            }

            rights[i].onclick = function () {
                count++;
                middleNum[i].innerText = count;
            }

        })(i)

        iconVal.addEventListener('click', function () {

            iconVal.classList.toggle('active');

            for (var i = 0; i < dataContent.data.length; i++) {
                iconVal.classList.contains('active') ? danXuan[i].classList.add('active') : danXuan[i].classList.remove('active');
                dataContent.data[i].checked = danXuan[i].classList.contains('active');
            }
            allPrice();
        })

        var a;
        function allPrice() {
            console.log(count)
            var allPrice = 0;
            for (var i = 0; i < dataContent.data.length; i++) {
                if (dataContent.data[i].checked) {
                    a = dataNum[i].innerText;
                    allPrice += a * (count);
                }
            }
            zongZhi.innerText = allPrice;
        }
        allPrice();
    }







    // 单选框
    var danXuan = document.querySelectorAll('.danXuan');
    // 减号按钮
    var lefts = document.querySelectorAll('.lefts');
    // 加号按钮
    var rights = document.querySelectorAll('.rights');
    // // 中间的值
    var middleNum = document.querySelectorAll('.middle-num');
    //全选按钮
    var iconVal = document.querySelectorAll('.icon-val')[0];
    // 总值
    var zongZhi = document.querySelector('.zongZhi');
    // 单价
    var dataNum = document.querySelectorAll('.dataNum');

    var countArr = [];
    var flagArr = [];
    for (var m = 0; m < danXuan.length; m++) {
        countArr.push(1);
    }
    for (var o = 0; o < danXuan.length; o++) {
        flagArr.push(0);
    }
    var num = 0;
    for (var i = 0; i < danXuan.length; i++) {
        (function (idx) {
            danXuan[idx].onclick = function () {
                if (!flagArr[idx]) {
                    danXuan[idx].classList.add('active');
                    num += +(dataNum[idx].innerText);
                    zongZhi.innerText = '￥' + num;
                } else {
                    danXuan[idx].classList.remove('active');
                    num -= +(dataNum[idx].innerText);
                    zongZhi.innerText = '￥' + num;
                }
                flagArr[idx] = !flagArr[idx];

            }
            rights[idx].onclick = function () {
                countArr[idx]++;
                middleNum[idx].innerText = countArr[idx];
                num = +(dataContent.data[idx].p7 * middleNum[idx].innerText);
                zongZhi.innerText = '￥' + num;
            }
            lefts[idx].onclick = function () {
                countArr[idx]--;
                countArr[idx] = countArr[idx] < 1 ? 1 : countArr[idx];
                middleNum[idx].innerText = countArr[idx];
                num -= +(dataContent.data[idx].p7 * middleNum[idx].innerText);
                zongZhi.innerText = '￥' + num;
                nums();

            }
            if (danXuan[idx]) {
                num += +(dataContent.data[idx].p7 * middleNum[idx].innerText);
            }
        })(i)

        function nums() {
            for (var i = 0; i < lefts.length; i++) {
                num += +(dataContent.data[i].p7 * lefts[i].innerText)

            }
        }
    }


    var flag = false;
    iconVal.onclick = function () {
        flag = !flag;
        for (var i = 0; i < danXuan.length; i++) {
            danXuan[i].classList.toggle('active');
        }
        if (flag) {
            iconVal.classList.toggle('active');
            zongZhi.innerText = '￥' + num;
        } else {
            iconVal.classList.toggle('active');
            zongZhi.innerText = '￥' + 0;
        }
    }
})