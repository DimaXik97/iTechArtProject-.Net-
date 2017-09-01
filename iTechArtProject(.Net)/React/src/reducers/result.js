const result = (state = [], action) => {
    switch(action.type){
        case 'INIT_RESULT':{
            return action.result
        }
    }
    return state;
}

export default result;