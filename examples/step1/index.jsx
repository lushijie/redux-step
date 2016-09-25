import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import Counter from './components/Counter'
import counterReducer from './reducers/counter-index'

//action，把数据从应用传到store的有效载荷，是store数据的唯一来源（分辨执行动作与数据的预处理）
//reducer,action只是描述了动作，reducer负责具体的更新state
//store ，一个应用只有一个store

//为什么有createSore而不是直接创建一个空对象呢？
//如果直接创建空对象，不断投入 reducer(state, action)不断更新状态，react 的shouldComponet(nextProps, nextState)
//如果不返回新的state只是修改旧的state,很难做到回退、撤销、状态跟踪，判读数据同一要深度遍历，非常耗费性能。

//createStore(reducer, initialState),createStorinstalle返回一个对象包含 getState(),subscribe()与dispatch()方法
//多数情况下不会直接使用subscribe这个底层API，一般使用React或者其他库绑定

const store = createStore(counterReducer, 10)
console.log('初始state', store.getState());

function render() {
  ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    document.getElementById('root')
  )
}

//method1
store.subscribe(render)
render()



//method 2
// store.subscribe(() => {
//  console.log('current state', store.getState());
// 	document.body.innerText = store.getState();
// })

//store.dispatch({type: 'INCREMENT'})

