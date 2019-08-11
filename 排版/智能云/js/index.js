window.onload = function () {
    let swiperContainer = new Swiper('.swiper-container', {
        loop: true,
        click: true,
        autoplay: {
            delay:1000,
            stopOnLastSlide:false,
            disableOnInteraction:false
        },

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })


    let sectionBscroll = new BScroll('.section-bscroll', {
        scrollY: true,
        click: true,
    });

    let navBs = new BScroll('.nav', {
        scrollX: true,
        click: true
    })


    let nav = document.getElementById('nav');

    nav.addEventListener('click', function (e) {
        let ev = e || window.event;
        if (ev.target.nodeName === 'SPAN') {
            for (var i = 0; i < nav.children.length; i++) {
                nav.children[i].classList.remove('active');
            }
            ev.target.classList.add('active');
        }
    })


    let containerArr = {
        data: [
            {
                span: '精选活动'
            },
            {
                span: '新手专享'
            },
            {
                span: '新品发布'
            },
            {
                span: '单品特惠'
            },
            {
                span: '线下活动'
            },
            {
                span: '新品推荐'
            },
            {
                span: '线下活动'
            },
        ],
        render() {
            let html = '';
            for (var i = 0; i < this.data.length; i++) {
                html +=
                    `
                    <span class="${i === 0 ? 'active' : ''}">${this.data[i].span}</span>
                `
            }
            nav.innerHTML = html;
        }
    }

    let content = {
        dataArr: [
            {
                p1: '年中Hi购季',
                p2: 'HOT',
                p3: '云产品',
                p4: '1折',
                p5: '抄低价',
                p6: '拼团在享',
                p7: '折上折',
                p8: '云服务器89元/年起',
                p9: '9点开抢'
            },
            {
                p1: '年中Hi购季',
                p2: 'HOT',
                p3: '云产品',
                p4: '1折',
                p5: '抄低价',
                p6: '拼团在享',
                p7: '折上折',
                p8: '云服务器89元/年起',
                p9: '9点开抢'
            },
            {
                p1: '年中Hi购季',
                p2: 'HOT',
                p3: '云产品',
                p4: '1折',
                p5: '抄低价',
                p6: '拼团在享',
                p7: '折上折',
                p8: '云服务器89元/年起',
                p9: '9点开抢'
            },
        ],
        result() {
            let html = '';
            for (var i = 0; i < this.dataArr.length; i++) {
                html += `
                <div class="section-big">
                <div class="div-one">
                    <p>${this.dataArr[i].p1}</p>
                    <span>${this.dataArr[i].p2}</span>
                </div>
                <div class="div-two">
                    <p>${this.dataArr[i].p3}<small>${this.dataArr[i].p4}</small> ${this.dataArr[i].p5} </p>
                    <p>${this.dataArr[i].p6}<small>${this.dataArr[i].p7}</small> </p>
                </div>
                <div class="div-stree">
                    <p>${this.dataArr[i].p8}</p>
                    <span>${this.dataArr[i].p9}</span>
                </div>
            </div>
                `
            }
            document.getElementsByClassName('section-content')[0].innerHTML = html;
        }
    }

    containerArr.render();
    content.result();

}