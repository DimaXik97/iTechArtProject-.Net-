export const getTests =(id)=>({
    type: 'GET_TESTS',
    idCategory: id
})
export const postTest =(id)=>({
    type: 'POST_TESTS',
    idCategory: id
})
export const putTest =(id, idTest, data)=>({
    type: 'PUT_TESTS',
    idCategory: id,
    idTest: idTest,
    data: data
})
export const deleteTest =(idCategory, idTest)=>({
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
