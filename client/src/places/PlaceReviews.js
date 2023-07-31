import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from '../redux/actions/errors';

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
  } from "@material-tailwind/react";  
  import {
    UserCircleIcon
  } from "@heroicons/react/24/outline";
  

const PlaceReviews = () => {
  const { places }  = useSelector(state => state.placesReducer)
  const { loggedIn } = useSelector(store => store.usersReducer)
  const id = parseInt(useParams().id);

  //console.log("placesReducer at Place REviews", places)

  const place = places?.find(place => place.id === id);
  //console.log ("place at reviews", place)

  const show_reviews = place?.reviews?.map(review =>
    <div key={review.id} className="border-double border-4 border-indigo-600 rounded">
    <div className ="pl-8">
      
      <h6 className="italic flex items-center gap-2 py-2 pr-4 "><UserCircleIcon className="h-[18px] w-[18px] " />{ review.username }</h6>
      <br/>
      <Typography className="font-bold text-lg">{ review.title }
      </Typography>
      <br/>
      <p>{ review.body }</p>
      <br/>
      <p> <b>Safe:</b>{ String(review.safe) } </p>
      <br/>
      <p><b>Budget Friendly:</b> { String(review.budget_friendly) }</p>
      <br/>
      <i>Written: {new Date(Date.parse(review.created_at)).toLocaleDateString('en-US')}</i>
    </div>
    </div>
   

 
    )

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if(!loggedIn) {
  //     navigate('/login')
  //   }
  //   return () => {
  //     dispatch(clearErrors())
  //   }
  // }, [loggedIn, navigate, dispatch])

  // if (!place) {
  //   return <div>Loading...</div>; 
  // }
 
  return (
    <div className ="h-200 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
     
      <div key={place.id} className="mx-auto max-w-screen-md py-12">
      <br/>
      <br/>
    <Card key={place.id} className="shadow-lg mb-12 overflow-hidden border rounded ">
    <CardBody key={place.id}>
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
     <>
     Business: &nbsp;
      <Link key={place.id} to={(`/businesses/${id}`)}> { place?.business.name }</Link>
     </> 
  
    </CardBody>
    <CardFooter className="pt-1 space-y-6" >
      { show_reviews }
     </CardFooter>
    <Button className="mt-5 ml-7 mr-7 w-90 place-content-center pt-3" >
      { loggedIn ? (
        <Link to={(`/places/${id}/new-review`)}>Add a Review</Link>) : (
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