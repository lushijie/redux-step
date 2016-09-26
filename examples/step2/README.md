#Redux Lesson2 —— bindActionCreator

###Action
    Action只是描述事情了（可以传递线索数据），但是state更新操作最终需要reducer完成

###bindActionCreator
    //bindActionCreators 实际完成的功能
    let bindActionCreators = (actionCreator, dispatch) => {
        return (...args) => dispatch(actionCreator(...args))
    }
