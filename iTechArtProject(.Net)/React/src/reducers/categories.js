const initState={
    categories:[],
    field: 'date',
    orderFields:[
        {
            value: "date",
            text:"По дате"},
        {
            value: "name",
            text:"По имени"
        }]
}
const categories = (state = initState, action) => {
    switch (action.type) {
    case 'ADD_CATEGORIES':{
        return Object.assign({}, state, {
            categories:[
                ...state.categories,
                ...action.categories
            ]
        });
    }
    case 'CLEAR_CATEGORIES':{
        return Object.assign({}, state, {
            categories: []
        });
    }
    case 'CHANGE_ORDER_FIELD_CATEGORIES':{
        return Object.assign({}, state, {
            field: action.field});
    }
    case 'REMOVE_CATEGORY':{
        return Object.assign({}, state, {
            categories: state.categories.filter(element => element.id !== action.id)
        }); 
    }
    case 'CHANGE_NAME_CATEGORY':{
        return Object.assign({}, state, {
            categories: state.categories.map(element => {
                if(element.id==action.id) 
                    element.name=action.name;
                return element
            })
        }); 
    }
    case 'CHANGE_ISREADY_CATEGORY':{
       return Object.assign({}, state, {
            categories: state.categories.map(element => {
                if(element.id==action.id) 
                    element.isReady=action.isReady;
                return element
            })
        });
    }
    case 'ADD_CATEGORY':{
        return Object.assign({}, state, {
                categories:[
                ...state.categories,
                action.category
            ]
        }); 
    }
    default:
      return state
    }
}

export default categories;