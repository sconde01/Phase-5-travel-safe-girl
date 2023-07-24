import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../redux/actions/users';
import { clearErrors } from '../redux/actions/errors';

import {
  Button,
  Card,
  Typography,
  Input
} from "@material-tailwind/react";

const Signup = () => {
  const { loggedIn } = useSelector(store => store.usersReducer)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")


  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/places")
    }
    return () => {
      dispatch(clearErrors())
    }
}, [loggedIn, navigate, dispatch])

  const handleSubmit = e => {
    e.preventDefault();
    //debugger
    const user = { username, password, email }
    dispatch(signupUser(user, navigate))
  }


  return (
    <Card className="place-content-center" color="transparent" >
      <Typography className="place-content-center" variant="h4" color="blue-gray">
        SIGN UP
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your info.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={ handleSubmit }>
        <div className="mb-4 flex flex-col gap-6">
          <Input 
            
            label="Email"
            type="text" 
            name="email" 
            id="email"
            value={ email }
            onChange={ e => setEmail(e.target.value) }
            required={true}      
             />
          <Input 
            size="lg" 
            label="Username"
            type="text" 
            name="username" 
            id="username"
            value={ username }
            onChange={ e => setUsername(e.target.value) }
            required={true}      
             />
          <Input 
            size="lg" 
            label="Password" 
            type="password" 
            name="password" 
            id="password"
            value={ password }
            onChange={ e => setPassword(e.target.value) }
            required={true}
            />
        </div>
        
        <Button className="mt-6" type="submit">
          Sign Up
        </Button>
      </form>
    </Card>

  )
}

export default Signup