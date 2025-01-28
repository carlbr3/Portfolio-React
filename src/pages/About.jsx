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
                    <img className='p-5-md' src="/public/assets/img/github avatar.png" alt="Brandon Carlson" />
                    </div>
                </div>
                <div className="container-col-md-8 body main pt-4" id='brand-statement'>
                    <h1 className='monospace-header d-flex justify-content-center'>Welcome to Brandon Carlson's Portfolio!</h1>

                    <p className='d-flex justify-content-center'>
                        This is a simple portfolio website created using React. It is a single page application with routing.
                    </p>
                    <p className='d-flex justify-content-center'>
                        The website is hosted on GitHub Pages. The source code is available on GitHub.
                    </p>
                    <p className='d-flex justify-content-center'>
                        <strong>Connect with me:</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

                  