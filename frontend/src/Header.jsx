import {Link} from "react-router-dom"

const Header=()=>{
    return(<>
        <div className="Nav-bar">
        
        <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/add' >Add</Link></li>
        <li><Link to='/delete' >delete</Link></li>
        <li><Link to='/update' >update</Link></li>
       </ul>
        </div>
        </>);
}
export default Header