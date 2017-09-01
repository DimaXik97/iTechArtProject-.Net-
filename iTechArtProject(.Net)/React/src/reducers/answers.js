/*const initState=[
    {
        id: "1",
        test: "JSP",
        categories: "Java",
        user: "User 1",
        date: "10.12.2016"
    },
    {
        id: "2",
        test: "Servlet",
        categories: "Java",
        user: "User 1",
        date: "11.12.2016"
    },
    {
        id: "3",
        test: "Циклы",
        categories: "C#",
        user: "User 1",
        date: "12.12.2016"
    },
    {
        id: "4",
        test: "Асинхронность",
        categories: "JS",
        user: "User 1",
        date: "13.12.2016"
    }
]*/
const answer = (state = [], action) => {
    switch(action.type){
        case "INIT_ANSWERS":{
            return action.answers
        }
    }
    return state;
}

export default answer;