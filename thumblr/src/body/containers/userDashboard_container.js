import {
  connect
} from "react-redux";
import {
  withRouter
} from "react-router"
import {
  checkUserAuthStatus, getFollowerList, fetchDashboardPosts
} from "../../redux/actions/actions.js"
// import SearchResults from "../search.js"
import userDashboard from "../../body/dashboard"
// import App from "../home/home.js"



const mapStateToProps = (state, ownProps) => {
  return {
    Store: state,
    UserID: state.LoginState.current_userID
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    function_checkStatus: () =>
      dispatch(checkUserAuthStatus()),
    function_getFollowers: () =>
    dispatch(getFollowerList())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(userDashboard))