export const getNews =()=>({
    type: 'GET_NEWS'
})
export const clearNews =()=>({
    type: 'CLEAR_NEWS'
})
export const addNews =(news)=>({
    type: 'ADD_NEWS',
    news: news
})