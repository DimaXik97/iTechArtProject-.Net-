import { connect } from 'react-redux'
import {sort} from '../helpers'
import {getUsers,changeOrderFieldUsers} from '../actions';

import Users from '../components/Users/index.jsx';
const mapDispatchToProps = dispatch => ({
    init:()=>{
        dispatch(getUsers())
    },
    sort:(order)=>{
        dispatch(changeOrder(order));
    },
    changeOrderField:(field)=>{
        dispatch(changeOrderFieldUser(field));
    },
})

const mapStateToProps = state => ({
    users: sort(state.users.users, {order: state.app.order, field: state.users.field}),
    order: state.app.order,
    orderFields: state.users.orderFields,
    field: state.users.field
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)