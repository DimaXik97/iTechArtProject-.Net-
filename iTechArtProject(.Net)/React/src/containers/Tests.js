import { connect } from 'react-redux'
import {sort} from '../helpers'
import {getTests,postTest,deleteTest,changeOrderFieldTest,changeOrder, putTest} from '../actions';

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
    dispatch(postTest(id))
  },
  sort:(order)=>{
    dispatch(changeOrder(order));
  },
  changeOrderField:(field)=>{
    dispatch(changeOrderFieldTest(field));
  },
  deleteTest: (idCategory, idTest)=>{
    dispatch(deleteTest(idCategory, idTest))
  },
  changeIsReadyTest:(idCategory, idTest, data)=>{
    dispatch(putTest(idCategory, idTest, {isReady:data}))
  },
  changeNameTest:(idCategory, idTest, data)=>
  {
    dispatch(putTest(idCategory, idTest, {name: data}))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tests)