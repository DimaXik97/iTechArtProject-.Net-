import { put, takeEvery,call } from 'redux-saga/effects';
import {browserHistory} from 'react-router';
import {initUser} from '../actions'
import {postData, putData, getCookie} from './../helpers'
import axios from "axios";
import history from "./../history.js"

let url = '/api/user/';

export function* login(action){
    const isLogin = yield call(putData, url, {email: action.email,password: action.password });
    if(isLogin){
        yield put(initUser(getCookie("userId"),getCookie("role"), getCookie("username")));
        yield call (history.push,"/"); 
    }    
}
export function* registration(action) {
    const newUser = yield call(postData, url,{email: action.email,password: action.password, name: action.name, surname: action.surname });
    if(newUser){
        yield put(initUser(getCookie("userId"),getCookie("role"), getCookie("username")));
        yield call (history.push,"/"); 
    }
    
}
export function* logout() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
    }
    yield put(initUser(undefined,undefined,undefined));
    yield call (history.push,"/signIn"); 
}

export default function* rootSaga() {
    yield takeEvery('LOGIN', login),
    yield takeEvery('REGISTRATION', registration),
    yield takeEvery('LOGOUT', logout)
   
}