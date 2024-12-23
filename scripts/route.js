const routes = [
    {
        iframe: 'ifr',
        path: '/html/body/div[2]/ul/li[3]/a',
        type: 'click',
        info: '财务共享平台'
    },
    {
        path: '/html/body/div[1]/div/div[1]/div[2]/div[1]/a[2]',
        type: 'click',
        info: '应用中心'
    },
    {
        type: 'click',
        path: '/html/body/div[1]/div/div[2]/div/div[1]/div/div/div/div[5]/span/span',
        info: "税务管理"
    },
    {
        type: 'click',
        path: '/html/body/div[1]/div/div[2]/div/div[2]/div[12]/div/div/div/div/div[1]/div/ul/li[6]/a',
        info: "报帐"
    },
    {
        path: '/html/body/div[1]/div[2]/div[1]/div/div/table/tbody/tr/td[1]/div[1]/span/table[1]/tbody/tr[3]/td[5]/div/div/span',
        type: 'click',
        info: "申请单"
    }
];

function click(item, iframe_document) {
    let { path, info } = item;
    let element = iframe_document.evaluate(
        path, iframe_document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
    ).singleNodeValue;

    console.log(element);

    if (!element) {
        return false;
    }

    element.click();

    if (info)
        console.log(info);
}


let durantion = 2000;
function _process() {
    for (let item of routes) {
        let { iframe } = item;

        let doc = document;

        if (iframe) {
            doc = document.getElementById(iframe)?.contentDocument;
        }

        durantion += 2000;
        setTimeout(() => {
            if (localStorage.getItem('result') == '1')
                click(item, doc ?? document);
        }, durantion);
    }
}

/**
 * 1. 首页轮询数据
 * 2. 如果有数据，开始流程，数据库将数据标记为执行中
 * 3. 服务端通过查看是否有数据在执行中来锁定服务
 * 4. 首页 -> 财务平台 -> 发票单进入页面 -> 财务平台关闭 -> 进入发票输入页面 -> 发票单进入页面关闭
 * 5. 进入发票输入页面：获取正在执行发票的数据
 * 6. 填写数据 -> 发送执行完成 -> 服务端开锁 -> 关闭页面
 */

function getData() {
    // 1. 获取数据，选一条未执行的
    const name = getUser();
    console.log()
    fetch(`http://127.0.0.1:8000/event_list?status=not_executed&user_info=${name}`, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(res => {
            // 2. 有数据
            if (res.basic_info) {
                const id = res.basic_info.id ?? '123'
                // 3. 标记数据为执行中
                fetch(`http://127.0.0.1:8000/status?id=${id}&status=executing`, {
                    method: 'PUT'
                }).then(res => {
                    if (res.ok) {
                        // 4. 开始执行
                        _process();
                    }
                })
            } else { // 5. 没有数据，继续获取
                setTimeout(() => {
                    getData();
                }, 30000);
            }
        })
}

function getUser() {
    const raw_name = document.querySelector('.nowUser').innerHTML
    const name = raw_name.slice(3);

    return name;
}

function start() {
    // 1. 如果是首页，则获取未执行的数据
    if (document.location.host == 'yrz.powerchina.cn') {
        getData();
    } else {
        // 2. 其他页面执行
        _process();
        setTimeout(() => {
            process();
        }, 5000)

        // 3. 关闭当前页面
        setTimeout(() => {
            window.close();
        }, 100000);
    }
}

start();
