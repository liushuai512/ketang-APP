import React from 'react'
import {render} from 'react-dom'
import App from "./containers/index";
import {Provider} from 'react-redux';
import {configureStore} from "./store/userInfo"
import './assets/index.less';

//可以在configureStore传递初始状态
let store = configureStore({
    userInfo:{cityName:'上海'}
})
render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root')
)
