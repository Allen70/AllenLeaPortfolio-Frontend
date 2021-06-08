import { Link} from 'react-router-dom'
import  resume  from '../data/resume.pdf'
export function Navbar(){

    return(
        <div className="navbar">
            <nav className="links">
                <Link to='/'>About</Link> 
                <Link to='/projects'>Projects</Link> 
                <Link to='/blogs'>Blogs</Link>
                <Link to={resume} target="_blank" rel="noreferrer noopener">Resume</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </div>
    )
}