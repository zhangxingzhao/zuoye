window.addEventListener('load', function () {
    new BScroll('.section', {
        click: true,
        scrollY: true,
    })

    let dataArr = {
        data: [
            {
                p1: '待支付',
                p2: '待发货',
                p3: '待收货',
                p4: '待评价',
            }
        ],
        render() {
            let html = '';
            for (let i = 0; i < this.data.length; i++) {
                html +=
                    ` <dl>
                        <dt class="iconfont icon-gouwuche"></dt>
                        <dd>待支付</dd>
                        </dl>
                        <dl>
                            <dt class="iconfont icon-gouwuche"></dt>
                            <dd>待发货</dd>
                        </dl>
                        <dl>
                            <dt class="iconfont icon-gouwuche"></dt>
                            <dd>待收货</dd>
                        </dl>
                        <dl>
                            <dt class="iconfont icon-pingfen"></dt>
                            <dd>待评价</dd>
                </dl>`
            }
            document.getElementsByClassName('section-header-bottom')[0].innerHTML = html;
        }
    }
    dataArr.render();
})