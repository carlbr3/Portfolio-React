
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
                    <img className='p-5-md' src="/assets/img/profilepic.jpeg" alt="Brandon Carlson" class="img-thumbnail" width="375/10"/>
                    <img className='p-5-md' src="/assets/img/github avatar.png" alt="Brandon Carlson" class="img-thumbnail" width="375/10"/>
                    </div>
                </div>
                <div className="container-col-md-8 body main pt-4" id='brand-statement'>
                    <h1 className='monospace-header d-flex justify-content-center'>Welcome to Brandon Carlson's Portfolio!</h1>

                    <p className='d-flex justify-content-center'>
                    The purpose of building this simple portfolio page is to highlight the use of React. There are links to my existing portfolio, highlighting some of the projects completed in this bootcamp.  There is also a link to my resume, and a list of tools learned in this bootcamp. Please complete the contact form for any questions you may have! I am hoping that this provides a clear example that I'm capable of writing code and displaying the tools learned in this bootcamp to a future employer. Happy Coding!
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

                  