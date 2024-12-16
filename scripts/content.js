const _flow = [
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
        type: 'refresh',
        path: '/html/body/div[1]/div/div[2]/div[2]/div/div/div/div[2]/div/form/div[3]/div/div/div[2]/div/div/textarea',
        info: '说明需要进行更新'
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
    },
];

const __flow = [
    /** table */
    {
        type: 'click',
        path: '/html/body/div[1]/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div[1]/div/div[1]/div/div/div/div/button[1]',
        info: '新增表格'
    },
    {
        type: 'click',
        path: '/html/body/div[3]/table/tbody/tr[3]/td[2]',
        info: '通过清除按钮锁定表格'
    },
    {
        type: 'click',
        path: '/html/body/div[1]/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div/div/table/tbody/tr/td[1]/div[1]/span/table[1]/tbody/tr[3]/td[4]/div/div[2]/div/div/div/button',
        info: 'search crate'
    },
    {
        type: 'search',
        path: '/html/body/div[14]/div/div[2]/div/div/div[1]/div[2]/div[3]/div/input',
        value: '备用'
    },
    {
        type: 'click',
        path: '/html/body/div[14]/div/div[2]/div/div/div[1]/div[2]/div[4]/button',
        info: '搜索'
    },
    {
        type: 'click',
        path: '/html/body/div[14]/div/div[3]/div/button[2]',
        info: '确定'
    },
    {
        type: 'click',
        path: '/html/body/div[1]/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div/div/table/tbody/tr/td[1]/div[1]/span/table[1]/tbody/tr[3]/td[14]/div/div',
        info: '价格总计'
    },
    {
        type: 'search',
        path: '/html/body/div[1]/div/div[2]/div[3]/div/div/div/div[2]/div/div[2]/div[1]/div/div[2]/div/div/table/tbody/tr/td[1]/div[1]/span/table[1]/tbody/tr[3]/td[14]/div/div[2]/table/tbody/tr/td[2]/textarea',
        value: '10000'
    }
]

const flow = [..._flow, ...__flow];

let table_window = '14';

const opration = {
    input(item, iframe_document) {
        const { name, index, value, info } = item;
        const element = iframe_document.getElementsByName(name)[index];

        console.log(iframe_document.getElementsByName(name));
        console.log(element);

        element.value = value;

        element.focus();
        element.dispatchEvent(new Event('change'));
        console.info(`[running] info: ${info}`);
    },

    click(item, iframe_document) {
        let { path, info } = item;
        let element = iframe_document.evaluate(
            path, iframe_document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
        ).singleNodeValue;

        while (!element && Number(mutable_window) < 26) {
            path = String(path).replace(mutable_window, Number(mutable_window) + 1);
            element = iframe_document.evaluate(
                path, iframe_document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
            ).singleNodeValue;

            mutable_window = (Number(mutable_window) + 1).toString();
        }

        if (!element) {
            throw new Error("never find a usable element.");
        }

        console.log(element);
        element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        mutable_window = '14';

        if (info)
            console.log(info);
    },

    search(item, iframe_document) {
        let { path, value } = item;
        let element = iframe_document.evaluate(
            path, iframe_document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
        ).singleNodeValue;

        while (!element && Number(mutable_window) < 26) {
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
        element.focus();
        element.dispatchEvent(new Event('input'));
    },

    refresh(item, iframe_document) {
        const { path, info } = item;

        let element = iframe_document.evaluate(
            path, iframe_document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
        ).singleNodeValue;

        element.focus();
        element.dispatchEvent(new Event('change'));

        console.log(info);
    }
}

function run(step, iframe_document) {
    const item = flow[step];
    if (item) {
        try {
            opration[item.type](item, iframe_document);
            setTimeout(() => {
                run(step + 1, iframe_document);
            }, 3000);
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
