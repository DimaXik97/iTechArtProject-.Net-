export const getAnswers= (stringParam)=>({
    type: 'GET_ANSWERS',
    stringParam: stringParam
})
export const addAnswers= (answers)=>({
    type: 'ADD_ANSWERS',
    answers: answers
})
export const clearAnswers= ()=>({
    type: 'CLEAR_ANSWERS'
})