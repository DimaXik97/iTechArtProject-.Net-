export const getResults= (id)=>({
    type: 'GET_RESULTS',
    id: id
})
export const addResults =(results)=>({
    type: 'ADD_RESULTS',
    results: results
})
export const clearResults =()=>({
    type: 'CLEAR_RESULT'
})