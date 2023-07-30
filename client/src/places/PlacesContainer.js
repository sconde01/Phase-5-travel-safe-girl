import { useSelector } from 'react-redux';
import PlaceCard from './PlaceCard';
import header_travel_safe from '../assets/header_travel_safe.png'
import { useState } from 'react';
import Search from '../Search';

const PlacesContainer = () => {

  const { places } = useSelector(store => store.placesReducer);
  const[searchTerm, setSearchTerm] = useState("");

  const displayedPlaces = places.filter((place) => {
    return place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.safety_features.toLowerCase().includes(searchTerm.toLowerCase())
  });

  const placeCards = displayedPlaces.map((place, idx) => <PlaceCard key={idx} place={place}/>);
  // const placeCards = places.map((place, idx) => <PlaceCard key={idx} place={place}/>)
  

  return (
      <div className="h-150 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
       <div className="mx-auto max-w-screen-md py-11">
       <img src = { header_travel_safe } alt="travel"/>
       <br/>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>  
      </div>
      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-3 justify-center">{placeCards}</div>

      </div>
  )
}

export default PlacesContainer