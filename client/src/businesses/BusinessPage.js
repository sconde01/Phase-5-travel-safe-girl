import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography
  } from "@material-tailwind/react";  

const BusinessPage = () => {
//I want to show an individual business's details when someone clicks on `/business/${id}` from the UserReviews page

const businesses = useSelector (store => store.businessesReducer)
const id = parseInt(useParams().id);
  
const business = businesses.find(business => business?.id === id);



  return (
    <>
    <div>BusinessPage
         <h1>{business?.name}</h1>
        <img src = {business?.image_url}/>
         **next list the places that this business has listed on here**
    </div>

    


    
</>
  )
}

export default BusinessPage