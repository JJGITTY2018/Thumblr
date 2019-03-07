import React, { Component } from "react"
import { NavLink } from "react-router-dom"
// import Axios from "axios";
// import { withRouter } from "react-router"
// import Auth from "../Auth/Auth"
// import Signup from "../body/sign_up";

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: ""
    }
  }

  handleChange =  (e) => {
    e.preventDefault()
     this.setState({
      [e.target.name]: e.target.value
    })
    // console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    this.props.function_searchTags(this.state.tag)
     
    setTimeout(() => {
    this.props.history.push(`/search/tag/${this.state.tag}`)
    }, 100)
    
    setTimeout(() => {this.setState({
      tag: ""
    })},500)
  }
  // debugger
  // Axios
  // .get(`/tag/${this.state.search}`).then(res=>{
  //   console.log(res)
  // })

  componentDidMount() {
    // this.isUserLogin()
  }
  
  render() {
    return (<>
      <div className="NavBar" >
        <div className="Logo" > < NavLink to="/home"> <img src="https://img.icons8.com/windows/350/000000/facebook-like.png"
          height="50" alt="logo" /> Thumblr </NavLink> </div>

        <form className="SearchBar"
          onSubmit={
            this.handleSubmit
          } >
          <input name="tag"
            type="search"
            value={
              this.state.tag
            }
            placeholder="Search"
            onChange={
              this.handleChange
            }
          />
        </form>

        <div className="Menu" >
          <ul >
            <li > </li>
            <li>
              <NavLink to="/home" > <img src="https://img.icons8.com/material-two-tone/30/000000/contacts.png"
                alt="home" /> Home </NavLink>
            </li>

            <li > <NavLink to="/explore" >
              <img src="https://img.icons8.com/material-sharp/30/000000/compass.png"
                alt="exp" /> Explore </NavLink>
            </li>

            <li> <NavLink to="/login">
              <img src="https://img.icons8.com/material-outlined/30/000000/gender-neutral-user.png"
                alt="human" /> Login </NavLink>
            </li>


            <li> <NavLink to="/sign_up" > <img src="https://img.icons8.com/windows/30/000000/add-user-male.png"
              alt="sign up" /> Sign Up </NavLink>
            </li>

            <li> <NavLink to="/post" > <img src="https://img.icons8.com/material/30/000000/create.png"
              alt="post" /> Post </NavLink> </li>

            <li > <NavLink to="/logout" > <img src="https://img.icons8.com/material/30/000000/door-hanger.png" alt="logout" /> Logout </NavLink> </li>
          </ul> </div> </div> </>
    )
  }

}