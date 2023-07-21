import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import usersReducer from "./usersReducer";
import placesReducer from "./placesReducer";

export default combineReducers({
  errorsReducer,
  usersReducer,
  placesReducer
})