
import axios from "axios"

const FETCH_SEARCH_QUERY = "FETCH_SEARCH_QUERY"



export const fetchSearchQuery = () => dispatch => {
  console.log("axios called")
    axios
      .get("http://localhost:1337/posts/tag/apple").then(res => {
         dispatch({
           type: FETCH_SEARCH_QUERY,
           payload: res
         })
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