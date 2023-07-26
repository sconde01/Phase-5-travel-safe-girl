
const businessesReducer = (state=[], action) => {
  switch (action.type) {
    case "LOAD_BUSINESSES":
      return action.payload
    default:
      return state;
  }
}

export default businessesReducer;


