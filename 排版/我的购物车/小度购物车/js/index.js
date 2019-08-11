var data = [{
    name: "小度在家1s智能手机助手 百度旗下人工智能硬件",
    img: "../image/2.png",
    nowprices: "369",
    ordersprices: "399",
    num: "1",
    checked: false,
    color: "黑色",
},
{
    name: "小度畅听会员（年卡）海量无损音乐、热门专栏小说，超值免费畅听",
    img: "../image/1.png",
    nowprices: "99",
    ordersprices: "",
    num: "1",
    checked: true,
    color: "年卡，小度畅听VIP会员",
},
{
    name: "小度智能音箱大金刚 百度旗下人工智能助手",
    img: "../image/4.png",
    nowprices: "199",
    ordersprices: "",
    num: "1",
    checked: false,
    color: "黑色",
},
{
    name: "小度人工智能音箱1S Wifi/蓝牙音箱、万能红外遥控器、语音通话",
    img: "../image/5.jpg",
    nowprices: "159",
    ordersprices: "",
    num: "3",
    checked: true,
    color: "黑色",
}];


var lis = document.getElementById("lis");
var html = ""
for (var i in data) {
    html = `
    <div class="module1">
            <span class="iconfont icon-dui ${data[i].checked ? "check" : ''}" id = "btn" ></span>
            <img src="${data[i].img}" alt="">
            <div class="right">
                <p>${data[i].name}</p>
                <span>${data[i].color}</span>
                <span id = "now_price">￥${data[i].nowprices}</span>
                <del>￥${data[i].ordersprices}</del>
                <button class="min_btn">-</button>
                <input type="text" value="${data[i].num}" class="text_value">
                <button class="add_btn">+</button>
            </div>
    </div>`
    lis.innerHTML += html;
}

//加加减减按钮-----------
var min_btn = document.querySelectorAll(".min_btn");
var add_btn = document.querySelectorAll(".add_btn");
var text_val = document.querySelectorAll(".text_value");
//----------------------------
//获取总价
var sum = document.querySelector(".sum>b");
//获取单价
var price = document.querySelectorAll("#now_price");
//获取选择按钮
var btn = document.querySelectorAll("#btn");
//获取全选按钮
var allbtn = document.querySelector("#allbtn");


for (let i = 0; i < add_btn.length; i++) {
    add_btn[i].addEventListener("click", function () {
        text_val[i].value++;
        data[i].num = text_val[i].value;
        allPrice()
    });

    min_btn[i].addEventListener("click", function () {
        text_val[i].value <= 1 ? text_val[i].value == 1 : text_val[i].value--;
        data[i].num = text_val[i].value;
        allPrice()
    });

    //点击单选
    btn[i].addEventListener("click", function () {
        btn[i].classList.toggle("check");
        data[i].checked = btn[i].classList.contains("check");
        var bool = data.every(function (item) {
            return item.checked;
        })
        bool ? allbtn.classList.add("check") : allbtn.classList.remove("check");
        allPrice()
    })
}

//点击全选
allbtn.addEventListener("click", function () {
    //有就删没就加
    allbtn.classList.toggle("check");
    for (var i = 0; i < data.length; i++) {
        //有就true，没就false
        //如果全选是true，每一个单选就加一个类名 check 反之就删除
        allbtn.classList.contains("check") ? btn[i].classList.add("check") : btn[i].classList.remove("check");
        // 把当前单选的check的状态是true还是false赋给原数据。
        data[i].checked = btn[i].classList.contains("check");
    }
    allPrice()
})

//封装总价格
function allPrice() {
    var allprice = 0;
    for (var i in data) {
        if (data[i].checked) {
            allprice += data[i].nowprices * data[i].num;
        }
    }
    sum.innerHTML = allprice;
}
allPrice()


