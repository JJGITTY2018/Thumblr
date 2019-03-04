// import Auth from "../../Auth/Auth";

// import {login_user} from "../actions/actions.js"

const loginReducer = (oldstate = [], action) => {
  Object.freeze(oldstate);
  console.log("@Login_Reducer")
  switch (action.type){
    case "LOGIN_USER":
    return {
      ...oldstate,
      current_userID :action.payload.id,
      current_username: action.payload.username,
      current_userEmail: action.payload.email
    }
    case "LOGOUT_USER":
    return {
      current_user_id: "",
      current_username: "",
      current_userEmail: ""
    }

    default:
    return oldstate
  }


  }


export default loginReducer



// const MovieReducer = (oldState = [], action) => {
//   Object.freeze(oldState);
//   switch (action.type) {
//     case RECIEVE_MOVIES:
//       return action.movies
//     default:
//       return oldState
//   }
// }

// export default MovieReducer

// const fetchSearchQuery_Reducer = (oldstate = [], action) => {
//   Object.freeze(oldstate);
//   // console.log("Reduver Point")
//   return oldstate
// }