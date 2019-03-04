
import axios from "axios"
import Auth from "../../Auth/Auth.js"
// import App from "../../App.js"

const LOGIN_USER = "LOGIN_USER"
const CHECK_AUTH_USER = "CHECK_AUTH_USER"
const LOG_OUT_USER = "LOG_OUT_USER"

export const checkUserAuthStatus = () => dispatch => {
  console.log("@checkUserAuthStatus")
  axios.get("/users/log").then(res => {
    console.log(res)
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
      }).then(()=>{
        Auth.authenticateUser(username)
      }).then(()=>{
        // console.log("First Hit")
        // debugger
        dispatch(checkUserAuthStatus())
      }).then(
        () => {
          console.log("End of LOGIN ACTON")
        
        }
      )
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





// export const RECIEVE_MOVIES = "RECIEVE_MOVIES"

// export const recieveMovies = movies => {
//   return {
//     type: RECIEVE_MOVIES,
//     movies
//   }
// }

// export const fetchMovies = () => {
//   dispatch => {
//     return Util.getMovies().then(movies => {
//       return dispatch(recieveMovies(movies.data))
//     })
//   }
// }


// export const fetchSearchQuery = () => dispatch => {
//   console.log("axios called")
//   axios
//     .get("http://localhost:1337/posts/tag/apple").then(res => {
//       dispatch({
//         type: FETCH_SEARCH_QUERY,
//         payload: res
//       })
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }