import { connect } from 'react-redux'
import { logOut } from '../actions'

import Header from '../components/Header/index.jsx';
const mapDispatchToProps = dispatch => ({
    logOut:()=>{
        dispatch(logOut());
    }
})

const mapStateToProps = state => ({
    isAdmin: state.app.user.role=="admin",
    name: state.app.user.name
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)