#Redux Lesson1 —— createStore

> **Redux 核心概念**

    1. 整个应用只有一个可信的Store数据源.
    2. State只能通过Action来更改.
    3. Reducer必须为纯函数，每次更改总返回一个新的State.

> **Redux 三个基本原则**

    1. 整个应用只有一个可信的Store数据源.
    2. State只能通过Action来更改.
    3. Reducer必须为纯函数，每次更改总返回一个新的State.

> **Redux数据流动**

    store.dispatch(action) -> reducer(state, action) -> store.getState()

### createStore(reducer, [initialState])
    > 使用createSore而不是直接创建一个空对象，是因为如果react 的shouldComponet(nextProps, nextState)如果不返回新的state只是修改旧的state,很难做到回退、撤销、状态跟踪，深度遍历非常耗费性能。

    > createStore(reducer, initialState),createStore返回一个对象包含 getState(),subscribe()与dispatch()方法
    多数情况下不会直接使用subscribe这个底层API，一般使用React或者其他库绑定
