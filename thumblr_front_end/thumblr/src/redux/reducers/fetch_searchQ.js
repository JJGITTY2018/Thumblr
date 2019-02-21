import fetchSearchQuery from "../actions/actions.js"


const fetchSearchQuery_Reducer = (oldstate = [], action) => {
Object.freeze(oldstate);
console.log(action)
}


export default fetchSearchQuery_Reducer



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