import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/users';

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";


const Navbars = () => {
  const { loggedIn, currentUser } = useSelector(store => store.usersReducer) 
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    fetch('/logout',
    { method: "DELETE"})
    dispatch(logoutUser());
  }

  const NavBarLoggedIn = () => {
    return (
      
      <Navbar className="mx-auto max-w-screen-xl px-6 py-3" color="blue-gray">
          <Link to="/places/new">Add a Place</Link>
          {/* <Link to="/user/food_trucks">My Food Trucks</Link> */}
         
      
          
            <li><b>Signed in as:</b> <Link to="/places/user-reviews">{currentUser.username}</Link></li>
        
       
          <Link href="#" onClick={handleLogoutClick}>Sign Out</Link>
          </Navbar>
    
    )
  }

  const NavBarLoggedOut = () => {
    return (
<>
      <p> <Link to="/login">Login</Link></p>
      <p><Link to="/signup">Signup</Link></p>
      </>
    )
  }

  return (
    <>
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3" color="blue-gray">

      <Link to="/places">Places</Link>
        <div>
        { loggedIn ? NavBarLoggedIn() : NavBarLoggedOut() }
        </div>
    </Navbar>
  </>
  )
}

export default Navbars;

