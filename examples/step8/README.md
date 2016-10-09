#Redux Lesson8 —— 容器组件（Smart/Container Components）和展示组件（Dumb/Presentational Components）

### 容器组件与展示组件
    明智的做法是只在最顶层组件（如路由操作）里使用 Redux，其余内部组件仅仅是展示性的，所有数据都通过 props 传入

                        容器组件                  展示组件
    Location            最顶层，路由处理           中间和子组件
    Aware of Redux      是                       否
    读取数据             从 Redux 获取 state       从 props 获取数据
    修改数据             向 Redux 派发 actions     从 props 调用回调函数

    在复杂的应用中，也有可能会有多个容器组件。虽然你也可以嵌套使用容器组件，但应该尽可能的使用传递 props 的形式

