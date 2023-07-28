import { useSelector } from 'react-redux';
import PlaceCard from './PlaceCard';

const PlacesContainer = () => {

  // const { loggedIn } = useSelector(store => store.usersReducer);
  const { places } = useSelector(store => store.placesReducer);

  // useEffect(() => {
  //   if(!loading && !loggedIn) {
  //     navigate('/login')
  //   }
  // }, [loading, loggedIn, navigate])

  const placeCards = places.map((place, idx) => <PlaceCard key={idx} place={place}/>)


  return (
      <div className="h-150 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 justify-center">{placeCards}</div>
      {/* <div className="flex flex-wrap grid grid-cols-4 gap-20 justify-center">{placeCards}</div> */}
      </div>
  )
}

export default PlacesContainer