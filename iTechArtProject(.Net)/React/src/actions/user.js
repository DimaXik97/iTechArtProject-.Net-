export const initUsers =(users)=>({
    type: 'INIT_USERS',
    users: users
})
export const getUser= (id)=>({
    type: 'GET_USER',
    idUser: id
})
export const initSateUser= (user)=>({
    type: 'INIT_STATE_USER',
    user: user
})
export const getStatistics= (id)=>({
    type: 'GET_STATISTICS',
    idUser: id
})
export const initStatistics= (statistics)=>({
    type: 'INIT_STATISTICS',
    statistics: statistics
})