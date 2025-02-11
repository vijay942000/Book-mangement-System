
import { Link, useRouteError } from "react-router-dom";
import "./style.css"


function Error(){
    const err = useRouteError();

    return(<>

    <div className="error">
    <Link to='/Home'>
    <span>Home</span>
    </Link>

    <h1> oops!  page not found</h1>
    <h3>{err.status}{err.statusText}</h3>
    <h3>{err.data}</h3>
    </div>
    </>)
}


export default Error;