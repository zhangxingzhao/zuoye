
/**
 * num  value值
 * unitPrice 原价
 */

var data = [
    {
        title: '小度智能音箱大金刚+小度畅听VIP会员年卡 音箱立减30元',
        src: './imgs/1.png',
        desc: '小度人工智能音箱大金刚 百度旗下人工智能助手 一个人的金属乐队，一家人的大指挥家',
        color: '黑色',
        unitPrice: 199,
        num: 1,
        checked: false,
    },
    {
        title: '小度智能音箱大金刚+小度畅听VIP会员年卡 音箱立减30元',
        src: './imgs/2.png',
        desc: '小度人工智能音箱大金刚 百度旗下人工智能助手 一个人的金属乐队，一家人的大指挥家',
        color: '黑色',
        unitPrice: 199,
        num: 1,
        checked: true,
    },
    {
        title: '小度智能音箱大金刚+小度畅听VIP会员年卡 音箱立减30元',
        src: './imgs/3.png',
        desc: '小度人工智能音箱大金刚 百度旗下人工智能助手 一个人的金属乐队，一家人的大指挥家',
        color: '黑色',
        unitPrice: 199,
        num: 1,
        checked: false,
    },
];

var content = document.querySelector('.content');

var html = '';

function initialize(data, parentnode) {
    data.forEach(function (ele, idx) {
        html += `
                    <section>
                    <dl>
                        <dd>
                            <i>买减</i>
                        </dd>
                        <dt>
                            ${ele.title}
                        </dt>
                        <dd>
                            <span>换商品</span>
                            <em class='iconfont icon-chevron-thin-right'></em>
                        </dd>
                    </dl>
                    <ul>
                        <li>
                            <i class='iconfont icon-querenwancheng checked ${ele.checked ? 'toggle-bgcolor' : 'toggle-border'}'></i>
                        </li>
                        <li>
                            <img src="${ele.src}">
                        </li>
                        <li>
                            <div class="text">
                                <h5>${ele.desc}</h5>
                                <h4${ele.color}</h4>
                                <p>
                                    <i>
                                        <span>￥</span><span>${ele.unitPrice}</span>
                                    </i>
                                    <span class='price-box'>
                                        <i class='count'>-</i><input type="text" value="${ele.num}"><i class='add'>+</i>
                                    </span>
                                </p>
                            </div>
                        </li>
                    </ul>
                    </section>`
    });
    parentnode.innerHTML = html;
}

// 渲染
initialize(data, content);


// 初始化
incident();

function incident() {
    var add = document.querySelectorAll('.add');
    var count = document.querySelectorAll('.count');
    var input = document.querySelectorAll('.price-box>input');
    var checked = document.querySelectorAll('.checked');
    var allchecked = document.querySelector('.allchecked');
    var allprices = document.querySelector('.all-price');
    allprice();
    for (var i = 0; i < checked.length; i++) {
        (function (idx) {
            checked[idx].addEventListener('click', function () {
                checked[idx].classList.toggle('toggle-bgcolor');
                checked[idx].classList.toggle('toggle-border');
                checked[idx].classList.contains('toggle-bgcolor') ? data[idx].checked = true : data[idx].checked = false;
                quanxuan();
                allprice();
            })
            add[idx].onclick = function () {
                addcount(true, idx);
                allprice();
            };
        })(i)
    }
   
    allchecked.onclick = function () {
        allchecked.classList.toggle('toggle-bgcolor');
        allchecked.classList.toggle('toggle-border');
        quanxuan2()
        allprice();
    }

    Array.from(count).forEach(function (ele, index) {
        ele.onclick = function () {
            addcount(false, index);
                allprice();
        }
    })
    function addcount(isnan, idx) {
        var value = input[idx].value;
        if (isnan) {
            value++;
        } else {
            value = value - 1 <= 1 ? 1 : value - 1;
        }
        input[idx].value = value;
        data[idx].num = value;
    }
   
    //全选
    function quanxuan() {
        var bool = data.every(function (item) {
            return item.checked
        })
        if(bool){
            allchecked.classList.add('toggle-bgcolor');
            allchecked.classList.remove('toggle-border');
        }else{
            allchecked.classList.add('toggle-border');
            allchecked.classList.remove('toggle-bgcolor');
        }
        allprice()
    }

    function quanxuan2() {
        var boor = allchecked.classList.contains('toggle-bgcolor');
        for(var i = 0; i < checked.length; i ++) {
            if(boor) {
                checked[i].classList.add('toggle-bgcolor');
                checked[i].classList.remove('toggle-border');
            }else{
                checked[i].classList.add('toggle-border');
                checked[i].classList.remove('toggle-bgcolor');
            }
            data[i].checked = boor;
        }
    }

    // 总价
    function allprice() {
        var tee = 0;

        data.forEach(function (item) {
            if(item.checked) {
                tee += item.num * item.unitPrice;
            }
        })
        allprices.innerText = tee;
    }
















}

