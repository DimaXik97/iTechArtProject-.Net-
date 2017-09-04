/*export const initQuestions =(questions)=>({
    type: 'INIT_QUESTIONS',
    questions: questions
})
export const getQuestions =(idCategory,idTest)=>({
    type: 'GET_QUESTIONS',
    idCategory: idCategory,
    idTest: idTest
})
export const addQuestion = ()=>({
    type: 'ADD_QUESTION',
    id: ++idNew,
    isReady: false,
    typeQuestions: 2,
    question: `New ${idNew} Questions!`,
    answers: [ "Первый ответ", "Второй ответ", "Третий ответ","Четвертый ответ"] 
})
export const deleteQuestion= (id)=>({
    type: 'DELETE_QUESTION',
    id: id
})
export const changeQuestion= (id)=>({
    type: 'CHANGE_QUESTION',
    id: id
})*/
export const getAllQuestions=(idCategory, idTest)=>({//+
    type: "GET_QUESTIONS",
    idCategory,
    idTest
})
export const postQuestion=(idCategory, idTest, data)=>({//+
    type: "POST_QUESTION",
    idCategory,
    idTest,
    data
})
export const putQuestion=(idCategory,idTest,id, data)=>({
    type: "PUT_QUESTION",
    idCategory,
    idTest,
    idQuestion: id,
    data: data
})
export const deleteQuestion=(idCategory,idTest,id)=>({//+
    type: "DELETE_QUESTION",
    idCategory,
    idTest,
    idQuestion: id
})

export const addQuestions =(questions)=>({
    type: 'ADD_QUESTIONS',
    questions: questions
})
export const addQuestion =(question)=>({
    type: 'ADD_QUESTION',
    question: question
})
export const clearQuestions= ()=>({//+
    type: 'CLEAR_QUESTIONS'
})
export const removeQuestion= (id)=>({//+
    type: 'REMOVE_QUESTION',
    id:id
})
export const changeIsReadyQuestion= (id, isReady)=>({//+
    type: 'CHANGE_ISREADY_QUESTION',
    idQuestion: id,
    isReady: isReady
})
export const changeNameQuestion= (id, name)=>({//+
    type: 'CHANGE_NAME_QUESTION',
    idQuestion: id,
    name: name
})
