import { combineReducers } from 'redux'

import categories from './categories'
import tests from './tests'
import vacancies from './vacancies'
import news from './news'
import answers from './answers'
import questions from './questions'
import user from './user'
import users from './users'
import result from './result'
import app from './app'

const rootReducer = combineReducers({
    app,
    categories,
    tests,
    vacancies,
    news,
    answers,
    questions,
    user,
    users,
    result
})

export default rootReducer