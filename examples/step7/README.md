#Redux Lesson6 —— devTools

### Redux-devTools
    实时的监控Redux的状态树的Store,用createDevTools()创建的DevTools组件有个特殊的静态方法instrument(),它返回一个store的增强器,在开发中你需要在compose中使用。注意：DevTools.instrument()要放在applyMiddleware后，因为你的applyMiddleware可以存在异步行为，为了确保所有的actions显示在store中，所以要放在后面

### Redux-devtools-log-monitor
    默认monitor可以展示state 和 action 的一系列信息，而且我们还可以在monitor改变它们的值

### redux-devtools-dock-monitor
    这monitor支持键盘的快捷键来轻松的改变tree view在浏览器中的展示位置，比如不断的按‘ctrl + q’组合键可以让展示工具停靠在浏览器的上下左右不同的位置，按“ctrl+h”组合键则可以控制展示工具在浏览器的显示或隐藏的状态


