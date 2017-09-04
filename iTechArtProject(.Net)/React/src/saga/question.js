import { put, takeEvery,call } from 'redux-saga/effects';
import {addQuestions,addQuestion, clearQuestions, removeQuestion,changeNameQuestion,changeIsReadyQuestion} from '../actions';
import { getData, postData, putData, deleteData } from './../helpers';
const url="/api/test/";

export function* getAll(action) {
    yield put(clearQuestions());
    const questions=yield call(getData, `${url}${action.idCategory}/${action.idTest}`);
    if(questions){
        yield put(addQuestions(questions));
    }
}
export function* add(action) {
    const newQuestion=yield call(postData, `${url}${action.idCategory}/${action.idTest}`, action.data);
    if(newQuestion)
        yield put(addQuestion(newQuestion));

}
export function* del(action) {
    const isDelete=yield call(deleteData,`${url}${action.idCategory}/${action.idTest}/${action.idQuestion}`);
    if(isDelete){
        yield put(removeQuestion(action.idQuestion));
    }
}
export function* change(action) {
    const isUpdate=yield call(putData, `${url}${action.idCategory}/${action.idTest}/${action.idQuestion}`, action.data);
    if(isUpdate){
        if(action.data.isReady!=undefined){
            yield put(changeIsReadyQuestion(action.idQuestion, action.data.isReady));
        }
        else if(action.data.name){
            yield put(changeNameQuestion(action.idQuestion, action.data.name));
        }
    }
}

export default function* rootSaga() {
    yield takeEvery('GET_QUESTIONS', getAll),
    yield takeEvery('POST_QUESTION', add),
    yield takeEvery('DELETE_QUESTION', del),
    yield takeEvery('PUT_QUESTION', change)
}