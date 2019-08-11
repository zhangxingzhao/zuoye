// 第一个页面的
new BScroll('.bsc-big', {
    scrollY: true,
    click: true
})

// 第三个页面的
var bscThree = new BScroll('.section-left', {
    scrollY: true,
    click: true
})

// 自行车的
var rightBottom = new BScroll('.right-bottom', {
    scrollY: true,
    click: true
})

// 渲染第一个页面
var dataOne = {
    // data: [
    //     {
    //         p: '后街',
    //         p1: '金秋黄',
    //         p2: 'M',
    //         p3: '2499',
    //         p4: '1',
    //         checked: false
    //     },
    //     {
    //         p: '后街',
    //         p1: '金秋黄',
    //         p2: 'M',
    //         p3: '2499',
    //         p4: '1',
    //         checked: false
    //     },
    //     {
    //         p: '后街',
    //         p1: '金秋黄',
    //         p2: 'M',
    //         p3: '2499',
    //         p4: '1',
    //         checked: false
    //     }, {
    //         p: '后街',
    //         p1: '金秋黄',
    //         p2: 'M',
    //         p3: '2499',
    //         p4: '1',
    //         checked: false
    //     },
    //     {
    //         p: '后街',
    //         p1: '金秋黄',
    //         p2: 'M',
    //         p3: '2499',
    //         p4: '1',
    //         checked: false
    //     },
    // ],
    render() {
        var html = '';
        var _this = this;
        console.log(_this.data);
        for (var i = 0; i < _this.data.length; i++) {
            html += ` <div class="section-centent">
            <div class="left">
                <div class="iconfont icon-dui icons" ></div>
                <img  class="left-img" src="./image/IMG_1151_r2_c2.png" alt="">
            </div>
            <div class="right">
                <div>
                    <span>${_this.data[i].p}</span>
                    <span class="iconfont icon-weibangding"></span>
                </div>
                <div>
                    <span>${_this.data[i].p1}</span>
                    <span>${_this.data[i].p2}</span>
                </div>
                <div>
                    <span>￥${_this.data[i].p3}</span>
                    <div class="ren">
                        <p class="lefts">-</p>
                        <p class="middleVals">1</p>
                        <p class="rights">+</p>
                    </div>
                </div>
            </div>
        </div>`
        }
        document.getElementsByClassName('bsc')[0].innerHTML = html;
    }
}
// 本地存储
// this.window.localStorage.setItem('a', JSON.stringify(dataOne.data));
var data = JSON.parse(this.localStorage.getItem('a'))
dataOne.data = data;
console.log(data)
dataOne.render();

// 渲染自行车页面 左边
var dataThreeLeft = {
    data: [
        {
            p: '自行车',
        },
        {
            p: '人身装备',
        },
        {
            p: '人身装备',
        }
    ],
    render() {
        var _this = this;
        var html = '';
        for (var i = 0; i < _this.data.length; i++) {
            html += `<span class="${i === 0 ? 'actives' : ''}">${_this.data[i].p}</span>`
        }
        document.getElementById('div').innerHTML = html;
    }
}

var dataTop = {
    data: [
        {
            p: '分类',
        }
    ],
    render() {
        let html = '';
        for (let i = 0; i < this.data.length; i++) {
            html += `<span class="iconfont icon-angle-left"></span>
                <span>${this.data[i].p}</span>
                <span class="iconfont icon-fangdajing"></span>`
        }
        document.getElementById('divSpan').style.display = 'flex';
        document.getElementById('divSpan').style.justifyContent = 'space-between';
        document.getElementById('divSpan').innerHTML = html;
    }
}



// 减
var lefts = document.getElementsByClassName('lefts');

// 中间值
var middleVals = document.getElementsByClassName('middleVals');

// 加
var rights = document.getElementsByClassName('rights');

// 单选
var icons = document.getElementsByClassName('icons');

// 全选上
var iconBig = document.getElementsByClassName('iconBig')[0];

// 全选下
var iconQuan = document.getElementsByClassName('icon-quan')[0];

//  总值
var zZ = document.getElementsByClassName('zZ')[0];

// 结算
var jieSuan = document.getElementsByClassName('jie-suan')[0];

