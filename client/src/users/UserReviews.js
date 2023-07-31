// import React, { useState, useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { clearErrors } from '../redux/actions/errors';
import { deleteReview } from '../redux/actions/places';

import {
  Card,
  Button,
  CardBody,
  Typography
  } from "@material-tailwind/react";  


const UserReviews = () => {
  const { currentUser }  = useSelector(store => store.usersReducer)
  // console.log( "currentUser at UserReviews", currentUser)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    //debugger
    dispatch(deleteReview(id))
  };

  //console.log user_reviews to see currentUser.reviews
  const user_reviews = currentUser?.reviews?.map(review => 
  
    <div key={review.id} >
      <br/>
    <Card className="w-full max-w-[26rem] shadow-lg" >
    <CardBody>
      <Link to ={`/places/${review.place_id}`}>
      <img src={review.place_image} width="500" height="333"/>
      </Link>
      <br/>
      <Typography className ="text-2xl font-bold">{ review.place_name }
      </Typography>
      <br/>
      <h2><b>Title:</b> { review.title }</h2>
      <p><b> Review:</b> { review.body }</p>
      <br/>
      <p><b>Safe:</b> { String(review.safe) } </p>
      <p><b>Budget Friendly:</b> { String(review.budget_friendly) }</p>
      <i>Written: {new Date(Date.parse(review.created_at)).toLocaleDateString('en-US')}</i>
      <br/>
      <i>Updated: {new Date(Date.parse(review.updated_at)).toLocaleDateString('en-US')}</i>
      <br/>
      </CardBody>
      {/* This link routes user to edit form */}
     <Button sx={{ width: 50, paddingRight: 2, fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} color='orange' size='md' variant="text" type='edit' 
     onClick={() => navigate(`/reviews/${review.id}/edit`)}>edit</Button>
        <br/>      
      <Button sx={{ width: 50, paddingRight: 2, fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} color='orange' size='md' variant="text" onClick={() => handleDelete(review.id) } type='delete'>remove</Button>
    {/* </div> */}
    </Card>
    <br/>
    </div>
  )
  

   // Render the "You have no reviews" notification if user_reviews is empty
   const noReviewsNotification = (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardBody>
        <h2>You have no reviews</h2>
      </CardBody>
    </Card>
  );
   
  // if (!currentUser || !currentUser.reviews || currentUser.reviews.length === 0) 

  return (
    <>
    <div className="h-170 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
      &nbsp;
      <Typography color="white" className="font-sans font-bold text-xl text-center underline decoration-wavy">
       MY REVIEWS
      </Typography>
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 justify-center">
        {currentUser?.reviews?.length === 0 ? noReviewsNotification : user_reviews}
      </div>
  
       </div>
     </>
  )
}


export default UserReviews