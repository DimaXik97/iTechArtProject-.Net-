import { connect } from 'react-redux'

import About from '../components/About/index.jsx';
import {getNews, getVacancies} from '../actions';

const mapStateToProps = state => ({
    vacancies: state.vacancies,
    news: state.news
})
const mapDispatchToProps = dispatch => ({
  init:()=>{
    dispatch(getNews());
    dispatch(getVacancies());
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)