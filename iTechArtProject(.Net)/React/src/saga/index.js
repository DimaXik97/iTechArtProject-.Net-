import { fork } from 'redux-saga/effects';
import category from './category';
import authentication from './authentication';
import users from './users'
import about from './about'
import test from './test'
import question from './question';
import answer from './answer';
// let getData=(url)=>{
// return axios.get(url)
//     .then(res => {
//         return res.data;
//     })
//     .catch(err => { console.log(err);return [] });
// }
// let putData=(url,data)=>{
//     return axios.put(url, data)
//         .then(res => res.data)
//         .catch(err => { console.log(err); return false });
//     }
// let getCookie=(name)=>{
//     var value = "; " + document.cookie;
//     var parts = value.split("; " + name + "=");
//     if (parts.length == 2) return parts.pop().split(";").shift();
// }
// export function* categories() {
//     console.log("test");
//     let url='/api/test';
//     const data=yield call(getData, url);
//     yield put(initCategories(data))
// }
// export function* tests(action){
//     let url='/api/test/'+action.idCategory;
//     const data=yield call(getData, url);
//     yield put(initTest(data))
// }
// export function* questions(action){
//     let url='/api/test/'+action.idCategory+'/'+action.idTest;
//     const data=yield call(getData, url);
//     yield put(initQuestions(data))
// }
// export function* users(){
//     let url='/api/user';
//     const data=yield call(getData, url);
//     yield put(initUsers(data))
// }
// export function* user(action){
//     let url='/api/user/'+(action.idUser);
//     const data=yield call(getData, url);
//     yield put(initSateUser(data))
// }
// export function* userStatistics(action){
//      let url='/api/statistics/'+action.idUser;
//     const data=yield call(getData, url);
//     yield put(initStatistics(data))
// }
// export function* answers(action){
//     let url='/api/answer?'+`${action.param}=${action.id}`;
//     const data=[]/*yield call(getData, url)*/;
//     yield put(initAnswers(data))
// }
// export function* news(action){
//     let url='/api/news';
//     const data=yield call(getData, url);
//     yield put(initNews(data))
// }
// export function* vacancies(action){
//     let url='/api/vacancies';
//     const data = yield call(getData, url);
//     yield put(initVacancies(data))
// }

// export function* result(action){
//     let url='/api/answer/'+action.id;
//     const data=yield call(getData, url);
//     yield put(initResult(data))
// }
// let postData = (url, data) => {
//     return axios.post(url, data)
//         .then(res => res.data)
//         .catch(err => { console.log(err); return [] });
// }
// export function* addCategoty() {
//     let url = '/api/test/';
//     const data = yield call(postData, url, {});
//     console.log(data);
// }
// export function* login(action){
//     let url = '/api/user/';
//     const data = yield call(putData, url,{email: action.email,password: action.password });
//     yield put(initUser(getCookie("userId"),getCookie("role"), getCookie("username")));
// }
// export function* registration(action) {
//     let url = '/api/user/';
//     const data = yield call(postData, url,{email: action.email,password: action.password, name: action.name, surname: action.surname });
//     yield put(initUser(getCookie("userId"),getCookie("role"), getCookie("username")));
// }

export default function* rootSaga() {
  yield fork(category),
  yield fork(authentication),
  yield fork(about),
  yield fork(users),
  yield fork(test),
  yield fork(question),
  yield fork(answer)
}