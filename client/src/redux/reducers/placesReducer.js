import { updateResource, addResource, updateResourceCollection } from "../../Globals";

const initialState = {
  reviews: [],
  currentUser: {
    reviews: [], //set a default value for currenUser.reviews as an empty array?
  }, // This will be updated later when the user logs in
  places: [],
  users: [],
};
console.log("initial state", initialState)

export const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PLACES":
      return { ...state, places: action.payload };
    case "ADD_PLACE":
      return {...state, places: action.payload };
      
    case "ADD_PLACE_REVIEW":
      console.log("action p", action.payload)
      //find place and add review to place
      const placeForAdd = state.places.find(place => place.id === action.payload.place.id)
      console.log ("placeFor Add", placeForAdd)
      const addReviewToPlace = [...placeForAdd.reviews, action.payload];
      console.log("addREviewtoPlace", addReviewToPlace )

      //add review to currentUser
      const addToCurrentUser = { ...state.currentUser.reviews, reviews: addReviewToPlace };
      console.log("addtoCurrentUser", addToCurrentUser)

       // Update the places array with the updated place
       const updatedPlaces = state.places.map(place =>
        place.id === placeForAdd.id ? { ...place, reviews: addReviewToPlace } : place
      );
      console.log ("updatedPlace", updatedPlaces)

      //update the current user
      // const updatedUser = state.users.map(user => user.id === userForAdd.id ? {...user, reviews: addToCurrentUser} : user);
      // console.log("udpatedUser", updatedUser)

      // const currentUser = state.currentUser.find(user => user.id === action.payload.user.id)
      // const updatedCurrentUser = state.currentUser.find(user => user.id === addToCurrentUser.id ? addToCurrentUser : user)
      // return { ...state, places: addReviewToPlace, currentUser: addToCurrentUser };
      return { ...state, places: updatedPlaces, currentUser: addToCurrentUser };
      // return { ...state, places: updatedPlaces, currentUser: updatedUser };



    case "EDIT_PLACE_REVIEW":
      //console.log("action p", action.payload)
      const place = state.places.find(place => place.id === action.payload.place.id );
      const updatedReviews = place.reviews.map(review => review.id === action.payload.id ? action.payload : review);
      const updatedPlace = { 
        ...place,
        reviews: updatedReviews
      }
      const updatedPlaceReview = state.places.map(place => place.id === updatedPlace.id ? updatedPlace : place);
      return {
        ...state,
        places: updatedPlaceReview
      };

    case "DELETE_PLACE_REVIEW":
      return state.places.filter((review) => review.id !== action.payload);
    case "DELETE_USER_REVIEW":
      const updatedUserReviews = state.currentUser.reviews.filter(
        (review) => review.id !== action.payload
      );
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          reviews: updatedUserReviews,
        },
      };
    default:
      return state;
  }
};

export default placesReducer;
