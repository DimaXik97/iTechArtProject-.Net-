import { put, takeEvery,call } from 'redux-saga/effects';
import { clearTests, addTests, removeTest, addTest, сhangeNameTest, changeIsReadyTest} from '../actions';
import { getData, postData, putData, deleteData } from './../helpers';
const url="/api/test/";

export function* getAll(action) {
    yield put(clearTests());
    const tests=yield call(getData, url+action.idCategory);
    if(tests){
        yield put(addTests(tests));
    }
}
export function* del(action) {
    const isDelete=yield call(deleteData,`${url}${action.idCategory}/${action.idTest}`);
    if(isDelete){
        yield put(removeTest(action.idTest));
    }
}

export function* add(action) {
    const newTest=yield call(postData, url+action.idCategory, {});
    if(newTest)
        yield put(addTest(newTest));

}
export function* change(action) {
    console.log(action);
    const isUpdate=yield call(putData, `${url}${action.idCategory}/${action.idTest}`, action.data);
    if(isUpdate){
        if(action.data.isReady!=undefined){
            yield put(changeIsReadyTest(action.idTest, action.data.isReady));
        }
        else if(action.data.name){
            yield put(сhangeNameTest(action.idTest, action.data.name));
        }
    }
}

export default function* rootSaga() {
    yield takeEvery('GET_TESTS', getAll),
    yield takeEvery('DELETE_TESTS', del),
    yield takeEvery('POST_TESTS', add),
    yield takeEvery('PUT_TESTS', change)
}