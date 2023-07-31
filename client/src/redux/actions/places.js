// import { useDispatch } from "react-redux"

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
      const action = { 
        type: "LOAD_PLACES", 
        payload: data 
      } // this action is an obj (has type & payload action.type, action.payload -> data will be given from the backend)
      dispatch(action) // dispatch action to reducer
    })
  } 

}

export const addPlace = (formData, navigate, setErrors) => {
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
        // console.log("new place data", data)
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

export const addReview = (formData, navigate, setErrors, place_id) => {

  //   console.log(JSON.stringify({
  //     formData,
  // }), "addReview action!")

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
        const actionPlace = {
          type: "ADD_PLACE_REVIEW",
          payload: data
        }
        dispatch(actionPlace);
        // console.log( "actionPlace", actionPlace)
        navigate('/places/user-reviews');

        const actionUser = {
          type: "ADD_USER_REVIEW",
          payload: data
        }
        dispatch(actionUser);
        console.log("actionUSer", actionUser)
        navigate('/places/user-reviews')
    } 
    });
  }
}

// export const addReview = (formData, navigate, setErrors, place_id) => {
//   console.log(JSON.stringify(formData), "addReview action!");

//   return (dispatch) => {
//     const reviewData = {
//       title: formData.title,
//       body: formData.body,
//       safe: formData.safe,
//       budget_friendly: formData.budget_friendly,
//       place_id: place_id,
//       user_id: formData.user_id,
//     };

//     fetch("/reviews", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(reviewData, formData),
//     })
//       .then((r) => r.json())
//       .then((data) => {
//         if (data.errors) {
//           dispatch(setErrors(data.errors));
//         } else {
//           const action = {
//             type: "ADD_PLACE_REVIEW",
//             payload: data,
//           };
//           dispatch(action);
//           console.log(action.payload, "payload");
//           navigate("/places");
//         }
//       });
//   };
// };

export const editReview = (id, formData, navigate, setErrors) => {
  return dispatch => {
    fetch(`/reviews/${id}`, {
      method: 'PATCH',
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
        const editPlaceReviewAction = {
          type: "EDIT_PLACE_REVIEW",
          payload: data
        }
        dispatch(editPlaceReviewAction);
        // console.log(data, "edited place review")
        navigate('/places');

        const editUserReviewAction = {
          type: "EDIT_USER_REVIEW",
          payload: data
        }
        dispatch(editUserReviewAction);
        // console.log(data, "edited user review")
        navigate('/places/user-reviews');
    } 
    });
  }
}

export const deleteReview = (id) => {
  return dispatch => {
     fetch(`/reviews/${id}`, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
     })
        .then(resp => {
          if(resp.ok) {
            dispatch({
               type: "DELETE_PLACE_REVIEW",
               payload: id
            })
            dispatch({
               type: "DELETE_USER_REVIEW",
               payload: id
            })
          }

        })
        }
  }

// export const deleteReview = (id) => {
//   return dispatch => {
//      fetch(`/reviews/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Accept": "application/json",
//           "Content-Type": "application/json"
//       },
//      })
//         .then(resp => resp.json())
//         .then(data => {
//            dispatch({
//               type: "DELETE_PLACE_REVIEW",
//               payload: id
//               //   payload: data.id
//            })
//            dispatch({
//               type: "DELETE_USERS_REVIEW",
//               payload: id
//            })
//         })
//   }
// }
