#Redux Lesson3 —— comebineReducers

###Reducer
    处理action触发store更改, (previousState = initialState, action）=> newState
    reducer 函数逻辑中不应该直接改变 state 对象并返回, 而是返回新的 state 对象，
    遇到未知的 action 时，一定要返回旧的 state

###comebineReducers
    以把多个 reducer 合并成一个 reducer
