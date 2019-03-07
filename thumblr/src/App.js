//React
import React, { Component } from 'react';
// import axios from "axios"
import {withRouter} from "react-router"
// import Auth from "./Auth/Auth.js"
import PrivateRoute from "./Auth/AuthRouting"
import PublicRoute from "./Auth/PublicRoute.js"
import {Route, Switch} from "react-router-dom"

//Classes
// import NavBar from "./header/navi.js"
import Home from "./body/home/home.js"


//actions
import { connect } from "react-redux";
import {checkUserAuthStatus} from "./redux/actions/actions.js"

//CSS
import './css/navi.css';
import './css/container.css'
import './css/post.css'
import './css/dashboard.css'

//Containers
import login_container from './../src/body/containers/login_container.js';
import logout_container from './../src/body/containers/logout_container.js'
import Signup from "./../src/body/containers/signup_container.js"
import NavBarContainer from "./body/containers/navi_container.js"
import Searched from "./body/containers/search_container"
import userDashboard from "./body/containers/userDashboard_container.js"



class App extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //   isLoggedIn: false,
  //   user: ""
  // }
  // }

  // }
    componentDidMount() {
    // check if user is logged in on refresh
    // this.checkAuthenticateStatus()
    //  console.log(this.props)
    // console.log(this.state)
  }

//this removes the token from the front end and logs the user out in the backend via the axios.
  // logoutUser = () => {
  //   axios
  //     .post("/users/logout")
  //     .then(() => {
  //       Auth.deauthenticateUser();
  //     })
  //     .then(() => {
  //       this.checkAuthenticateStatus();
  //     })
  // }

//this is to check if user is login from the back end and the front end.
  //   checkAuthenticateStatus = () => {
  //     // debugger
  //   axios.get("/users/log").then(user => {
  //     // console.log(this.state)
  //     if (user.data.username === Auth.getToken()) {
  //       this.setState({
  //         isLoggedIn: Auth.isUserAuthenticated(),
  //         username: Auth.getToken()
  //       });
  //     } else {
  //       if (user.data.username) {
  //         this.logoutUser();
  //       } else {
  //         Auth.deauthenticateUser();
  //       }
  //     }
  //   }
  //   )
  // }

  render() { 
    return (
      <>
      <NavBarContainer /> 
      <div className = "body_container">
      <Switch>

  
      <PrivateRoute exact path = "/dashboard" component = {userDashboard}> </PrivateRoute>

      {/* <Route exact path = "/login" render = {props => <Login {...props} state = {this.state} checkAuthenticateStatus = {this.checkAuthenticateStatus} />}> </Route> */}

      <Route exact path = "/login" component ={login_container}> </Route>

      <Route exact path = "/sign_up" component = {Signup} ></Route>

      <Route path = "/search" component = {Searched} >
      </Route>
      
      <PublicRoute exact path = "/home" component = {Home} ></PublicRoute>

      <Route exact path = "/logout" component = {logout_container}> </Route>

      <Route path = "/*" component ={Home}> </Route>
      </Switch>
      </div>
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    AppStore: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  function_checkStatus:() => 
    dispatch(checkUserAuthStatus())
}
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
