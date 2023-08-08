import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button, 
  Collapse
} from "@material-tailwind/react";

const PlaceCard = ({place}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
 
  const toggleOpen = () => setOpen((cur) => !cur);

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
        <Typography><b> Location:</b>  &nbsp;
        { place.location }
        </Typography>
        <Typography><b> Category:</b> &nbsp;
        { place.category }
        </Typography>
        <Typography><b> Safety-features:</b> &nbsp;
        { place.safety_features }
        </Typography>

     <br/>
     <CardFooter className="pt-0  ">
      <Button className = " mr-5 place-content-center justify-center pt-3" onClick={toggleOpen}>See More</Button>
      <Collapse open={open}>
      <Typography>{ place.description }</Typography>
       <br/>
      <Button sx={{ width: 20, paddingRight: 2, fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} color='orange' size='lg' variant="outlined"
      onClick={() => navigate(`/places/${place.id}`)}>See Reviews</Button>
      <br/>
      {/* I want to see if navigate or Link works best */}
      <Button sx={{ width: 20, paddingRight: 2, fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} color='orange' size='lg' variant="outlined">
       <Link to={(`/places/${place.id}/new-review`)}>Add a Review</Link> </Button>
      </Collapse>
      </CardFooter>
  
      </CardBody>
    
    </Card>
    <br/>
   </div>

  )
}

export default PlaceCard