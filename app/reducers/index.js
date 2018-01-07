//合并所有的reducer 到处去，让store使用

import {combineReducers} from 'redux';

import {userInfo} from "./userInfo";


export default combineReducers({
    userInfo
})