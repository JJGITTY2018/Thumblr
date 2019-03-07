import {
  connect
} from "react-redux";
import {
  withRouter
} from "react-router"
import {
  checkUserAuthStatus,
  fetchSearchQuery
} from "../../redux/actions/actions.js"
// import SearchResults from "../search.js"
import NavBar from "../../header/navi.js"
// import App from "../home/home.js"


const mapStateToProps = (state, ownProps) => {
  return {
    NaviStore: state.SearchState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    function_checkStatus: () =>
      dispatch(checkUserAuthStatus()),
    function_searchTags: (search) => dispatch(fetchSearchQuery(search))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))