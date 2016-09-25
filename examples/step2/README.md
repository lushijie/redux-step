#Redux Lesson2

###bindActionCreator
    //bindActionCreators 实际完成的功能
    let bindActionCreators = (actionCreator, dispatch) => {
        return (...args) => dispatch(actionCreator(...args))
    }
