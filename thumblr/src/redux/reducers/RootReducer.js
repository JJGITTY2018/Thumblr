import {combineReducers} from 'redux'
// import fetchSearchQuery_Reducer from "./login_Reducer.js"
import loginReducer from "./login_Reducer"
import checkUserAuthStatus_reducer from "./checkAuth_Reducer"


const RootReducer = combineReducers({
  LoginState: loginReducer,
  CurrentAutState: checkUserAuthStatus_reducer,
})

export default RootReducer
