import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {Link}   from 'react-router-dom';
import { useEffect} from 'react';

export default function About() {
    useEffect(() => {
        document.title = "About - Brandon Carlson's Portfolio";
    }, []);
    return (
        <div className="container">
            <div className="row pt-4  mb-5">
                <div className="container-col-md-4 body main pt-4">
                    <div className='d-flex justify-content-center'>
                    <img className='p-5-md' src="/images/brandon.jpg" alt="Brandon Carlson" />
                        <Link to="/contact">
                            <button type="button" className="btn btn-primary">Contact Me</button>
                        </Link>
                    </div>
                </div>
                <div className="container-col-md-8 body main pt-4" id='brand-statement'>
                    <h1 className='monospace-header'>Welcome to Brandon Carlson's Portfolio!</h1>
                    <ul id='social-links'>
                        <li className='p-2'>
                            <a href="https://github.com/carlbr3" target="_blank">
                                <FontAwesomeIcon icon={faGithub} className='fa-2x' />
                            </a>
                        </li>
                        <li className='p-2'>
                            <a href="https://www.linkedin.com/in/carlbr3/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} className='fa-2x' />
                            </a>
                        </li>
                    </ul>
                    <p>
                        This is a simple portfolio website created using React. It is a single page application with routing.
                    </p>
                    <p>
                        The website is hosted on GitHub Pages. The source code is available on GitHub.
                    </p>
                    <p>
                        <strong>Connect with me:</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

                  