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

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logoutUser } from '../redux/actions/users';
// import {
//   Navbar,
//   NavItem,
//   Dropdown,
//   DropdownItem,
// } from "@material-tailwind/react";

// const Navbars = () => {
//   const { loggedIn, currentUser } = useSelector(store => store.usersReducer);
//   const dispatch = useDispatch();
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const handleLogoutClick = () => {
//     fetch('/logout', { method: "DELETE" });
//     dispatch(logoutUser());
//   }

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   }

//   const NavBarLoggedIn = () => {
//     return (
//       <Dropdown
//         color="lightBlue"
//         placement="bottom-start"
//         open={dropdownOpen}
//         toggle={toggleDropdown}
//       >
//         <button className="p-4 text-gray-700">
//           {currentUser.username}
//         </button>
//         <DropdownItem>
//           <Link to="/places/new">Add a Place</Link>
//         </DropdownItem>
//         {/* <DropdownItem>
//           <Link to="/user/food_trucks">My Food Trucks</Link>
//         </DropdownItem> */}
//         <DropdownItem>
//           <Link to="/places/user-reviews">User Reviews</Link>
//         </DropdownItem>
//         <DropdownItem onClick={handleLogoutClick}>
//           Sign Out
//         </DropdownItem>
//       </Dropdown>
//     )
//   }

//   const NavBarLoggedOut = () => {
//     return (
//       <Navbar.Nav className="flex">
//         <NavItem>
//           <Link to="/login">Login</Link>
//         </NavItem>
//         <NavItem>
//           <Link to="/signup">Signup</Link>
//         </NavItem>
//       </Navbar.Nav>
//     )
//   }

//   return (
//     <Navbar color="lightBlue">
//       <Navbar.Container>
//         <Link to="/">
//           {/* Add your logo or icon here */}
//           <img
//             src="/logo.png"
//             alt="Logo"
//             height="30"
//             className="inline-block align-middle mr-2"
//           />
//           <span className="text-lg font-bold">Travel App</span>
//         </Link>
//       </Navbar.Container>
//       <Navbar.Container position="right">
//         <ul className="flex items-center">
//           <NavItem>
//             <Link to="/places">Places</Link>
//           </NavItem>
//           {loggedIn ? NavBarLoggedIn() : NavBarLoggedOut()}
//         </ul>
//       </Navbar.Container>
//     </Navbar>
//   )
// }

// export default Navbars;
