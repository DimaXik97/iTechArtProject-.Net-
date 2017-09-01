//saga action
export const getAllCategories=()=>({//+
    type: "GET_ALL_CATEGORIES"
})
export const postCategory=()=>({//+
    type: "POST_CATEGORY",
})
export const putCategory=(id, data)=>({
    type: "PUT_CATEGORY",
    id: id,
    data: data
})
export const deleteCategory=(id)=>({//+
    type: "DELETE_CATEGORY",
    id: id
})
//reduser action
export const addCategoty= (category)=>({//+
    type: 'ADD_CATEGORY',
    category: category
})
export const addCategories=(data)=>({//+
    type: 'ADD_CATEGORIES',
    categories: data
})
export const сhangeNameCategory= (id, name)=>({
    type: 'CHANGE_NAME_CATEGORY',
    id: id,
    name, name
})
export const сhangeIsReadyCategory= (id, isReady)=>({
    type: 'CHANGE_ISREADY_CATEGORY',
    id: id,
    isReady: isReady
})
export const romoveCategoty= (id)=>({//+
    type: 'REMOVE_CATEGORY',
    id: id
})
export const clearCategories= ()=>({//+
    type: 'CLEAR_CATEGORIES'
})

export const changeOrderFieldCategory=(field)=>({ //+
    type: "CHANGE_ORDER_FIELD_CATEGORIES",
    field: field
})
