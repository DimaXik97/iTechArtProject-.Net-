export const getResult= (id)=>({
    type: 'GET_RESULT',
    id: id
})
export const initResult =(result)=>({
    type: 'INIT_RESULT',
    result: result
})