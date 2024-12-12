setTimeout(() => {
    process()
}, 5000);


const flow = [
        // {
        //     type: 'input',
        //     name: 'SFYZZFJ',
        //     index: 1,
        //     value: '否',
        //     info: '纸质附件'
        // },
    // {
    //     type: 'input',
    //     name: 'xtywbillVO.fdzs',
    //     index: 1,
    //     value: '0',
    //     info: '纸张数'
    // },
    {
        type: 'click',
        path: '/html/body/div[1]/div/div[2]/div[2]/div/div/div/div[2]/div/form/div[2]/div[2]/div/div[2]/div/div/div/div/input'
    },
    {
        type: 'click',
        path: '/html/body/div[13]/div[1]/div[1]/ul/li[1]',
        info: 'li=1是增值税专用发票, 其他按照输入更改'
    },
    {
        type: 'click',
        path: '/html/body/div[1]/div/div[2]/div[2]/div/div/div/div[2]/div/form/div[2]/div[1]/div/div[2]/div/div/div/button',
    },
    {
        type: 'search',
        path: '/html/body/div[14]/div/div[2]/div/div[2]/div[1]/div[2]/div[3]/div/input',
        value: '三峡新能源',
        maybe: true
    },
    {
        type: 'click',
        path: '/html/body/div[14]/div/div[2]/div/div[2]/div[1]/div[2]/div[4]/button',
        maybe: true,
    },
    {
        type: 'click',
        path: '/html/body/div[14]/div/div[3]/div/button[2]',
        maybe: true,
    },
    {
        type: 'input',
        name: 'SM',
        index: 1,
        value: '这是一份说明'
    },
    {
        type: 'click',
        path: '/html/body/div[1]/div/div[2]/div[2]/div/div/div/div[2]/div/form/div[3]/div/div/div[2]/div/div/textarea'，
        info: '说明需要进行更新'
    },
    {
        "": ""
    },
    {
        type: 'click',
        path: '/html/body/div[1]/div/div[2]/div[2]/div/div/div/div[2]/div/form/div[9]/div[1]/div/div[2]/div/div/div/button',
        info: '购方单位名称'
    },
    {
        type: 'search',
        path: '/html/body/div[14]/div/div[2]/div/div[2]/div[1]/div[2]/div[3]/div/input',
        value: '三门峡城市发展集团有限公司',
        maybe: true
    },
    {
        type: 'click',
        path: '/html/body/div[14]/div/div[2]/div/div[2]/div[1]/div[2]/div[4]/button',
        maybe: true
    },
    {
        type: 'click',
        path: '/html/body/div[14]/div/div[3]/div/button[2]',
        maybe: true
    },
    {
        type: 'input',
        name: 'GFDZ',
        index: 1,
        value: '这是地址'
    },
    {
        type: 'input',
        name: 'GFLXDH',
        index: 1,
        value: '12378989065'
    },
    {
        type: 'click',
        path: '/html/body/div[1]/div/div[2]/div[2]/div/div/div/div[2]/div/form/div[10]/div[1]/div/div[2]/div/div/div/input',
        info: '账号'
    },
    {
        type: 'click',
        path: '/html/body/div[14]/div[1]/div[1]/ul/li',
        info: '选择账号'
    }
];

let mutable_window = '14';

const opration = {
    input(item, iframe_document) {
        const { name, index, value, info } = item;
        const element = iframe_document.getElementsByName(name)[index];

        console.log(iframe_document.getElementsByName(name));
        console.log(element);

        element.value = value;

        console.info(`[running] info: ${info}`);
    },

    click(item, iframe_document) {
        let { path, info } = item;
        let element = iframe_document.evaluate(
            path, iframe_document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
        ).singleNodeValue;

        while (!element && Number(mutable_window) < 20) {
            path = String(path).replace(mutable_window, Number(mutable_window) + 1);
            element = iframe_document.evaluate(
                path, iframe_document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
            ).singleNodeValue;

            mutable_window = (Number(mutable_window) + 1).toString();
        }

        if (!element) {
            throw new Error("never find a usable element.");
        }

        element.click();

        mutable_window = '14';

        if (info)
            console.log(info);
    },

    search(item, iframe_document) {
        let { path, value } = item;
        let element = iframe_document.evaluate(
            path, iframe_document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
        ).singleNodeValue;

        while (!element && Number(mutable_window) < 20) {
            path = String(path).replace(mutable_window, Number(mutable_window) + 1);
            element = iframe_document.evaluate(
                path, iframe_document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
            ).singleNodeValue;

            mutable_window = (Number(mutable_window) + 1).toString();
        }

        if (!element) {
            throw new Error("never find a usable element.");
        }

        mutable_window = '14';

        element.value = value;
    }
}

function run(step, iframe_document) {
    const item = flow[step];
    if (item) {
        try {
            opration[item.type](item, iframe_document);
            setTimeout(() => {
                run(step + 1, iframe_document);
            }, 2000);
        } catch (error) {
            console.error(item);
            throw error;
        }
    }
}

function process() {
    const iframe = document.getElementById('yjplFrame');
    const iframe_document = iframe.contentDocument;

    console.log(iframe_document);

    run(0, iframe_document);

    console.log('The Infomation Form End.')
}
