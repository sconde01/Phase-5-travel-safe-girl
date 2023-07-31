import React from 'react'
import { Typography } from "@material-tailwind/react";
import  stephlogo from '../assets/stephlogo.png'

const Footer = () => {
    return (
      <footer className="w-full bg-white p-3">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={ stephlogo } alt="logo-ct" className="w-12 h-12" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {/* <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li> */}
          <li>
            <Typography
              as="a"
              href="/businesses"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Participating Businesses
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/businesses/register"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Register Your Business
            </Typography>
          </li>
          {/* <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li> */}
        </ul>
        </div>
        <hr className="my-8 border-blue-gray-50 " />
        {/* <div className='flex justify-center items-center'>
        <img src={ stephlogo } alt="logo-ct" className="w-13 h-13 object-center " />
        </div> */}
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Steph Co(n)de
      </Typography>
      </footer>
    );
  }

export default Footer