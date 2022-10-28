import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navigation'>
        <div className="navigation__links">
            <Link to='/leaderboard'>Leaderboard</Link>
            <Link to='dashboard'>Dashboard</Link>
        </div>

        <div className="navigation__title">
            TOOLHUB
        </div>
    </nav> 
  )
}

export default Navbar;
