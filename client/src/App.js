// client/src/components/App.js
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbars from "./static/Navbars";
import Home from "./static/Home";
import PlacesContainer from "./places/PlacesContainer";
import { loadPlaces } from './redux/actions/places';
import PlaceReviews from "./places/PlaceReviews";
import NewPlaceForm from "./places/NewPlaceForm";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Errors from "./errors/Errors";
import { loadCurrentUser, loadUsers } from "./redux/actions/users";
import NewReview from "./reviews/NewReview";
import UserReviews from "./users/UserReviews";

function App() {
  // const reduxState = useSelector((store) => store );
  // console.log(reduxState)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlaces())
    dispatch(loadUsers())
    dispatch(loadCurrentUser())
  }, [dispatch])

  return (

    <Router>
        <Navbars/>
        <Errors/>
        <Home/>
          <Routes>
            <Route path="/" element= { <Home/>} />
            <Route path="/places" element= { <PlacesContainer/>} />
            <Route path="/places/:id" element= { <PlaceReviews/>} />
            <Route path="/places/:id/new-review" element= { <NewReview/>} />
            <Route path="/places/new" element= { <NewPlaceForm/>} />
            <Route path="/places/user-reviews" element= { <UserReviews/>} />
            <Route path="/login" element= { <Login/>} />
            <Route path="/signup" element= { <Signup/>} />
          </Routes>
  </Router>
  )

}

export default App;