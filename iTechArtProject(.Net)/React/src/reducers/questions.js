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
    case 'CLEAR_QUESTIONS':{
        return []
    }
    case 'ADD_QUESTIONS':{
        return [
            ...state,...action.questions
        ];
    }
    case 'ADD_QUESTION':{
        return [
            ...state, action.question
        ];
    }
    case 'REMOVE_QUESTION':{
        return state.filter(element =>  element.id != action.id);
    }
    case 'CHANGE_NAME_QUESTION':{
        return state.map(element => {
            if(element.id==action.idQuestion) 
                element.name=action.name;
            return element
        })
    }
    case 'CHANGE_ISREADY_QUESTION':{
        return state.map(element => {
            if(element.id==action.idQuestion) 
                element.isReady=action.isReady;
            return element
        })
    }
    default:
      return state
    }
}

export default questions;