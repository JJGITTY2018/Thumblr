import {connect } from "react-redux";
import {withRouter} from "react-router"
import {login_user} from "../../redux/actions/actions.js"
import Login from "../login.js"


const maptStateToProps = (state, ownProps) => {
  return {
    Login_Store: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    function_login_user: (username, password) => dispatch(login_user(username,password)),
  }
}

export default withRouter(connect(maptStateToProps, mapDispatchToProps)(Login))