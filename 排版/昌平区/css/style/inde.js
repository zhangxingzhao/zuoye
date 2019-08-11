var listOne = [
    {
        "subtitle": "樱桃小番茄500*1盒",
        "subtitles": "限时秒杀",
        "vip": "3.9",
        "noVip": "￥7.9",
        "left": "-",
        "val": "1",
        "right": "+",
        "checked": false,
    },
    {
        "subtitle": "樱桃小番茄500*1盒",
        "subtitles": "限时秒杀",
        "vip": "3.9",
        "noVip": "￥7.9",
        "left": "-",
        "val": "1",
        "right": "+",
        "checked": false,
    },
    {
        "subtitle": "樱桃小番茄500*1盒",
        "subtitles": "限时秒杀",
        "vip": "3.9",
        "noVip": "￥7.9",
        "left": "-",
        "val": "1",   "noVip": "￥7.9",
        "right": "+",
        "checked": false,
    },
]
var listTwo = [
    {
        "vip": "优享会员",
        "time": "8/月",
        "dredge": "立即开通"
    },
]

var listStree = [
    {
        "a": "商品总价",
        "b": "0",
        "c": "劵",
        "d": "商品卷",
        "e": "0张商品卷",
        "f": "￥",
        "g": "红包",
        "h": "0个可用红包",
        "i": "商品实付",
        "j": "￥0",
        "k": "配送费",
        "l": "￥0",
        "m": "合计0",
    }
]
var listFore = [
    {   
        "img":"./image/秒杀.png",
        "subtitle": "1元疯抢",
        "subtitles": "每日良品纯水柔肤湿巾",
        "c": "擦后不干燥 超水润",
        "val": "1",
        "vip": "3",
        "checked": false,
        
    },
    {
        "img":"./image/秒杀.png",
        "subtitle": "1元疯抢",
        "subtitles": "每日良品纯水柔肤湿巾",
        "c": "擦后不干燥 超水润",
        "val": "1",
        "vip": "3",
        "checked": false,

    },
    {
        "img":"./image/秒杀.png",
        "subtitle": "1元疯抢",
        "subtitles": "每日良品纯水柔肤湿巾",
        "c": "擦后不干燥 超水润",
        "val": "1",
        "vip": "3",
        "checked": false,
    },
    {
        "img":"./image/秒杀.png",
        "subtitle": "1元疯抢",
        "subtitles": "每日良品纯水柔肤湿巾",
        "c": "擦后不干燥 超水润",
        "val": "1",
        "vip": "3",
        "checked": false,
    },

]


localStorage.setItem('data',JSON.stringify(listOne));

var a = JSON.parse(localStorage.getItem('data'))
console.log(a)