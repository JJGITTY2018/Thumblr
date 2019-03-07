import React, { Component } from "react"
// import { NavLink } from "react-router-dom"
// import Axios from "axios";
// import { withRouter } from "react-router"
import Auth from "../Auth/Auth"
import "../css/dashboard.css"
// import Signup from "../body/sign_up";

export default class userDashboard extends Component {

  handleChange =  (e) => {
    e.preventDefault()
     this.setState({
      [e.target.name]: e.target.value
    })
		}
		
		elMap = (array) =>{
			array = this.props.Store.dashboardState.follower_posts
			return (array.map((el,i) =>{
				return (

			<div className = "dashboard_posts_container"> 
    	<div className = "author_logo" > 
						<img src = {el.author_profile_img} alt = "" />
						</div>

			<div className = "post_contents">
    
    	<div className = "post_media">
      <img src = {el.media_url} alt = "" />
						</div>
					
					<div className = "post_header"> 
    		<h1> {el.text_title}</h1>
					</div>

					<div className = "post_body"> 
						<h2> {el.text_body}</h2>
					</div>

    <div className = "post_footer"> 
					<p>Post By: {el.author_username}</p> 
					<p>Tags: {el.tags}</p> 
					<p>Published Date: {el.pusblish_date}</p> 
					<p>Like by: {el.likes_by_user_username}</p> 
					</div>

    </div>
    
   </div>

			)

			}))
			
		}

  componentDidMount() {
    this.props.function_getFollowers()
  }
  
  render() {
    
    console.log(this.props.Store.dashboardState.follower_posts)
    return (
    <>
    
		<div className = "dashBoard">
		{this.elMap(this.props.Store.dashboardState.follower_posts)}
		</div>


    </>
    )
  }

}