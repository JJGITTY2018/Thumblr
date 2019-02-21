import React, {Component} from "react"
import { NavLink } from "react-router-dom"

class NavBar extends Component{

render(){
  return(
<div className= "NavBar">
<div className = "Logo" ><NavLink to= "/home" ><img src="https://img.icons8.com/windows/100/000000/facebook-like.png" height = "50" alt ="logo"/> Thumblr </NavLink></div>


<form className = "SearchBar"><input type = "search" autoComplete ="on" onSubmit = {console.log("e")} placeholder = "Search" /></form>

<div className = "Menu">
<ul>
    <li></li>
    <li><NavLink to= "/home" ><img src="https://img.icons8.com/material-two-tone/30/000000/contacts.png" alt = "home" />Home</NavLink></li>
    <li><NavLink to= "/explore" ><img src="https://img.icons8.com/material-sharp/30/000000/compass.png" alt = "exp"/>Explore</NavLink></li>
    <li><NavLink to= "/login" ><img src="https://img.icons8.com/material-outlined/30/000000/gender-neutral-user.png" alt = "human"/>Login</NavLink></li>
    <li><NavLink to= "/sign_up" ><img src="https://img.icons8.com/windows/30/000000/add-user-male.png" alt = "sign up"/>Sign Up</NavLink></li>
    <li><NavLink to= "/post" ><img src="https://img.icons8.com/material/30/000000/create.png" alt = "post" />Post</NavLink></li>
    </ul>
    </div>
</div>
  )
}

}

export default NavBar