export const getTests =(id)=>({
    type: 'GET_TESTS',
    idCategory: id
})
export const postTests =(id)=>({
    type: 'POST_TESTS',
    idCategory: id
})
export const putTests =(id, idTest)=>({
    type: 'PUT_TESTS',
    idCategory: id,
    idTest: idTest
})
export const deleteTests =(idCategory, idTest)=>({
    type: 'DELETE_TESTS',
    idCategory: idCategory,
    idTest: idTest
})

export const addTests =(tests)=>({
    type: 'ADD_TESTS',
    tests: tests
})
export const addTest =(test)=>({
    type: 'ADD_TEST',
    test: test
})
export const changeOrderFieldTest=(field)=>({
    type: "CHANGE_ORDER_FIELD_TEST",
    field: field
})
export const changeNameTest= (id, name)=>({
    type: 'CHANGE_NAME_TEST',
    id: id,
    name: name
})
export const changeIsReadyTest= (id, isReady)=>({
    type: 'CHANGE_ISREADY_TEST',
    id: id,
    isReady: isReady
})
export const removeTest= (id)=>({
    type: 'REMOVE_TEST',
    id: id
})
export const clearTests= ()=>({//+
    type: 'CLEAR_TESTS'
})
