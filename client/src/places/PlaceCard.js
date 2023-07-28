import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

const PlaceCard = ({place}) => {
  const navigate = useNavigate();
  // const currentUser = useSelector(store => store.usersReducer.currentUser);




  return (
    <div className='px-7'>
    <br/>
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardBody>
      <img src={ place.image_url }alt="img-blur-shadow" layout="fill" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
        { place.name }
        </Typography>
        <Typography>
        { place.description }
        </Typography>
        <br/>
        <Typography> Location: &nbsp;
        { place.location }
        </Typography>
        <Typography> Category: &nbsp;
        { place.category }
        </Typography>
        <Typography> Safety-features: &nbsp;
        { place.safety_features }
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Button sx={{ width: 50, paddingRight: 2, fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} color='orange' size='lg' variant="outlined"
      onClick={() => navigate(`/places/${place.id}`)}>See Reviews</Button>
      &nbsp;
      <Button sx={{ width: 50, paddingRight: 2, fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} color='orange' size='lg' variant="outlined"
      onClick={() => navigate(`/places/${place.id}/new-review`)}>Add Review</Button>
       </CardFooter>
    </Card>
    <br/>
   </div>

  )
}

export default PlaceCard