import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <div id="navbar">
          <Link to="/"><button id="home">Home</button></Link>
          <Link to="/blue"><button id="blue">Blue</button></Link>
          <Link to="/red"><button id="red">Red</button></Link>
        </div>
    )
}