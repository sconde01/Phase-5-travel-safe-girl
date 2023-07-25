import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/users';
import { clearErrors, setErrors } from '../redux/actions/errors';

import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const Login = () => {
  const { loggedIn } = useSelector(store => store.usersReducer);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  console.log('inside of the login component', loggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // code here is what happens on mount
    if(loggedIn) {
      navigate('/places')
    }
    return () => {
      // code here is what happens when the component is unmounting
      dispatch(clearErrors())
      // dispatch({ type: "CLEAR_ERRORS" }) send it to the reducer
    }
  }, [loggedIn, navigate, dispatch, setErrors])

  const handleSubmit = e => {
    e.preventDefault();
    const user = { username, password }
    dispatch(loginUser(user, navigate))
  }

  return (
    // <form onSubmit={ handleSubmit }>
    //   <h1>Login</h1>

    //   <div>
    //     <label htmlFor="username">Username: </label>
    //     <input 
    //       type="text" 
    //       name="username" 
    //       id="username"
    //       value={ username }
    //       onChange={ e => setUsername(e.target.value) }
    //       required={true}
    //      />
    //   </div>
    //   <div>
    //     <label htmlFor="password">Password: </label>
    //     <input 
    //       type="password"
    //       name="password" 
    //       id="password"
    //       value={ password }
    //       onChange={ e => setPassword(e.target.value) }
    //       required={true}
    //      />
    //   </div>

    //   <input type="submit" value="Login" />
    // </form>

    //LOG IN FORM
    
    <Card className="place-content-center" color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        LOG IN
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your info to log in.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={ handleSubmit }>
        <div className="mb-4 flex flex-col gap-6">
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
          Sign IN
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <a
            href='/signup'
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign UP
          </a>
        </Typography>
      </form>
    </Card>

  )
}

export default Login