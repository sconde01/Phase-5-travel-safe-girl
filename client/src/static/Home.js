import React from 'react';
import {  Link } from 'react-router-dom';
import {
  Typography,
  Button,
  Card,
} from "@material-tailwind/react";
// import Barb_review  from '../assets/reviews/Barb_review.png';


function Home() {

  return (
    <div className="h-172 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">

    <div className="mx-auto max-w-screen-md py-12">
    <Card className="mb-12 overflow-hidden">
      <img
        alt="nature"
        className="h-[32rem] w-full object-cover object-center"
        src="https://i.pinimg.com/564x/83/ec/da/83ecda59f7fccf9e2dc605c1740d9c1e.jpg"
      />
    </Card>
    <Typography variant="h2" color="white" className="mb-2">
      Travel Safe, Girl!
    </Typography>
    <Typography color="white" className="font-sans font-bold text-xl">
      See what other girlies are saying about the top experiences in the world!!
    </Typography>
     &nbsp;
    <Typography color="white" className="font-sans font-bold text-xl">
      Whether you are traveling alone or with your girl group! Check it out and make sure it is SAFE!
    </Typography>
  </div>

  <div className="flex flex-wrap grid-cols-4 gap-10 justify-center">
  <img
      className="h-96 w-96 rounded-full object-cover object-center"
      src="https://i.pinimg.com/564x/9f/6e/0a/9f6e0ad6e004c95e17f0e8072a892636.jpg"
      alt="nature"
    />
  <img
      className="h-96 w-96 rounded-full object-cover object-center"
      src="https://i.pinimg.com/564x/16/43/b3/1643b30a57089e9dc69508ea0945226a.jpg"
      alt="girl traveling"
    />
  <img
      className="h-96 w-96 rounded-full object-cover object-center"
      src="https://i.pinimg.com/564x/17/30/4d/17304d64175c47f4b65293c2b58ec0b1.jpg"
      alt="nature "
    />
    </div>
    <br/>
    <br/>
    <br/>
  {/* <div className="flex flex-wrap grid-cols-4 gap-10 justify-center">
  <img
      className="h-96 w-96 squared-full object-fit: cover object-center"
      src={Barb_review}
      alt="nature image"
    />
  <img
      className="h-96 w-96 rounded-full object-cover object-center"
      src="https://i.pinimg.com/564x/16/43/b3/1643b30a57089e9dc69508ea0945226a.jpg"
      alt="girl traveling"
    />
  <img
      className="h-96 w-96 rounded-full object-cover object-center"
      src="https://i.pinimg.com/564x/17/30/4d/17304d64175c47f4b65293c2b58ec0b1.jpg"
      alt="nature image"
    />
    </div> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className=" flex items-center justify-center ">
    <Button className="block w-25 px-24 py-3 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"> <Link to= '/places'> <p className="text-2xl">Start Exploring Places</p></Link> </Button>
    </div>
   <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

  </div>
)}

export default Home; 
