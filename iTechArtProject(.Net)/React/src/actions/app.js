export const changeOrder= (order)=>({
    type: 'CHANGE_ORDER',
    order: order
})
export const initUser= (id, role, name)=>({
    type: 'INIT_USER',
    id: id,
    role: role,
    name: name
})