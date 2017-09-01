import { put, takeEvery,call } from 'redux-saga/effects';
import { addVacancies, clearVacancies, addNews, clearNews} from '../actions';
import { getData } from './../helpers';
var urlVacancies="/api/vacancies";
var urlNews = "/api/news"
/*export function* logout() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++){
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
    }
    yield put(initUser(undefined,undefined,undefined));
    yield call (history.push,"/signIn"); 
}*/
export function* getNews(){
    yield put(clearNews());
    let news = yield call (getData, urlNews);
    console.log(news);
    if(news);
        yield put(addNews(news));  
}
export function* getVacancies(){
    yield put(clearVacancies());
    let vacancies = yield call (getData, urlVacancies);
    console.log(vacancies);
    if(vacancies);
        yield put(addVacancies(vacancies)); 
}

export default function* rootSaga() {
    yield takeEvery('GET_NEWS', getNews),
    yield takeEvery('GET_VACANCIES', getVacancies)
}