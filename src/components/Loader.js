import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return(
    <div
    style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"100vh"
    }}
    >
         <Spinner animation="grow" />
    </div>
  )
}

export default Loader;