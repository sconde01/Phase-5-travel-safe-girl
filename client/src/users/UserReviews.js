import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from '../redux/actions/errors';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
  } from "@material-tailwind/react";  


const UserReviews = () => {
  const { currentUser } = useSelector(store => store.usersReducer)

  const user_reviews = currentUser?.reviews?.map(review =>
    <Card color="blue-gray" >
    <div key={review.id} >
      <h6>{ review.username }:</h6>
      <h2>{ review.review_title }</h2>
      <p>{ review.review_body }</p>
      <br/>
      <p> Safe: { String(review.safe) } </p>
      <p>Budget Friendly: { String(review.budget_friendly) }</p>
      <i>Written: {new Date(Date.parse(review.created_at)).toLocaleDateString('en-US')}</i>
    </div>
    </Card>
    )




  // const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if(!loggedIn) {
  //     navigate('/login')
  //   }
  //   return () => {
  //     dispatch(clearErrors)
  //   }
  // }, [loggedIn, navigate, dispatch])

  
 
  return (
    <div>
    <Card className="mt-8 w-100 place-content-center">
    <CardHeader color="blue-gray" className="relative h-50">
      {/* <img src={ place.image_url }alt="img-blur-shadow" layout="fill" /> */}
    </CardHeader>
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-2">
      { user_reviews }
      </Typography>
      <Typography>
      {/* { place.description } */}
      </Typography>
      <br/>
      <Typography> Location: &nbsp;
      {/* { place.location } */}
      </Typography>
      <Typography> Category: &nbsp;
      {/* { place.category } */}
      </Typography>
      <Typography> Safety-features: &nbsp;
      {/* { place.safety_features } */}
      </Typography>
    </CardBody>
    <CardFooter className="pt-1 space-y-6" >
      {/* { show_reviews } */}
     </CardFooter>
  </Card>
    {/* <Button className="mt-5 ml-7 mr-7 w-90 place-content-center pt-3" >
      { loggedIn ? (
        <Link to={(`/places/${place.id}/new-review`)}>Add a Review</Link>) : (
        <Link to="/login">Log in to add a Review</Link>)
      }
    </Button> */}
     </div>
  )
}


export default UserReviews