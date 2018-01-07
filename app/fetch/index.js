import 'whatwg-fetch';
import 'es6-promise';

// get 方法接收的路径
export function get(url) {
    return fetch(url,{
        Accept:'application/json'
    });
}