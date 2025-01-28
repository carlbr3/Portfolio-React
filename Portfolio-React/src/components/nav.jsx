import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light' data-bs-theme='dark'>
            <div className='container-fluid'>
                <Link className="navbar-brand nav-item" to='/'>
                    <FontAwesomeIcon icon={faHouse} id='home-icon' />Brandon
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item px-3'>
                            <Link className='nav-link' to='/about'>Portfolio</Link>
                        </li>
                        <li className='nav-item px-3'>
                            <Link className='nav-link' to='/contact'>Resume</Link>
                        </li>
                        <li className='nav-item px-3'>
                            <Link className='nav-link' to='/projects'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
