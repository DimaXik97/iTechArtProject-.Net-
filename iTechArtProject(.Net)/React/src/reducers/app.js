let getCookie=(name)=>{
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
const initState={
    order: true, 
    user: {id: getCookie("userId"), role: getCookie("role"), name: getCookie("username")}
}
const app = (state = initState, action) => {
    switch (action.type) {
    case 'CHANGE_ORDER':{
        return Object.assign({}, state, {
            order: action.order});
    }
    case 'INIT_USER':{
        console.log("INIT_USER!!");
        return Object.assign({}, state, {
            user: {id: action.id, role: action.role, name: action.name}});
    }
    default:
      return state
    }
}

export default app;