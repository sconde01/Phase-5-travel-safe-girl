import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import PlaceCard from './PlaceCard';

const PlacesContainer = () => {

  const navigate = useNavigate();
  // const { loggedIn } = useSelector(store => store.usersReducer);
  const { places } = useSelector(store => store.placesReducer);

  // useEffect(() => {
  //   if(!loading && !loggedIn) {
  //     navigate('/login')
  //   }
  // }, [loading, loggedIn, navigate])

  const placeCards = places.map((place, idx) => <PlaceCard key={idx} place={place}/>)

  const imageURL = "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"

  return (
    
      <div className="bg-local"
           style={{ backgroundImage: `url(${imageURL})`, 
           }} 
           >
      <div className="flex flex-wrap grid grid-cols-4 gap-20">{placeCards}</div>
          </div>
  )
}

export default PlacesContainer