import { connect } from 'react-redux'
import {initUser} from '../actions';

import App from '../components/App/index.jsx';
const mapDispatchToProps = dispatch => ({
    
})

const mapStateToProps = state => ({
    isAdmin: state.app.user.role=="admin",
    isAuth: Boolean(state.app.user.name)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)