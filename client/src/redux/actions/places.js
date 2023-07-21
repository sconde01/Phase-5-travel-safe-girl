// import { useDispatch } from "react-redux"

import { setErrors } from "./errors"

export const loadPlaces = () => {
  //thunk middleware usees these actions to make asynchronous calls 
  //it expects a function to be returned
  // the funcion itself takes in a parameter called dispatch

  // const dispatch = useDispatch();

  return dispatch => {
    //asynchronous calls
    fetch('/places')
    .then(r => r.json())
    .then(data => {
      const action = { type: "LOAD_PLACES", payload: data }
      dispatch(action) 
    })
  } 

}

export const addPlace = (formData, navigate) => {
  return dispatch => {
    fetch('/places', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => {
        console.log("new place data", data)
        if(data.errors){
          dispatch(setErrors(data.errors));
        } else {
          //dispatch to PlacesReducer for adding a place
          const action ={
            type: "ADD_PLACE",
            payload: data
          }
          dispatch(action);
          navigate('/places');
        }
      })
    }
}

export const addReview = (formData, navigate) => {
  return dispatch => {
    fetch('/reviews', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
      if(data.errors) {
        dispatch(setErrors(data.errors));
    } else {
     //console.log("review data", data)
        const action = {
          type: "ADD_PLACE_REVIEW",
          payload: data
        }
        dispatch(action);
        navigate('/places');
    } 
    });
  }
}
