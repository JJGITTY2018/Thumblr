import React, { Component } from 'react';


export default class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
   
    return (
      <>
      <div className = "form_container">
       <h1> Sign Up </h1>
      <div className = "sign_up_container"> 
      <form className = "sign_up"> 
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
      </>
    )
  }
}