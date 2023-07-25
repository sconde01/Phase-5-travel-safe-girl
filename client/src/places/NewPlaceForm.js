import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors, setErrors } from '../redux/actions/errors'
import { addPlace } from '../redux/actions/places'
import {Button} from "@material-tailwind/react";

const NewPlaceForm = () => {
  const { loggedIn, currentUser } = useSelector(store => store.usersReducer)
  console.log("loggedin NewPlace form", loggedIn)
  console.log("current user at NewPlaceform", currentUser)

  const initialState = {
    name: "",
    location: "",
    description: "",
    safety_features: "",
    image_url: "",
    user_id: currentUser?.id
  }

  const [ formData, setFormData ] = useState(initialState)

  const navigate = useNavigate();
  const dispatch = useDispatch();
 // Inside NewPlaceForm component


console.log("active route:", window.location.pathname);
console.log("navigate:", navigate);

  useEffect(() => {
    if(!loggedIn) {
      navigate('/login')
    }
    return () => {
      dispatch(clearErrors)
    }
  }, [loggedIn, navigate, dispatch])

  const handleChange = e => {
    const {name, value} = e.target;
    console.log(value)
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addPlace(formData, navigate, setErrors))
  }

  //category dropdown
  // const { places } = useSelector(store => store.placesReducer)


  // const category_dropdown = places.map( place =>
  //   <option 
  //     children={place.id} 
  //     key={place.id}>
  //     {place.category}
  //   </option>
  // )  
  //console.log ("categ drop", category_dropdown)
    
  
  return (
    <div>
      <h1><center>Add a New Place!</center></h1>
      <form className="mt-5 ml-7 mr-7 w-90 place-content-center pt-3" onSubmit={handleSubmit}>
      
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
            Name
          </label>
          <input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight  focus:outline-none " 
            id="name" 
            type="text"
            name = "name" 
            placeholder="What is the name of this place?"
            value={ formData.name}
            onChange={handleChange}/>
       {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>

        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Location
          </label>
          <input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="location" 
            type="text" 
            name = "location"
            placeholder="Where is this place? (city, state, country)"
            value={ formData.location}
            onChange={handleChange}/>
        </div>
     </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Description
          </label>
          <textarea 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="description" 
            name = "description"
            type="text" 
            placeholder="Tell us about this place"
            value={ formData.description}
            onChange={handleChange}/>
         <p className="text-gray-600 text-xs italic">Max 200 characters</p>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
            Safety Features
          </label>
          <input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="safety_features" 
            type="text" 
            name = "safety_features"
            placeholder="What made you feel safe?"
            value={ formData.safety_features}
            onChange={handleChange}/>
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
            Category
          </label>
          <div className="relative">
            <select 
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="category"
              name ="category"
              type = "text"
              value={ formData.category}
              onChange={handleChange}>
               <option> -- select an option -- </option>
              {/* {category_dropdown} */}
            </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
              Image URL
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="image_url" 
              type="text" 
              name ="image_url"
              placeholder="Share an Image URL!"
              value={ formData.image_url}
              onChange={handleChange}/>
          </div>
        </div>
        <Button className="mt-5 ml-7 mr-7 w-90 place-content-center pt-3" type="submit" value="Add Place" > Add Place</Button>
</form>
    </div>
  )
}

export default NewPlaceForm