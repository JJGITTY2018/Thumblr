import {
  connect
} from "react-redux";
import {
  withRouter
} from "react-router"
import {
  fetchSearchQuery
} from "../../redux/actions/actions.js"
import SearchResults from "../search.js"


const mapStateToProps = (state, ownProps) => {
  return {
    Store: state.SearchState
}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    function_searchTags: (search) => dispatch(fetchSearchQuery(search))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults))