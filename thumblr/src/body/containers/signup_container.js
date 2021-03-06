import {connect } from "react-redux";
import {withRouter} from "react-router"
import {login_user,checkUserAuthStatus} from "../../redux/actions/actions.js"
import SignUp from "../sign_up.js"


const mapStateToProps = (state, ownProps) => {
  return {
    store: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    function_login_user: (username, password) => dispatch(login_user(username,password)),
  function_checkStatus:() => 
    dispatch(checkUserAuthStatus())
}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))