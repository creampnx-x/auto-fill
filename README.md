# auto-fill

this project is for a browser plugin.

## 功能

+ 自动化操作界面
  + 点击
  + 填写表单
  + 刷新表单状态
+ 弹出界面及内容脚本交互


## 传递信息

> ⚠ 不可实现：在扩展脚本中启动一个事件监听器，然后在内容脚本中设置询问器。每当内容脚本要执行操作前，先通过询问器查询是否可以进行操作。

实现方法：当弹出更改时，记录到content的localstorage中，以作记录并刷新页面。

## 暂停更新

此项目基础功能已经完成，等待数据完备后继续更新。