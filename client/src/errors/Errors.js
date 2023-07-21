import { useSelector } from "react-redux";

 const Errors = () => {
  const errors = useSelector(store => store.errorsReducer)
  const errorList = errors.map((error, idx) => 
    
    <h6 key={idx}> { error } </h6>) ;

  return (
    <div>{ errorList }</div>
  )
}

export default Errors