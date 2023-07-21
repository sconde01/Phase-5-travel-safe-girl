import { clearErrors, setErrors } from "./errors"

export const loadUsers =() => {
  return dispatch => {
      fetch('/users')
      .then (r => r.json())
      .then (data => {
        const action ={
          type: "LOAD_USERS",
          payload: data
        }
        dispatch(action);
      })
    }
  }

  export const loadCurrentUser = () =>{
    return dispatch => {
      fetch('/show-current-user')
      .then(r => r.json())
      .then(data => {
        if(!data.errors) {
          //dispatch an actiont hat updates the store with the currentUser and logs us in
          const action = {
            type: "LOGIN_USER",
            payload: data
          }
          dispatch(action)}
      })
    }
  }

  export const loginUser = (user, navigate) => {
    return dispatch => {
      fetch("/login", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(resp => resp.json())
        .then(data => {
          if(data.errors) {
            dispatch(setErrors(data.errors));
          } else {
            const action = {
              type: "LOGIN_USER",
              payload: data
            }
            dispatch(action)
            dispatch(clearErrors())
            navigate("/places")
          }
        })
    }
  }

  export const signupUser = (user, navigate) => {
    return dispatch => {
      fetch("/signup" , {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user, navigate),
      })
        .then(r => r.json())
        .then(data => {
          if(data.errors) {
            dispatch(setErrors(data.errors));
          } else {
            dispatch({
              type: "LOGIN_USER",
              payload: data
            })
            dispatch({
              type: "ADD_USER",
              payload: data
            })
            navigate("/places")
          }
        })
  
    }
  }

  export const logoutUser = () => {
    //no fetch, not using thunk
    return {
      type: "LOGOUT_USER"
    }
  }
