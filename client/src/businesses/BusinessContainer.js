import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import BusinessCard from './BusinessCard';


const BusinessContainer = () => {
  const businesses = useSelector(store => store.businessesReducer)

  // I want to see a LIST of all businesses
  
  // Find the business with the specified id
  const businessCards = businesses.map((business, idx) => 
  <BusinessCard key={idx} business={business}/>)



  return (
    <>
    <div className="h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
    <br/>
    <div className="flex flex-wrap grid grid-cols-4 gap-10">
      {businessCards}
      </div>
   </div>
   </>

  );
}

export default BusinessContainer