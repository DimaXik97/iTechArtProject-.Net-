import { put, takeEvery,call } from 'redux-saga/effects';
import {getAllCatigories,addCategories,clearCategories, removeCategory, addCategoty, сhangeIsReadyCategory, сhangeNameCategory} from '../actions';
import { getData , postData, putData, deleteData } from './../helpers';
let url="/api/Test";

export function* getAll() {
    yield put(clearCategories());
    const categories=yield call(getData, url);
    if(categories){
        yield put(addCategories(categories));
    }
}
export function* del(action) {
    const isDelete=yield call(deleteData,`${url}/${action.id}`);
    if(isDelete){
        yield put(removeCategory(action.id));
    }
}
export function* add() {
    const newCategory=yield call(postData, url, {});
    if(newCategory)
        yield put(addCategoty(newCategory));

}
export function* change(action) {
    const isUpdate=yield call(putData, `${url}/${action.id}`, action.data);
    if(isUpdate){
        if(action.data.isReady!=undefined){
            yield put(сhangeIsReadyCategory(action.id, action.data.isReady));
        }
        else if(action.data.name){
            yield put(сhangeNameCategory(action.id, action.data.name));
        }
    }
}

export default function* rootSaga() {
    yield takeEvery('GET_ALL_CATEGORIES', getAll),
    yield takeEvery('DELETE_CATEGORY', del),
    yield takeEvery('POST_CATEGORY', add),
    yield takeEvery('PUT_CATEGORY', change)
}