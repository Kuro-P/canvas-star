# canvas-star
canvas 绘制星星动图效果（慕课网练习）
### 整体思路
创建canvas元素 -> 绘制背景图 -> 画一颗星星 -> 画一堆星星 -> 星星闪烁 -> 星星移动 -> 边界判定
### 动画部分
1. 星星闪烁：绘制序列帧
2. 自己调节序列帧在 `requestAmimationFrame()` 回调函数中的循环时长
3. 多个星星的绘制：构造函数（类）的应用
### 预览
![](https://github.com/Kuro-P/canvasStar/blob/master/images/preview.gif "效果图") 
预览地址：https://kuro-p.github.io/canvasStar/
