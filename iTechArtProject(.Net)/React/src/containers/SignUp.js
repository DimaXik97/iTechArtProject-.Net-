import { connect } from 'react-redux'

import SingUp from '../components/Authentication/signUp.jsx';
import {registration} from '../actions';

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
  registr:(email, pass, name, surname)=>{
    dispatch(registration(email, pass,name, surname));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingUp)