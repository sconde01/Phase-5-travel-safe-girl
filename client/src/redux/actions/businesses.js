export const loadBusinesses = () => {
  return dispatch => {
    fetch('/businesses')
    .then(r => r.json())
    .then(data => {
      //console.log(data, "action: loadBusinesses")
      const action = { 
        type: "LOAD_BUSINESSES", 
        payload: data 
      } 
      dispatch(action) // dispatch action to reducer
    })
  } 
}
