/*const initState=[
    {
        id:1,
        type:1,
        isReady: true,
        question:"C# Переменные 1 Вопрос?",
        answers:[ "Первый ответ", "Второй ответ", "Третий ответ","Четвертый ответ"]
    },
    {
        id:2,
        type:2,
        isReady: true,
        question:"C# Переменные 2 Вопрос?",
        answers:[ "Первый ответ", "Второй ответ", "Третий ответ","Четвертый ответ"]
    },
    {
        id:3,
        type:1,
        isReady: true,
        question:"C# Переменные 3 Вопрос?",
        answers:[ "Первый ответ", "Второй ответ", "Третий ответ","Четвертый ответ"]
    },
    {
        id: 4,
        type: 3,
        isReady: true,
        question: "C# Переменные 4 Вопрос?",
        answers: null
    }
]*/
const questions = (state = [], action) => {
    switch (action.type) {
    case 'INIT_QUESTIONS':{
        return action.questions
    }
    case 'ADD_QUESTION':{
        return [
            ...state,
            {
                id: action.id,
                type: action.typeQuestions,
                isReady: action.isReady,
                question: action.question,
                answers: action.answers
            }
        ];
    }
    case "DELETE_QUESTION":{
        return state.filter(element => element.id !== action.id);
    }
    case "CHANGE_QUESTION":{
        return state.map(element => {if(element.id==action.id) {element.isReady=(!element.isReady)}; return element})
    }
    default:
      return state
    }
}

export default questions;