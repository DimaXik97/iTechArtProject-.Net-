import { put, takeEvery,call } from 'redux-saga/effects';
import { addAnswers, clearAnswers} from '../actions';
import { getData } from './../helpers';
const url="/api/answer";

export function* getAnswer(action){
    console.log(action);
    if(action.isAdmin)
    {
        yield put(clearAnswers());
        console.log(`${url}/${action.stringParam}`);
        let answer = yield call (getData, `${url}/${action.stringParam}`);
        console.log(answer);
        if(answer)
            yield put(addAnswers(answer)); 
    }
}

export default function* rootSaga() {
    yield takeEvery('GET_ANSWERS', getAnswer)
}