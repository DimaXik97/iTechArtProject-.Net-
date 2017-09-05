import { put, takeEvery,call } from 'redux-saga/effects';
import { clearResults, addResults} from '../actions';
import { getData } from './../helpers';
const url="/api/answer";

export function* get(action){
yield put(clearResults());
    let answer = yield call (getData, `${url}/${action.id}`);
    if(answer)
        yield put(addResults(answer));
}

export default function* rootSaga() {
    yield takeEvery('GET_RESULTS', get)
}