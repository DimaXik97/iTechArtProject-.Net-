const initState= {
    tests:[],
    field: 'date',
    orderFields:[
        {
            value: "date",
            text:"По дате"},
        {
            value: "name",
            text:"По названию"
        }
    ]
}
const tests = (state =initState, action) => {
    switch (action.type) {
    case 'ADD_TESTS':{
        return Object.assign({}, state, {
            tests: [...state.tests, ...action.tests]});
    }
    case "SORT_TESTS":{
        return Object.assign({}, state, {
            flag: action.flag});
    }
    case 'CHANGE_ORDER_FIELD_TEST':{
        return Object.assign({}, state, {
            field: action.field});
    }
    case 'ADD_TEST':{
        return Object.assign({}, state, {
            tests: [
                ...state.tests,
                action.test
            ]
        }); 
    }
    case 'CLEAR_TESTS':{
        return Object.assign({}, state, {
            tests: []
        }); 
    }
    case 'REMOVE_TEST':{
        return Object.assign({}, state, {
            tests: state.tests.filter(element => element.id !== action.id)
        }); 
    }
    case 'CHANGE_ISREADY_TEST':{
        return Object.assign({}, state, {
            tests: state.tests.map(element => {
                if(element.id==action.id) 
                    element.isReady=action.isReady;
                return element
            })
        });
    }
    case 'CHANGE_NAME_TEST':{
        return Object.assign({}, state, {
            tests: state.tests.map(element => {
                if(element.id==action.id) 
                    element.name=action.name;
                return element
            })
        });
    }
    default:
      return state
    }
}
export default tests;