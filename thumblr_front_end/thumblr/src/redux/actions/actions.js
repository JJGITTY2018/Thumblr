
import axios from "axios"
import Auth from "../../Auth/Auth.js"
import App from "../../App.js"

const LOGIN_USER = "LOGIN_USER"

export const login_user = (username, password) => dispatch => {
  console.log("axios calling")
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
        console.log("end call")
      })
      .catch(err => {
        console.log(err)
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