import { connect } from "react-redux";
import { withRouter} from "react-router"
import {login_user,checkUserAuthStatus,logOutUser} from "../../redux/actions/actions.js"
import Logout from "../logout.js"
// import App  from "../home/home.js"

const mapStateToProps = (state, ownProps) => {
  return {
    store: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    function_logout_user: () => dispatch(logOutUser()),
    function_login_user: (username, password) => dispatch(login_user(username, password)),
    function_checkStatus: () =>
      dispatch(checkUserAuthStatus())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout))