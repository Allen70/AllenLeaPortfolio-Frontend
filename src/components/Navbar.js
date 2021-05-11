import { Link} from 'react-router-dom'

export function Navbar(){
    return(
        <div className="navbaar">
            <nav>
                <Link to='/professional'>Professional</Link> | <Link to='/personal'>Personal</Link> | <Link to='/arcade'>Arcade</Link> 
            </nav>
        </div>
    )
}