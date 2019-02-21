//React
import React, { Component } from 'react';
import {withRouter} from "react-router"

import {Route, Switch} from "react-router-dom"


//Classes
import NavBar from "./header/navi.js"
// import Home from "./body/home/slidingComponents.js"
import Login from "./body/login.js"
import SearchResults from "./body/search.js"
//CSS
import './css/navi.css';
import './css/container.css'


class App extends Component {
  render() {
    return (
      <>
      <div className = "body_container">
      <NavBar /> 
      <Switch> 
      <Route exact path = "/login" component = {Login} ></Route>
      <Route exact path = "/search" component = {SearchResults}></Route>
      {/* <Route exact path = "/home" component = {Home} ></Route> */}
      </Switch>
      </div>
      </>
    )
  }
}

export default withRouter(App);
