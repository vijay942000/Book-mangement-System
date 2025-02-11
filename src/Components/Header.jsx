
import { Link } from "react-router-dom";
import './style.css'

function Header(){



return <>
<div className="nav">
<ul>
    <Link to="/Home">
        <li>Home</li>
    </Link>
    <Link to="/browseBooks">
        <li>Browse Books</li>
    </Link>
    <Link to="/addBook">
        <li>Add Book</li>
    </Link>
   
</ul>
</div>

</>
}
export default Header;