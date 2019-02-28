import {login_user} from "../actions/actions.js"

const loginReducer = (oldstate = [], action) => {
  Object.freeze(oldstate);
  switch (action.type){
    case "LOGIN_USER":
    console.log(action)
    return {
      ...oldstate,
      current_userID :action.payload.id,
      current_username: action.payload.username,
      current_userEmail: action.payload.email
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