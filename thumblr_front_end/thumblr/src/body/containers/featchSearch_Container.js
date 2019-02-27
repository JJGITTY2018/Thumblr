import {connect } from "react-redux";

import {fetchSearchQuery} from "./../../redux/actions/actions.js"

import SearchResults from "../search.js"


const maptStateToProps = (state, ownProps) => {
  return {
    SearchState: state.search
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSearch: () => dispatch(fetchSearchQuery())
  }
}

export default connect(maptStateToProps, mapDispatchToProps)(SearchResults)