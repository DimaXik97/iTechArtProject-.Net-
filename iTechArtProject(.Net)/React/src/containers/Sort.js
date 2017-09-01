import { connect } from 'react-redux'
import {changeOrder} from '../actions';

import Sort from '../components/Sort/index.jsx';
const mapDispatchToProps = dispatch => ({
    sort:(order)=>{
        dispatch(changeOrder(order));
    }
})

const mapStateToProps = state => ({
    order: state.app.order
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort)