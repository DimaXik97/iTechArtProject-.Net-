import { connect } from 'react-redux'
import {sort} from '../helpers'
import {getAllCategories,changeOrder,changeOrderFieldCategory,deleteCategory, postCategory, putCategory} from '../actions';


import Categories from '../components/Categories/index.jsx';
const mapStateToProps = state => ({
    categories: sort(state.categories.categories, {order: state.app.order, field: state.categories.field}),
    order: state.app.order,
    orderFields: state.categories.orderFields,
    field: state.categories.field
})
const mapDispatchToProps = dispatch => ({
  init:()=>{
    dispatch(getAllCategories());
  },
  sort:(order)=>{
    dispatch(changeOrder(order));
  },
  changeOrderField:(field)=>{
    dispatch(changeOrderFieldCategory(field));
  },
  addСategory: ()=>{
    dispatch(postCategory());
  },
  deleteCategory: (id)=>{
    dispatch(deleteCategory(id));
  },
  changeIsReadyCategory: (id, data)=>{
    dispatch(putCategory(id,{isReady: data}));
  },
  changeNameCategory: (id, data)=>{
    dispatch(putCategory(id, {name: data}));
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)