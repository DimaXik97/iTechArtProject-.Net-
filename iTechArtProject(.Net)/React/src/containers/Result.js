import { connect } from 'react-redux'
import {getResults} from '../actions';

import Result from '../components/Result/index.jsx';
const mapDispatchToProps = dispatch => ({
    init:(id)=>{
        dispatch(getResults(id));
    }
})

const mapStateToProps = state => ({
    result: state.result
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)