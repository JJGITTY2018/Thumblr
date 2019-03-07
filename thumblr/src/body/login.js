import React, { Component } from 'react';
// import axios from "axios"
// import Auth from "../Auth/Auth"



export default class Login extends Component {
constructor(props){
  super(props)
  this.state = {
    username: "",
    password: ""
  }
}


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onLogin = async e => {
    await e.preventDefault();
    const {
      username,
      password
    } = this.state; 

    await this.props.function_login_user(username,password)
    await console.log(this.props)
    await this.props.function_checkStatus

    
    await setTimeout(() => {
      this.props.history.push('/dashboard')
    }, 600);
  }

  render(){
    console.log(this.props.store)
    return (
      <>
      <div className = "form_container">
      <h1> Login </h1>
      <div className = "login_container"> 
      <form className = "login" onSubmit = {this.onLogin}>
      <h3> Username </h3>
      <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange} placeholder = "Username"/>
      <h3> Password </h3>
      <input type = "text" name = "password" value = {this.state.password} onChange = {this.handleChange} placeholder = "Password"/>
     <br></br>
      <input type = "submit" placeholder = "Submit" onClick = {this.onLogin}/>
      </form>
      </div>
      </div>
      </>
    )
  }
}




// onLogin = e => {
//   e.preventDefault();
//   const {
//     username,
//     password
//   } = this.state;
//   axios
//     .post("/users/login", {
//       username,
//       password

//     })
//     .then((res) => {
//       console.log(res)
//       Auth.authenticateUser(username);
//     })
//     .then(() => {
//       // console.log(this.props)
//       this.props.checkAuthenticateStatus();
//     })
//     .then(() => {
//       axios.get("users/log").then((res) => {
//         console.log(this.props)
//       })
//       // console.log(this.props)
//       // this.setState({
//       //   username: "",
//       //   password: ""
//       // })
//     }).then(
//       () => {
//         this.props.history.push('/dashboard')
//       }
//     )

// }