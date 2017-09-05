import { connect } from 'react-redux'
import {getAllQuestions, postQuestion, deleteQuestion, putQuestion, getAnswers} from '../actions';

import Questions from '../components/Questions/index.jsx';

const mapStateToProps = state => ({
    isAdmin: state.app.user.role=="admin",
    questions: state.questions,
    usersAnswers: state.answers
})
const mapDispatchToProps = dispatch => ({
    init:(idCategory, idTest, stringParam, isAdmin)=>{
        dispatch(getAllQuestions(idCategory,idTest));
        dispatch(getAnswers(stringParam, isAdmin))
    },
    addQuestion: (idCategory, idTest, typeQuestion)=>{
        dispatch(postQuestion(idCategory, idTest, {typeQuestion}))
    },
    deleteQuestion:(idCategory,idTest,id)=>{
        dispatch(deleteQuestion(idCategory,idTest,id))
    },
    changeIsReadyQuestion: (idCategory,idTest,id, data)=>{
        dispatch(putQuestion(idCategory,idTest,id,{isReady: data}));
    },
    changeNameQuestion: (idCategory,idTest,id, data)=>{
        dispatch(putQuestion(idCategory,idTest,id, {name: data}));
    }
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions)