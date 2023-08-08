import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../redux/actions/users';
import { clearErrors } from '../redux/actions/errors';

import {
  Button,
  Card,
  Typography,
  Input,
  CardBody,
  Checkbox
} from "@material-tailwind/react";

const Signup = () => {
  const { loggedIn } = useSelector(store => store.usersReducer)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("")


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


  const togglePassword = () => {
    setShowPassword(!showPassword)
  };

  return (
    <>
    <div className="grid place-content-center h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
      <br/>
    <Card className="place-content-center border-double border-4 border-indigo-600 " color="transparent" >
      <CardBody>
      <Typography className="place-content-center" variant="h4" color="white">
        SIGN UP
      </Typography>
      <Typography color="white" className="mt-1 font-normal">
        Enter your info to sign up for awesome, safe, places to travel to!
      </Typography >
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={ handleSubmit }>
        <div className="mb-4 flex flex-col gap-6">
          <Input 
            style={{ color: "white" }}
            label="Email"
            type="text" 
            name="email" 
            id="email"
            value={ email }
            onChange={ e => setEmail(e.target.value) }
            // required={true}      
             />
          <Input 
            size="lg" 
            style={{ color: "white" }}
            label="Username"
            type="text" 
            name="username" 
            id="username"
            value={ username }
            onChange={ e => setUsername(e.target.value) }
            // required={true}      
             />
          <Input 
            size="lg"
            style={{ color: "white" }}
            label="Password" 
            type={showPassword ? "text" : "password"} 
            name="password" 
            id="password"
            value={ password }
            onChange={ e => setPassword(e.target.value) }
            // required={true}
            />
          <Input 
            size="lg"
            style={{ color: "white" }}
            label="Confirm Password" 
            type={showPassword ? "text" : "password"}
            name="confirm password" 
            id="confirm password"
            value={ confirmPassword }
            onChange={ e => setConfirmPassword(e.target.value) }
            // required={true}
            />

          <Checkbox 
              value="allowExtraEmails" 
              color= "blue"
              label = {
                <Typography color="white" className="flex font-medium">
                  Show Password
                 </Typography>}
              onClick={togglePassword} 
              />
               
        </div>
        
        <Button className="mt-6" type="submit">
          Sign Up
        </Button>
      </form>
      </CardBody>
    </Card>
    </div>
    <br/>
    </>
  )
}

export default Signup