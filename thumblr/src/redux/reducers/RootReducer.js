import {combineReducers} from 'redux'
// import fetchSearchQuery_Reducer from "./login_Reducer.js"
import loginReducer from "./login_Reducer"
import checkUserAuthStatus_reducer from "./checkAuth_Reducer"
import SearchReducer from "./search_Reducers.js"

import dashboardReducer from "./dashboard_Reducers"

const RootReducer = combineReducers({
  LoginState: loginReducer,
  CurrentAutState: checkUserAuthStatus_reducer,
  SearchState: SearchReducer,
  dashboardState: dashboardReducer
})

export default RootReducer
