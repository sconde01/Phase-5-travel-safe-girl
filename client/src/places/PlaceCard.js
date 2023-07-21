import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
// import { deleteBlog } from '../actions/blogs';

const PlaceCard = ({place}) => {
  const navigate = useNavigate();
  const currentUser = useSelector(store => store.usersReducer.currentUser);

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch()
  }

  return (
    // <div class="grid grid-cols-1 md:grid-cols-6">
  <Card className="mt-8 w-96">
      <CardHeader color="blue-gray" className="relative h-50">
        <img src={ place.image_url }alt="img-blur-shadow" layout="fill" />
      </CardHeader>
      <CardBody>
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
      <Button onClick={() => navigate(`/places/${place.id}`)}>Reviews</Button>
       </CardFooter>
    </Card>
//  </div>
    // <div>PlaceCard
    //   <hr />
    //   <h4><Link to={`/places/${ place.id }`}>{ place.name }</Link></h4>
    //   <p>{ place.description }</p>
    //   {/* {currentUser && currentUser.id === place.review.id ? <>
    //     <button onClick={() => navigate(`/blogs/${ blog.id }/edit`)}>Edit</button>
    //     <button onClick={handleDelete}>Delete</button>
    //   </> : null} */}
    // </div>
  )
}

export default PlaceCard