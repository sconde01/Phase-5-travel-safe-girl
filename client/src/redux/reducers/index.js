import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import usersReducer from "./usersReducer";
import placesReducer from "./placesReducer";
import businessesReducer from "./businessesReducer";

export default combineReducers({
  errorsReducer,
  usersReducer,
  placesReducer,
  businessesReducer
})