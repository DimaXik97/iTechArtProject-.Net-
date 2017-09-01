export const getVacancies =()=>({
    type: 'GET_VACANCIES'
})
export const clearVacancies =()=>({
    type: 'CLEAR_VACANCIES'
})
export const addVacancies =(vacancies)=>({
    type: 'ADD_VACANCIES',
    vacancies: vacancies
})