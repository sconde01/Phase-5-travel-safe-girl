import React from 'react'
import {useParams } from "react-router-dom";
import { useSelector } from 'react-redux';


const BusinessList = () => {
  const businesses = useSelector(store => store.businessesReducer)
  const id = parseInt(useParams().id);

  // I want to see a LIST of all businesses
  
  // Find the business with the specified id
  const business = businesses?.find(bus => bus.id === id);
  console.log("business", business)

  if (!business) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Business List
      <h1>{business.name}</h1>
      <img src={business.image_url} alt={business.name} />
    </div>
  );
}

export default BusinessList