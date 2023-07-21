import { updateResource, addResource, updateResourceCollection } from "../../Globals"

// const initialState = {
//   reviews: [],
//   currentUser: {},
//   places: []

// }

export const placesReducer = (state=[], action) => {
  // action is an object that has these key values applied: action.type, action.payload

  switch(action.type) {
    case "LOAD_PLACES":
      // return new non destructive state
      return action.payload
    case "ADD_PLACE":
      return addResource(state, action.payload)
      //return [...state, action.payload]
    case "ADD_PLACE_REVIEW":
      const place = state.find(p => p.id === action.payload.place_id)
      const updatedReviews = addResource(place.reviews, action.payload)
      return updatedReviews
      // const updatedPlace = updateResourceCollection(state.id, "reviews", updatedReviews)
      // const updateCurrentUserReviews = {...state.currentUser, reviews: updatedReviews}
      // return [updateResource(state, updatedPlace), updateCurrentUserReviews]
      
    case "EDIT_PLACE_REVIEW":
      return updateResource(state, action.payload)


    default:
      return state;

  }


}

export default placesReducer ; 