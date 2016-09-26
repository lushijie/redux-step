# Redux Lesson4 —— 异步Action
### Redux 同步数据流
    view -> actionCreator -> action -> reducer -> newState -> component -> view

### Redux 异步数据流
    view -> asyncActionCreator -> action -> reducer -> newState -> component -> view

### Middleware
    Redux中的middleware只是针对于dispatch方法做了middleware处理，也就是说只接受一个action对象
    const createStoreWithMiddleware = applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )(createStore);
    let store = createStoreWithMiddleware(rootReducer, initialState);

### Redux-thunk
    thunk的本质是封装表达式的函数，可以延迟执行表达式（alternative redux-saga）
