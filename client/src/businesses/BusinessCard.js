import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

const BusinessCard = ({business}) => {
  const navigate = useNavigate();

  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardBody>
   {/* <CardHeader color="blue-gray" className="relative h-50"> */}
      <img src={ business.image_url }alt="img-blur-shadow" layout="fill" />
      {/* </CardHeader> */}
      <Typography variant="h5" color="blue-gray" className="mb-2">
      { business.name }
      </Typography>
    </CardBody>
    
    {/* <CardFooter className="pt-0">
    <Button onClick={() => navigate(`/places/${place.id}`)}>Reviews</Button>
     </CardFooter> */}
  </Card>
  )
}

export default BusinessCard