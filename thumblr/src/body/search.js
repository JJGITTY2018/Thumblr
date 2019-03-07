import React, { Component } from 'react';
import Masonry from "react-masonry-component"

import '../css/post.css'
// import { connect } from "react-redux"
// import { fetchSearchQuery_Reducer } from "../redux/actions/actions.js"

// import axios from "axios"


// const masonryOptions = {
//     transitionDuration: 5
// };

// const style = {
//     backgroundColor: 'tomato'
// };


class SearchResults extends Component {
  state = {
    data: []
  }

elMap = (array) =>{
  if(array){
return array.map((el,i=0) => {
  i = i+1
  return <div className = "post" key = {i} value = {el.id}> 
  <div className = "postTitle">{el.text_title}</div>
  <h1> </h1>
  <div className="postBody">
  {el.text_body}
  <img src = {el.media_url} width = "99%" alt ="" />
  </div>
  </div>
})
  }
}

 componentDidMount(){ 
   let search = this.props.history.location.pathname.slice(12)
   this.props.function_searchTags(search)

  }

  render(){
    console.log(this.props)
    return (
      <>
      <h1> Search: </h1>
      <h1> {this.props.Store.searchTerm} </h1>
      <Masonry
                className= "postContainer"
                onClick={this.handleClick}
            >
           {this.elMap(this.props.Store.searchResult)}
            </Masonry>
            </>
    )
  }

}


export default SearchResults



  //  <h1> {this.props.Store.SearchState.searchTerm}</h1>
  //     {console.log(this.props.Store.SearchState.searchResult)}


      //   <>

      // <div className = "postContainer">
      //   {this.elMap(this.props.Store.searchResult)}
      //   </div>
      //   </div>
      // </>

