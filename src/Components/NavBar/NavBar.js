import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <>
        <div className="header">
            <Link to="/"><div><button className="nav-btn" onClick>Home</button></div></Link>
            <Link to="/about"><div><button className="nav-btn" onClick>About</button></div></Link>
            <Link to="/toss"><div><button className="nav-btn" onClick>Head &amp; Tail</button></div></Link>
        </div>
        </>
     );
}
 
export default NavBar;