
import axios from "axios"
// import React from "react"
import Auth from "../../Auth/Auth.js"
// import { Route, Redirect } from "react-router-dom";
// import App from "../../App.js"

const LOGIN_USER = "LOGIN_USER"
const CHECK_AUTH_USER = "CHECK_AUTH_USER"
const LOG_OUT_USER = "LOG_OUT_USER"
const FETCH_SEARCH_QUERY = "FETCH_SEARCH_QUERY"

const FETCH_FOLLOWER_LIST = "FETCH_FOLLOWER_LIST"

const FETCH_FOLLOWERS_POSTS = "FETCH_FOLLOWERS_POSTS"


export const checkUserAuthStatus = () => dispatch => {
  // console.log("@checkUserAuthStatus")
  axios.get("/users/log").then(res => {
    // console.log(res)
    if(res.data.username === Auth.getToken()){
      dispatch({
        type: CHECK_AUTH_USER,
        payload: res.data
      })
    }
    else {
      if(res.data.username){
        dispatch(logOutUser())
      }
      else {
        Auth.deauthenticateUser()
      }
    }
  })
}

export const login_user = (username, password) => dispatch => {
  console.log("CALLING LOG")
    axios
      .post("/users/login", {
        username,
        password
      }).then(res => {
         dispatch({
           type: LOGIN_USER,
           payload: res.data
         })
         return res
      }
      ).then((res)=>{
        console.log(res)
        Auth.authenticateUser(username)
        Auth.authenticateUserID(res.data.id)
      }).then(()=>{
        // console.log("First Hit")
        // debugger
        dispatch(checkUserAuthStatus())
      }).then(
        () => {
          console.log("End of LOGIN ACTON")
        
        }
      )
      //TODO: CREATE A LOGIN STATUS ON LOGIN PAGE, IF FAIL SHOWS ERROR
      .catch(err => {
        console.log(err)
      })

}
export const logOutUser = ()=> dispatch => {
  console.log("I AM LOGGING OUT YO.")
    axios
      .post("/users/logout")
      .then(() => {
        dispatch({
          type:LOG_OUT_USER,
          payload: {}
        })
      })
      .then(() => {
        Auth.deauthenticateUser()
      }).then(()=>{
        dispatch(checkUserAuthStatus())

      })
  }


export const fetchSearchQuery = (search) => dispatch => {
  console.log("search called")
  let empty = " "
  if(search){
  axios
    .get(`/posts/tag/${search}`).then(res => {
      dispatch({
        type: FETCH_SEARCH_QUERY,
        payload: res
      })
    }).then(() => {

    })
    .catch(err => {
      console.log(err)
    })
  }
  else(
axios
    .get(`/posts/tag/${empty}`).then(res => {
      dispatch({
        type: FETCH_SEARCH_QUERY,
        payload: res
      })
    }).then(() => {

    })
    .catch(err => {
      console.log(err)
    })
  )

}

export const fetchDashboardPosts = (arrayofFollowers) => {

}

export const getFollowerList = () => dispatch => {
  let userID = Auth.getTokenID()
  if(userID){
    axios
    //user_ID
    .get(`/follow/${userID}`)
    .then((res)=>{
    dispatch({
      type: FETCH_FOLLOWER_LIST,
      payload:res.data.data
    })
    return res
  })
  .then((res)=>{
      let y = []
      res.data.data.map( el => {
        return y.push(el.user_id)
      })
      let x = JSON.stringify(y)
      return x
    })
  .then( (x) => {
    // console.log(x)
    let sliced = x.slice(1,(x.length-1))
    // console.log(sliced)
    axios
    .get(`/posts/followers/${sliced}`)
    .then((res)=>{
      dispatch({
        type: FETCH_FOLLOWERS_POSTS,
        payload: res.data.data
      })
    }
    )
  })
  .catch((err)=>{
    console.log(err)
  })
}
else (
  login_user()
)

}