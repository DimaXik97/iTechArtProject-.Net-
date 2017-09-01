const initState={
    users: [],
    field: 'name',
    orderFields:[
        {
            value: "name",
            text: "По имени"
        }
    ]
}
const users = (state = initState,action) => {
    switch(action.type){
        case 'ADD_USERS':{
            return Object.assign({}, state, {
                users: [...users,...action.users]});
        }
        case 'CLEAR_USERS':{
        return Object.assign({}, state, {
            users: []});
        }
        case 'CHANGE_ORDER_FIELD_CATEGORIES':{
            return Object.assign({}, state, {
                field: action.field});
        }
    }
    return state;
}

export default users;