#Redux Lesson4 —— 异步Action
###Redux 同步数据流
    view -> actionCreator -> action -> reducer -> newState -> component -> view

###Redux 异步数据流
    view -> asyncActionCreator -> action -> reducer -> newState -> component -> view

###Middleware
    function(action) {
        // 调用后面的 middleware
        next(action)
    }

###Redux-thunk
    thunk的本质是封装表达式的函数，可以延迟执行表达式
