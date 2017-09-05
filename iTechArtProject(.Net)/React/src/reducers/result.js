const result = (state = [], action) => {
    switch(action.type){
        case 'ADD_RESULTS':{
            console.log(action);
            return [...state,...action.results]
        }
        case 'CLEAR_RESULT':{
            return []
        }
    }
    return state;
}

export default result;