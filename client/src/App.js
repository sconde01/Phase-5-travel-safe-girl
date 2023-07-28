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
import EditReview from "./reviews/EditReview";
import BusinessContainer from "./businesses/BusinessContainer";
import BusinessPage from "./businesses/BusinessPage";
import { loadBusinesses } from "./redux/actions/businesses";
import Footer from "./static/Footer";

function App() {
  // const reduxState = useSelector((store) => store );
  // console.log(reduxState)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlaces())
    dispatch(loadUsers())
    dispatch(loadCurrentUser())
    dispatch(loadBusinesses())
  }, [dispatch])

  return (

    <Router>
        <Navbars/>
        <Errors/>
          <Routes>
            <Route path="/" element= { <Home/>} />
            <Route path="/places" element= { <PlacesContainer/>} />
            <Route path="/places/:id" element= { <PlaceReviews/>} />
            <Route path="/places/:id/new-review" element= { <NewReview/>} />
            {/* <Route path="/places/new" element= { <NewPlaceForm/>} /> */}
            <Route path="/places/user-reviews" element= { <UserReviews/>} />
            <Route path="/reviews/:id/edit" element= { <EditReview/>} />
            <Route path="/businesses" element= { <BusinessContainer/>} />
            <Route path="/businesses/:id" element= { <BusinessPage/>} />
            <Route path="/login" element= { <Login/>} />
            <Route path="/signup" element= { <Signup/>} />
          </Routes>
          <Footer/>
  </Router>
  )

}

export default App;