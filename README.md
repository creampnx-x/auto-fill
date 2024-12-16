# auto-fill

this project is for a browser plugin.

## 传递信息

在扩展脚本中启动一个事件监听器，然后在内容脚本中设置询问器。每当内容脚本要执行操作前，先通过询问器查询是否可以进行操作。

当弹出更改时，记录到content的localstorage中，以作记录