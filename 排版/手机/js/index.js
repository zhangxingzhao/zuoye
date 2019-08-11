window.addEventListener('load', function () {
    new BScroll('.bscro-left', {
        scrollY: true,
        click: true
    });
    new BScroll('.right-two', {
        scrollY: true,
        click: true
    })
    let bscroleft = document.getElementsByClassName('bscroleft')[0];

    bscroleft.addEventListener('click', function (e) {
        if (e.target.nodeName === 'SPAN') {
            for (let i = 0; i < bscroleft.children.length; i++) {
                bscroleft.children[i].classList.remove('active');
            }
            e.target.classList.add('active');
        }
    })
    let dataTop = {
        data: [
            {
                p: '分类',
            }
        ],
        render() {
            let html = '';
            for (let i = 0; i < this.data.length; i++) {
                html += `
                    <span class="iconfont icon-angle-left"></span>
                    <span>${this.data[i].p}</span>
                    <span class="iconfont icon-fangdajing"></span>
                `
            }
            document.getElementById('divSpan').style.display = 'flex';
            document.getElementById('divSpan').style.justifyContent = 'space-between';
            document.getElementById('divSpan').innerHTML = html;
        }
    }
    dataTop.render();

    let dataLeft = {
        data: [
            {
                p: '新品'
            },
            {
                p: '众筹'
            },
            {
                p: '手机'
            },
            {
                p: '电视'
            },
            {
                p: '电脑'
            },
            {
                p: '智能'
            },
            {
                p: '家用电器'
            },
            {
                p: '厨房电器'
            },
            {
                p: '穿戴酷玩'
            },
            {
                p: '家居家装'
            },
            {
                p: '电源插座'
            },
            {
                p: '出行车载'
            },
            {
                p: '耳机音箱'
            },
            {
                p: '路由器'
            },
            {
                p: '个护健康'
            },
            {
                p: '日用百货'
            },
        ],
        render() {
            let html = '';
            for (let i = 0; i < this.data.length; i++) {
                html += `
                <span class="${i === 0 ? 'active' : ''}" data-index =" ${i}">${this.data[i].p}</span>
                `
            }
            document.getElementsByClassName('bscroleft')[0].innerHTML = html;
        }
    }
    dataLeft.render();

  
})