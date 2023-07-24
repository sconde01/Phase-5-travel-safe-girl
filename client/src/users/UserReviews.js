// import React, { useState, useEffect } from 'react'
import { Link  } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { clearErrors } from '../redux/actions/errors';

import {
  Card,
  Button
  } from "@material-tailwind/react";  


const UserReviews = () => {
  const { currentUser } = useSelector(store => store.usersReducer)

  const handleDelete = () => {
    // dispatch()
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
      <Link to={`/reviews/${review.id}/edit`} style={{float: 'right'}}> Edit </Link> 
        <br/>  
      {/* <Link to="#" onClick= {() => {handleDelete(review)}}>Delete</Link> */}
        {/* <button onClick={handleDelete}>Delete</button> */}
        <Button sx={{ width: 50, paddingRight: 2, fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} color='lightsage' size='small' variant="text" onClick={handleDelete} type='delete'>remove</Button>
    </Card>
    </div>
    )


  return (
    <>
    
   {user_reviews}
   
     </>
  )
}


export default UserReviews