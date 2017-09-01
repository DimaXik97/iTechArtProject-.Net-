export const getUsers= ()=>({
    type: 'GET_USERS'
})
export const clearUsers= ()=>({
    type: 'CLEAR_USERS'
})
export const addUsers =(users)=>({
    type: 'ADD_USERS',
    users: users
})
export const changeOrderFieldUsers=(field)=>({
    type: "CHANGE_ORDER_FIELD_USERS",
    field: field
})