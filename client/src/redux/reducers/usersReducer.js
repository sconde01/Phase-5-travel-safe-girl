// import errorsReducer from "./errorsReducer";

import { updateResource } from "../../Globals"

const initialState = {
  users: [],
  currentUser: null,
  loggedIn: false,
  reviews: []
}

const usersReducer = (state= initialState, action) => {
  switch(action.type) {
    case "LOAD_USERS":
      // update our users state with the action.payload which points to our data 
      return {
        ...state,
        users: action.payload
      }
    case "LOGIN_USER":
      return {
        ...state,
        currentUser: action.payload,
        reviews: action.payload.reviews,
        loggedIn: true
      }
    case "LOAD_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
        reviews: action.payload.reviews,
        loggedIn: true
      }
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload]
      }

      
    case "EDIT_USER_REVIEW":
      console.log("actin.payload", action.payload)
      // const cUser = state.currentUser.id === action.payload.user.id ;
      // console.log("user", cUser)
      const updatedReview = state.currentUser.reviews.map(review => review.id === action.payload.id ? action.payload : review);
      
      console.log ("updatedReview",updatedReview)

      const updatedUser = {
        ...state.currentUser,
        reviews: updatedReview
      }

      console.log("udpatedUser", updatedUser)


      // const updatedUserReview = state.currentUser.review === updatedUser ? updatedUser : state.currentUser.review;
      
      // console.log("updatedUserReview", updatedUserReview)
      
      return {
        ...state,
        reviews: updatedUser
      };

      case "DELETE_USER_REVIEW":
        return {
          ...state.currentUser,
          reviews: state.reviews.filter((review) => review.id !== action.payload)
        }
    
    case "LOGOUT_USER":
      return {
        ...state,
        currentUser: initialState.currentUser,
        loggedIn: false
      }
    default:
      return state;
  }
}

export default usersReducer;


