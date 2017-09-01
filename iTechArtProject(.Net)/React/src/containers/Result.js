import { connect } from 'react-redux'
import {getResult} from '../actions';

import Result from '../components/Result/index.jsx';
const mapDispatchToProps = dispatch => ({
    init:(id)=>{
        dispatch(getResult(id));
    }
})

const mapStateToProps = state => ({
    result: state.result
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)