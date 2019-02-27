import React, { Component } from 'react';
import { connect } from "react-redux"
import { fetchSearchQuery_Reducer } from "../redux/actions/actions.js"

// import axios from "axios"

class SearchResults extends Component { 
  
//https://cors-anywhere.herokuapp.com/
  // axioSearch = () =>{
  //   axios
  //   .get("http://localhost:1337/posts/tag/apple").then(res => {
  //     // console.log(res)
  //   }).catch(err =>{
  //     // console.log(err)
  //   })
  // }
  
///create LI for the axios for search results
  elMapSearchResult = () =>{

  }

  componentDidMount() {
    // this.props.fetchSearch()
    // console.log(this.props)
  }


  render(){
    return (
      <h1> HELLO SEARCHES </h1>
    )
  }

}


export default SearchResults
