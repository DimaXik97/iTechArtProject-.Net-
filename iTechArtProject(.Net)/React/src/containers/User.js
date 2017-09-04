import { connect } from 'react-redux'
import {getUser, getStatistics,getAnswers} from '../actions';

import User from '../components/Profile/index.jsx';
const mapDispatchToProps = dispatch => ({
    init:(id, stringParam)=>{
        dispatch(getUser(id));
        dispatch(getStatistics(id));
        dispatch(getAnswers(stringParam))
    }
})

const mapStateToProps = state => ({
    userId: state.app.user.id,
    user: state.user.user,
    statistics: state.user.statistics,
    questions: state.answers
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)