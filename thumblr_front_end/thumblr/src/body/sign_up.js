import React, { Component } from 'react';


export default class Login extends Component {

  render(){
    return (
      <div className = "container">
      <div className = "login_container"> 
      <form className = "login"> 
      <h3> Email </h3>
      <input type = "text" placeholder = "Email"/>
      <h3> Username </h3>
      <input type = "text" placeholder = "Username"/>
      <h3> Password </h3>
      <input type = "text" placeholder = "Password"/>
     <br></br>
      <input type = "submit" placeholder = "Submit" />
      </form>
      </div>
      </div>
    )
  }
}