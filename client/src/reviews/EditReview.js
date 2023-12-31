import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { clearErrors, setErrors } from '../redux/actions/errors'
import {Button} from "@material-tailwind/react";
import { editReview } from '../redux/actions/places';

const EditReview = () => {
  const { currentUser } = useSelector(store => store.usersReducer)
  // const  { places }  = useSelector(store => store.placesReducer)
  const id = parseInt(useParams().id);
  
  const review = currentUser?.reviews?.find(review => review.id === id);
  
  // console.log("review at editreview",review)

  
  // const placeId = place ? place.id : null;
  
  const initialState = {
    title: review.title,
    body: review.body,
    safe: review.safe,
    budget_friendly: review.budget_friendly,
    // place_id: placeId,
    // user_id: currentUser?.id
  }
  
  const [ formData, setFormData ] = useState(initialState)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleChange = e => {
    const {name, value} = e.target;
    //console.log(value)
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    //debugger
    dispatch(editReview(id, formData, navigate, setErrors))
  }

  
  return (
      <div className="h-172 bg-gradient-to-r from-purple-600 to-blue-600">
      <br/>
     <label className="block uppercase tracking-wide text-white text-xl font-bold mb-2"><center>EDIT Review
      <br/>
      <b>{ review.place_name }!</b></center></label> 
    <center><img src={ review.place_image }alt="img-blur-shadow"  className='h-96 w-96 rounded-full object-cover object-center' /></center>
    
    <form className="mt-5 ml-7 mr-7 w-90 place-content-center px-3" onSubmit={handleSubmit}>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
          Title of your review
        </label>
        <input 
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight  focus:outline-none " 
          id="title" 
          type="text"
          name = "title" 
          value={ formData.title}
          onChange={handleChange}/>
     {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
      </div>
   </div>

    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
          Review
        </label>
        <textarea 
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          id="description" 
          name = "body"
          type="text" 
          value={ formData.body}
          onChange={handleChange}/>
       <p className="text-gray-600 text-xs italic">Max 500 characters</p>
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-state">
          Did you feel safe at this place?
        </label>
        <div className="relative">
          <select 
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="safe"
            name ="safe"
            value={ formData.safe}
            onChange={handleChange}>
             <option> -- select an option -- </option>
             <option value="true">Yes</option>
             <option value="false">No</option>
          </select>
        </div>
      </div>
      
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-state">
          Is this place budget friendly?
        </label>
        <div className="relative">
          <select 
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="budget_friendly"
            name ="budget_friendly"
            // type = "text"
            value={ formData.budget_friendly}
            onChange={handleChange}>
             <option> -- select an option -- </option>
             <option value="true">Yes</option>
             <option value="false">No</option>
          </select>
        </div>
      </div>
      </div>

      <Button className="mt-5 ml-7 mr-7 w-90 place-content-center pt-3" type="submit" value="Add Place" > UPDATE Review</Button>
      &nbsp;
      <br/>
</form>
<br/>
  </div>
  )
}


export default EditReview