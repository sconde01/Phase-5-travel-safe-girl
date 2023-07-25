import { updateResource, addResource, updateResourceCollection } from "../../Globals";

const initialState = {
  reviews: [],
  currentUser: {}, // This will be updated later when the user logs in
  places: [],
};

export const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PLACES":
      return { ...state, places: action.payload };
    case "ADD_PLACE":
      return {...state, places: action.payload };
    case "ADD_PLACE_REVIEW":
      const { place_id } = action.payload;

      // Find the place in the places array that matches the place_id of the review
      const updatedPlaces = state.places.map((place) => {
        if (place.id === place_id) {
          // Add the review to the place's reviews array
          const updatedReviews = [...place.reviews, action.payload];
          console.log("updatedReviews", updatedReviews)
          return { ...place, reviews: updatedReviews };
        }
        return place;
      });
      console.log("updatedPlace", updatedPlaces)
      // Update the user state to include the review in the currentUser's reviews array 
      const updatedCurrentUser = { ...state.currentUser, reviews: [...state.currentUser.reviews, action.payload] };
      console.log("updatedCurrentUser", updatedCurrentUser)
      return { ...state, places: updatedPlaces, currentUser: updatedCurrentUser };

    case "EDIT_PLACE_REVIEW":
      const updatedPlaceReview = state.places.map(place => place.id === action.payload.id ? action.payload : place);
      return {
        ...state,
        places: updatedPlaceReview
      };

    case "DELETE_PLACE_REVIEW":
      return state.places.filter((review) => review.id !== action.payload);
    case "DELETE_USER_REVIEW":
      return state.currentUser.filter((review) => review.id !== action.payload);

    default:
      return state;
  }
};

export default placesReducer;
