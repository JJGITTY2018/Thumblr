import {combineReducers} from 'redux'
// import fetchSearchQuery_Reducer from "./login_Reducer.js"
import login_user from "./login_Reducer"


const RootReducer = combineReducers({
  login: login_user
})

export default RootReducer
