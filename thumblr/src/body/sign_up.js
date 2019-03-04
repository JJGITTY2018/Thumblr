import React, { Component } from 'react';
import Axios from 'axios';
// import Auth from "../Auth/Auth"



export default class SignUp extends Component {
constructor(props){
  super(props)
  this.state = {
    email:"",
    username: "",
    password: ""
  }
}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSignUp = e => {
     const {
      username,
      password,
      email
    } = this.state;
    
     e.preventDefault(); 
    Axios
    .post("/users/sign_up", {
      username: username,
      password_unsalt: password,
      email: email
    }).then(async (res)=>{
      if(res.status === 200){
       await this.props.function_login_user(username,password)
        this.setState({
          username: "Redirecting to Login",
          password: "Redirecting to Login",
          email: "Redirecting to Login"
        })
        await setTimeout(() => {
          this.props.history.push('/dashboard')
        }, 1000);

      }
      else{
        this.setState({
          username: "error",
          email: "error",
          password: "error"
        })
      }
    })

    
    //  setTimeout(() => {
    //   this.props.history.push('/dashboard')
    // }, 600);
  }

  render(){
    // console.log(this.props.store)
    return (
      <>
      <div className = "form_container">
      <h1> Sign Up </h1>
      <div className = "sign_up_container"> 
      <form className = "sign_up" onSubmit = {this.onSignUp}>
      <h3> Email </h3>
      <input type = "text" name = "email" value = {this.state.email} onChange = {this.handleChange} placeholder = "Email"/>
      <h3> Username </h3>
      <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange} placeholder = "Enter a desired username"/>
      <h3> Password </h3>
      <input type = "text" name = "password" value = {this.state.password} onChange = {this.handleChange} placeholder = "Password"/>
     <br></br>
      <input type = "submit" placeholder = "Submit" onClick = {this.onSignUp}/>
      </form>
      </div>
      </div>
      </>
    )
  }
}
