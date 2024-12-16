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
]


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
            click(item, doc ?? document);
        }, durantion);
    }
}


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        const r = Boolean(request['result']);
        console.log('result', request);

        if (r) {
            setTimeout(() => {
                _process()
            }, 5000);
        }

        sendResponse({ example: '1' });

        return true;
    }
);