// 购物车
var gouWuche = document.getElementsByClassName('gouWuche')[0];

// 分类
var fenLei = document.getElementsByClassName('fen-lei')[0];

// 大盒子
// 1
var indexContainer = document.getElementsByClassName('index-container')[0];
// 2
var indexCentent = document.getElementsByClassName('index-centent')[0];
// 3
var indexCon = document.getElementsByClassName('index-con')[0];

// 获取第三张页面的箭头
var iconThree = document.getElementsByClassName('icon-three')[0];

// 获取图片
var leftImg = document.getElementsByClassName('left-img');

var iconUp = document.getElementsByClassName(' icon-up')[0];

// 立即购买
var spanTwo = document.getElementsByClassName(' span-two')[0];
var spGoumai = document.getElementsByClassName(' sp-goumai')[0];

// 加减、单选、事件
dom();
function dom() {
    for (var i = 0; i < rights.length; i++) {
        ~function (idx) {
            var count = middleVals[idx].innerText;
            // 加
            rights[idx].onclick = function () {
                count++;
                middleVals[idx].innerText = count;
                dataOne.data[idx].p4 = count;
                jieSuan.innerText = count;
                numArr();
            }
            // 减
            lefts[idx].onclick = function () {
                count--;
                count < 1 ? count = 1 : count - 1;
                middleVals[idx].innerText = count;
                jieSuan.innerText = count;
                numArr();
            }
            // 单选
            icons[idx].onclick = function () {
                icons[idx].classList.toggle('active');
                dataOne.data[idx].checked = icons[idx].classList.contains("active");
                var bool = dataOne.data.every(function (item) {
                    return item.checked;
                })
                bool ? iconBig.classList.add('active') : iconBig.classList.remove('active');
                bool ? iconQuan.classList.add('active') : iconQuan.classList.remove('active');
                jieSuan.innerText = count;
                numArr();
            }
            // 图片
            leftImg[idx].onclick = function () {
                indexContainer.style.transform = 'translateX(-100%)';
                indexCentent.style.transform = 'translateX(0%)';
            }
        }(i)
    }
}

// 全选按钮
iconBig.addEventListener('click', function () {
    iconBig.classList.toggle('active');
    iconQuan.classList.toggle('active');
    // 给所有的按钮添加或删除类
    for (var i = 0; i < dataOne.data.length; i++) {
        iconBig.classList.contains('active') ? icons[i].classList.add('active') : icons[i].classList.remove('active');
        dataOne.data[i].checked = icons[i].classList.contains('active');
    }
    numArr();
})

// 全选按钮
iconQuan.addEventListener('click', function () {
    iconQuan.classList.toggle('active');
    iconBig.classList.toggle('active');
    // 给所有的按钮添加或删除类
    for (var i = 0; i < dataOne.data.length; i++) {
        iconQuan.classList.contains('active') ? icons[i].classList.add('active') : icons[i].classList.remove('active');
        dataOne.data[i].checked = icons[i].classList.contains('active');
    }
    numArr();
})


// 求值
function numArr() {
    var nums = 0;
    dataOne.data.forEach(function (item) {
        if (item.checked) {
            nums += +(Math.floor(item.p3) * item.p4);
        }
    })
    zZ.innerText = nums;
}
numArr();


// 点击分类切换页面
fenLei.onclick = function () {
    indexContainer.style.transform = 'translateX(-100%)';
    indexCon.style.transform = 'translateX(0%)';
}
// 点击箭头切换页面
iconThree.onclick = function () {
    indexContainer.style.transform = 'translateX(0%)';
    indexCon.style.transform = 'translateX(100%)';
}
//点击购物车切换页面
iconUp.onclick = function () {
    indexCentent.style.transform = 'translateY(-100%)';
    indexContainer.style.transform = 'translateX(0%)';
}
// 第三个页面的点击切换事件
var div = this.document.getElementById('div');
div.addEventListener('click', function (e) {
    if (e.target.nodeName === 'SPAN') {
        for (var i = 0; i < div.children.length; i++) {
            div.children[i].classList.remove('actives');
        }
        e.target.classList.add('actives');
        bscThree.scrollToElement(e.target, 500, true, true);
    }
})
