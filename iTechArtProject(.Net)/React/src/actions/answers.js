export const getAnswers= (stringParam, isAdmin)=>({
    type: 'GET_ANSWERS',
    stringParam: stringParam,
    isAdmin: isAdmin
})
export const addAnswers= (answers)=>({
    type: 'ADD_ANSWERS',
    answers: answers
})
export const clearAnswers= ()=>({
    type: 'CLEAR_ANSWERS'
})