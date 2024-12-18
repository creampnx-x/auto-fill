const button = document.getElementById('switch');
function refresh() {
    let r = localStorage.getItem('result') == '1';
    const result = document.getElementById('result');
    result.innerHTML = r ? '是' : '否';

    button.innerHTML = r ? '关闭' : '打开';

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { 'result': r }, function (response) {
            console.log(response)
        });
    });
}

function changeState() {
    const value = localStorage.getItem('result') == '1';

    localStorage.setItem('result', value ? '0' : '1');

    refresh();
}

refresh();

button.addEventListener('click', () => {
    changeState();
});