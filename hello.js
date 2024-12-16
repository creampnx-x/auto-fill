const button = document.getElementById('switch');
function refresh() {
    console.log("cdcd")
    let r = localStorage.getItem('result') == '1';
    const result = document.getElementById('result');
    result.innerHTML = r ? '是' : '否';

    button.innerHTML = r ? '关闭' : '打开'
}

function changeState() {
    const value = localStorage.getItem('result') == '1';

    localStorage.setItem('result', value ? '0' : '1');

    refresh();
}

refresh();

button.addEventListener('click', () => {
    changeState();
})

const value = localStorage.getItem('result') == '1';
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { 'result': value }, function (response) {
        console.log(response)
    });
});
