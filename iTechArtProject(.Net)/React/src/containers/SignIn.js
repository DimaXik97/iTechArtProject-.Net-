import { connect } from 'react-redux'

import SignIn from '../components/Authentication/signIn.jsx';
import {login} from '../actions';
const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
  login:(email, pass)=>{
    console.log("mapDispatchToProps login")
    dispatch(login(email, pass));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)