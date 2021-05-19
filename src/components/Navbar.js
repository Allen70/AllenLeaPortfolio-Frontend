import { Link} from 'react-router-dom'

export function Navbar(){
    return(
        <div className="navbaar">
            <nav>
                <Link to='/'>Home</Link> | <Link to='/arcade'>Arcade</Link> 
            </nav>
        </div>
    )
}