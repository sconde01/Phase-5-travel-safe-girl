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
  

const PlaceReviews = () => {
  const { places }  = useSelector(state => state.placesReducer)
  const { loggedIn } = useSelector(store => store.usersReducer)
  const id = parseInt(useParams().id);

  const place = places.find(place => place.id === id);
  console.log ("place at reviews", place)

  const show_reviews = place?.reviews?.map(review =>
      
    <div class="border-double border-4 border-indigo-600">
    <div key={review.id} className ="pl-8">
      <h6 className="italic">user: { review.username }</h6>
      <br/>
      <h1 className="font-bold">{ review.title }</h1>
      <br/>
      <p><i>Review:</i></p>
      <p>{ review.body }</p>
      <br/>
      <p> Safe: { String(review.safe) } </p>
      <br/>
      <p>Budget Friendly: { String(review.budget_friendly) }</p>
      <br/>
      <i>Written: {new Date(Date.parse(review.created_at)).toLocaleDateString('en-US')}</i>
    </div>
    </div>

 
    )




  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login')
    }
    return () => {
      dispatch(clearErrors)
    }
  }, [loggedIn, navigate, dispatch])

  
 
  return (
    <div className ="h-200 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
      <div className ="flex items-center justify-center ">
      <br/>
      <br/>
    <Card className="shadow-lg">
    <CardBody>
      <img src={ place?.image_url }alt="img-blur-shadow" layout="fill" />
      <Typography variant="h5" color="blue-gray" className="mb-2">
      { place?.name }
      </Typography>
      <Typography>
      { place?.description }
      </Typography>
      <br/>
      <Typography> Location: &nbsp;
      { place?.location }
      </Typography>
      <Typography> Category: &nbsp;
      { place?.category }
      </Typography>
      <Typography> Safety-features: &nbsp;
      { place?.safety_features }
      </Typography>
      <Typography> Business: &nbsp;
      <Link to={(`/businesses/${id}`)}> { place?.business.name }</Link>
      </Typography>
    </CardBody>
    <CardFooter className="pt-1 space-y-6" >
      { show_reviews }
     </CardFooter>
    <Button className="mt-5 ml-7 mr-7 w-90 place-content-center pt-3" >
      { loggedIn ? (
        <Link to={(`/places/${place.id}/new-review`)}>Add a Review</Link>) : (
        <Link to="/login">Log in to add a Review</Link>)
      }
    </Button>
     &nbsp;
  </Card>
     &nbsp;
     &nbsp;
     <br/>
     </div>
     </div>
  )
}

export default PlaceReviews