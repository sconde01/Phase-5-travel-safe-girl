import React from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/users';
import {
  Navbar,
   Typography,
  Button,
  } from "@material-tailwind/react";
// import "@material-tailwind/react/tailwind.css";
import {
  UserCircleIcon
} from "@heroicons/react/24/outline";

const Navbars = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { loggedIn, currentUser } = useSelector(store => store.usersReducer) 

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    fetch('/logout',
    { method: "DELETE"})
    dispatch(logoutUser());
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navListLoggedIn = () => (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/places" className="flex items-center">
          Places
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/places/new" className="flex items-center">
          Add a Place
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/places/user-reviews" className="flex items-center">
          <UserCircleIcon className="h-[18px] w-[18px]" />
          Account: {currentUser.username}
        </a>
      </Typography>
      <Button
        variant="gradient"
        size="sm"
        className="hidden lg:inline-block"
        onClick={handleLogoutClick} 
      >
        <span>Sign Out</span>
      </Button>
    </ul>
  )
  const navListLoggedOut = () => (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/places" className="flex items-center">
          Places
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/login" className="flex items-center">
          <UserCircleIcon className="h-[18px] w-[18px]" />
          Log In
        </a>
      </Typography>
      <Button
        variant="gradient"
        size="sm"
        className="hidden lg:inline-block"
        onClick={() => navigate("/signup")}
      >
        <span>Sign Up</span>
      </Button>
    </ul>
  )

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
    <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Home Page
        </Typography>

      { loggedIn ? navListLoggedIn() : navListLoggedOut() }
      </div>
      </Navbar>
      
      );
    }
  
export default Navbars;

