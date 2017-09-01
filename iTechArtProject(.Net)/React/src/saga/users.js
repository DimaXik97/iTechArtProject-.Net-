import { put, takeEvery,call } from 'redux-saga/effects';
import { addUsers,clearUsers} from '../actions';
import { getData } from './../helpers';
const url="/api/user";

export function* getUsers(){
    yield put(clearUsers());
    let users = yield call (getData, url);
    if(users);
        yield put(addUsers(users)); 
}

export default function* rootSaga() {
    yield takeEvery('GET_USERS', getUsers)
}