import { connect } from 'react-redux'
import {sort} from '../helpers'
import {getTests,postTests,deleteTests,changeOrderFieldTest,changeOrder} from '../actions';

import Tests from '../components/Tests/index.jsx';

const mapStateToProps = state => ({
    tests: sort(state.tests.tests, {order: state.app.order, field: state.tests.field}),
    order: state.app.order,
    orderFields: state.tests.orderFields,
    field: state.tests.field
})
const mapDispatchToProps = dispatch => ({
  init:(id)=>{
    dispatch(getTests(id))
  },
  addTest: (id)=>{
    dispatch(postTests(id))
  },
  sort:(order)=>{
    dispatch(changeOrder(order));
  },
  changeOrderField:(field)=>{
    dispatch(changeOrderFieldTest(field));
  },
  deleteTest: (idCategory, idTest)=>{
    dispatch(deleteTests(idCategory, idTest))
  },
  changeTest:(id)=>
  {
    dispatch(changeOrderFieldTest(id))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tests)