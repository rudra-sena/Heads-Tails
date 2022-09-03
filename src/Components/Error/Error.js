import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return ( 
        <div className="error">
        <h1>404 Error</h1>
        <h4>The resource you were looking for is not found</h4>
        <Link to="/"><h6>Go to home page</h6></Link>
        </div>
     );
}
 
export default Error;