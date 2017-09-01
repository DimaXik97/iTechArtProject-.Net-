export const login= (email, pass)=>({
    type: 'LOGIN',
    email: email, 
    password: pass
})
export const logOut= ()=>({
    type: 'LOGOUT'
})
export const registration= (email, pass, name, surname )=>({
    type: 'REGISTRATION',
    email: email, 
    password: pass,
    name: name,
    surname: surname
})

