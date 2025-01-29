import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow';

export default function Footer() {
    return (
        <footer className="fixed-bottom footer-background footer-top-custom">
        <div className="container">
        <ul className="d-flex justify-content-center align-items-center list-unstyled mb-0" id='social-links'>
            <li className="px-3">
                <a href="https://github.com/carlbr3/" target="_blank">
                    <FontAwesomeIcon icon={faSquareGithub} className="icon fa-2x fa-fw" />
                </a>
            </li>
            <li className="px-3">
                <a href="https://www.linkedin.com/in/brandoncarlson2089/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="icon fa-2x fa-fw" />
                </a>
            </li>
            <li className="px-3">
                <a href="https://stackoverflow.com/users/27660712/brandon-carlson" target="_blank">
                    <FontAwesomeIcon icon={faStackOverflow} className="icon fa-2x fa-fw" />
                </a>
            </li>
        </ul>
        </div>

        </footer>    
    )

}