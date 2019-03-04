import React, { Component } from 'react';
import Axios from 'axios';
// import Auth from '../Auth/Auth';
// import axios from "axios"
// import Auth from "../Auth/Auth"
// import {checkUserAuthStatus, logOutUser} from "../redux/actions/actions.js"


class Logout extends Component {

componentDidMount() {
  // Auth.deauthenticateUser()
  Axios
  .get("").then(()=>{
    this.props.function_logout_user()}).then(
        setTimeout(() => {
          this.props.history.push('/home')
        }, 1000))
  }


  render(){
    // console.log(this.props)
    return (
      <>
      <h1> LOG OUT </h1>
      </>
    )
  }
}


export default Logout



