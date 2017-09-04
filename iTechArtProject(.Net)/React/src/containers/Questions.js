import { connect } from 'react-redux'
import {getAllQuestions,postQuestion, deleteQuestion, putQuestion} from '../actions';

import Questions from '../components/Questions/index.jsx';

const mapStateToProps = state => ({
    questions: state.questions,
    usersAnswers: state.answers
})
const mapDispatchToProps = dispatch => ({
    init:(idCategory, idTest, param)=>{
        dispatch(getAllQuestions(idCategory,idTest))
        /*dispatch(getAnswers(param, idTest))*/
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