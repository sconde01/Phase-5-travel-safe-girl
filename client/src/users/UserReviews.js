// import React, { useState, useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { clearErrors } from '../redux/actions/errors';
import { deleteReview } from '../redux/actions/places';

import {
  Card,
  Button
  } from "@material-tailwind/react";  


const UserReviews = ({review}) => {
  const { currentUser } = useSelector(store => store.usersReducer)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    //debugger
    dispatch(deleteReview(review.id))
  };

  const user_reviews = currentUser?.reviews?.map(review =>
    <div key={review.id} >
      <br/>
    <Card color="gray" >
      <h6>{ review.username }</h6>
      <h2>{ review.review_title }</h2>
      <p>{ review.review_body }</p>
      <br/>
      <p> Safe: { String(review.safe) } </p>
      <p>Budget Friendly: { String(review.budget_friendly) }</p>
      <i>Written: {new Date(Date.parse(review.created_at)).toLocaleDateString('en-US')}</i>
      
      {/* This link routes user to edit form */}
     <Button sx={{ width: 50, paddingRight: 2, fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} color='orange' size='md' variant="text" type='edit' 
     onClick={() => navigate(`/reviews/${review.id}/edit`)}>edit</Button>
        <br/>      
      <Button sx={{ width: 50, paddingRight: 2, fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} color='orange' size='md' variant="text" onClick={handleDelete} type='delete'>remove</Button>
    </Card>
    </div>
    )


  return (
    <>
    {/* {review && ( 
      )} */}
      {user_reviews}
   
     </>
  )
}


export default UserReviews