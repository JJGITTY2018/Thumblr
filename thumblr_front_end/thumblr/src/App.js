//React
import React, { Component } from 'react';
import axios from "axios"
import {withRouter} from "react-router"
import fetchSearch_Container from "./body/containers/featchSearch_Container"
import Auth from "./Auth/Auth.js"
import PrivateRoute from "./Auth/AuthRouting"

import {Route, Switch} from "react-router-dom"


//Classes
import NavBar from "./header/navi.js"
import Home from "./body/home/slidingComponents.js"
import Login from "./body/login.js"
import SearchResults from "./body/search.js"
import Signup from './body/sign_up';
import Logout from "./body/logout.js"


//CSS
import './css/navi.css';
import './css/container.css'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
    isLoggedIn: false,
    user: ""
  }
  }
    componentDidMount() {
    // check if user is logged in on refresh
    this.checkAuthenticateStatus();
    // console.log(this.state)
  }

//this removes the token from the front end and logs the user out in the backend via the axios.
  logoutUser = () => {
    axios
      .post("/users/logout")
      .then(() => {
        Auth.deauthenticateUser();
      })
      .then(() => {
        this.checkAuthenticateStatus();
      });
  };

//this is to check if user is login from the back end and the front end.
    checkAuthenticateStatus = () => {
      // debugger
    axios.get("/users/log").then(user => {
      // console.log(this.state)
      if (user.data.username === Auth.getToken()) {
        this.setState({
          isLoggedIn: Auth.isUserAuthenticated(),
          username: Auth.getToken()
        });
      } else {
        if (user.data.username) {
          this.logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    }
    )
  }
  render() { 
    return (
      <>
      <div className = "body_container">
      <NavBar /> 
      <Switch> 
      <PrivateRoute exact path = "/dashboard" component = {SearchResults}></PrivateRoute>

      <Route exact path = "/login" render = {props => <Login {...props} state = {this.state} checkAuthenticateStatus = {this.checkAuthenticateStatus} />}> </Route>

      <Route exact path = "/sign_up" component = {Signup} ></Route>

      <Route exact path = "/search" component = {fetchSearch_Container}></Route>
      
      <Route exact path = "/home" component = {Home} ></Route>

      <Route exact path = "/logout" render = {props => <Logout {...props} state = {this.state} checkAuthenticateStatus = {this.checkAuthenticateStatus} />}> </Route>


      </Switch>
      </div>
      </>
    )
  }
}

export default withRouter(App);
