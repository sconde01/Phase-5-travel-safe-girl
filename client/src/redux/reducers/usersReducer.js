// import errorsReducer from "./errorsReducer";

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
         //console.log("action p", action.payload)
        //  const place = state.places.find(place => place.id === action.payload.place.id );
        //  const updatedReviews = place.reviews.map(review => review.id === action.payload.id ? action.payload : review);
        //  const updatedPlace = { 
        //    ...place,
        //    reviews: updatedReviews
        //  }
        //  const updatedPlaceReview = state.places.map(place => place.id === updatedPlace.id ? updatedPlace : place);
        //  return {
        //    ...state,
        //    places: updatedPlaceReview
        //  };
      
      const user = state.users.find(user => user.id === action.payload.user.id )
      const updatedReview = user.reviews.map(review => review.id === action.payload.id ? action.payload : review);
      const updatedUser = {
        ...user,
        reviews: updatedReview
      }
      const updatedUserReview = state.users.map(user => user.id === updatedUser.id ? updatedUser : user);
      return {
        ...state,
        reviews: updatedUserReview
      };

      case "DELETE_USER_REVIEW":
        return {
          ...state,
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

// const initialState = {
//   users: [],
//   currentUser: { reviews: [] }, // Initialize reviews as an empty array
//   loggedIn: false,
// };

// const usersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOAD_USERS":
//       // update our users state with the action.payload which points to our data
//       return {
//         ...state,
//         users: action.payload,
//       };
//     case "LOGIN_USER":
//       return {
//         ...state,
//         currentUser: { ...action.payload, reviews: [] }, // Initialize reviews as an empty array when logging in
//         loggedIn: true,
//       };
//     case "LOAD_CURRENT_USER":
//       return {
//         ...state,
//         currentUser: { ...action.payload, reviews: [] }, // Initialize reviews as an empty array when loading the current user
//         loggedIn: true,
//       };
//     case "ADD_USER":
//       return {
//         ...state,
//         users: [...state.users, action.payload],
//       };
//     case "LOGOUT_USER":
//       return {
//         ...state,
//         currentUser: initialState.currentUser, // Reset currentUser to its initial state on logout
//         loggedIn: false,
//       };
//     default:
//       return state;
//   }
// };

// export default usersReducer;

