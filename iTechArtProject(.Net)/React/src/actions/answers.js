export const getAnswers= (param,id)=>({
    type: 'GET_ANSWERS',
    param: param,
    id: id
})
export const initAnswers= (answers)=>({
    type: 'INIT_ANSWERS',
    answers: answers
})