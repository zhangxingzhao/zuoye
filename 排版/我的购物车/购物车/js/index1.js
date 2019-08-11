window.addEventListener('load', function () {
    new BScroll('.bscro', {
        scrollY: true,
        click: true,
    })

    var dataContent = {
        // 本地存储
        // data: [{
        //     p1: '买减',
        //     p2: '小度智能音箱大金刚+小度畅听VIP会员年卡 音箱立减30元',
        //     p3: '换商品',
        //     p4: './image/3.jpg',
        //     p5: '小度人工智能音箱大金刚 百度旗下人工智能助手一个人的金属乐队，一家人的大指挥家',
        //     p6: '黑色',
        //     campignPirce: '199.00',
        //     num: '1',
        //     checked: false
        // }, {
        //     p1: '买减',
        //     p2: '小度智能音箱大金刚+小度畅听VIP会员年卡 音箱立减30元',
        //     p3: '换商品',
        //     p4: './image/3.jpg',
        //     p5: '小度人工智能音箱大金刚 百度旗下人工智能助手一个人的金属乐队，一家人的大指挥家',
        //     p6: '黑色',
        //     campignPirce: '199.00',
        //     num: '1',
        //     checked: false
        // }, {
        //     p1: '买减',
        //     p2: '小度智能音箱大金刚+小度畅听VIP会员年卡 音箱立减30元',
        //     p3: '换商品',
        //     p4: './image/3.jpg',
        //     p5: '小度人工智能音箱大金刚 百度旗下人工智能助手一个人的金属乐队，一家人的大指挥家',
        //     p6: '黑色',
        //     campignPirce: '199.00',
        //     num: '1',
        //     checked: false
        // }],
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
    // 此处是本地存储渲染的
    // this.window.localStorage.setItem('shuju', JSON.stringify(dataContent.data));
    var data = JSON.parse(this.localStorage.getItem('shuju'))
    dataContent.data = data;
    // var data = dataContent.data;
    dataContent.render();


    // 获取元素

    // // 加.........................................
    var rights = this.document.querySelectorAll('.rights');

    // // 中间值..................................
    var middleNum = this.document.querySelectorAll('.middle-num');

    // // 减.........................................
    var lefts = this.document.querySelectorAll('.lefts');

    // // 总价.....................................
    var zongZhi = this.document.querySelector('.zong-zhi');

    // // 单选按钮.......................................
    var danXuan = this.document.querySelectorAll('.danXuan');

    // // 全选........................
    var iconVal = this.document.querySelector('.icon-val');

    for (var i = 0; i < lefts.length; i++) {
        (function (idx) {
            var count = middleNum[idx].innerText;

            // 减
            lefts[idx].onclick = function () {
                count--;
                count <= 1 ? count = 1 : count - 1;
                middleNum[idx].innerText = count;
                data[idx].num = count;
                numArr();
            }

            // 加
            rights[idx].onclick = function () {
                count++;
                middleNum[idx].innerText = count;
                data[idx].num = count;
                numArr();
            }

            // 单选
            danXuan[idx].onclick = function () {
                danXuan[idx].classList.toggle('active');
                data[idx].checked = danXuan[idx].classList.contains("active");
                var bool = data.every(function (item) {
                    return item.checked;
                })
                bool ? iconVal.classList.add('active') : iconVal.classList.remove('active');
                numArr();
            }
        })(i)
    }

    // 全选
    iconVal.addEventListener('click', function () {
        iconVal.classList.toggle('active');
        for (var i = 0; i < data.length; i++) {
            iconVal.classList.contains('active') ? danXuan[i].classList.add('active') : danXuan[i].classList.remove('active');
            data[i].checked = danXuan[i].classList.contains('active');
        }
        numArr();
    })

    // 总价
    function numArr() {
        var nums = 0;
        for (var i = 0; i < data.length; i++) {
            if (dataContent.data[i].checked) {
                nums = (data[i].campignPirce * data[i].num).toFixed(2);
            }
        }
        zongZhi.innerText = '￥' + nums;
        console.log(nums)
    }
    numArr();
    // localStorage.setItem('shuju', JSON.stringify(dataContent.data));


})