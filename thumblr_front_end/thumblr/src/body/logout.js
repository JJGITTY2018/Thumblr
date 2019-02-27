import React, { Component } from 'react';
// import axios from "axios"
import Auth from "../Auth/Auth"


export default class Logout extends Component {

componentDidMount() {
  // this.props.checkAuthenticateStatus()
  Auth.deauthenticateUser()
}
  


  render(){
    return (
      <>
      <h1> LOG OUT </h1>
      </>
    )
  }
}