#Redux Lesson6 —— Connect

###mapStateToProps
    当它被connect调用的时候会为它传递参数state和props
    mapStateToProps需要负责的事情就是 返回需要传递给子组件的State,connect会拿到返回的数据写入到react组件中,
    因为state是全局State，里面包含整个项目的所有State，只需要拿到组件对应的State即可

###mapDispathToProps
    当它被connect调用的时候会为它传递参数dispatch和props，通过mapDispatchToProps这个方法，把actionCreator变成方法赋值到props，每当调用这个方法，就会更新state

###mergeProps
    props 的merge操作，可以不传递
