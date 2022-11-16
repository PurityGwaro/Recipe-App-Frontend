import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return(
    <div
    className='loader'
    >
         <Spinner animation="grow" />
    </div>
  )
}

export default Loader;
