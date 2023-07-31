import { Link, useNavigate } from 'react-router-dom'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

const PlaceCard = ({place}) => {
  const navigate = useNavigate();

  return (
    <div className='px-7'>
    <br/>
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardBody>
      <Link to= {`/places/${place.id}`}>
      <img src={ place.image_url }alt="img-blur-shadow" layout="fill" />
      </Link>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        { place.name }
        </Typography>
        <Typography>
        { place.description }
        </Typography>
        <br/>
        <Typography><b> Location:</b>  &nbsp;
        { place.location }
        </Typography>
        <Typography><b> Category:</b> &nbsp;
        { place.category }
        </Typography>
        <Typography><b> Safety-features:</b> &nbsp;
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