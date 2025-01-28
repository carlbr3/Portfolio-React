import { useState, useEffect } from 'react';

export default function Form() {
    useEffect(() => {
        document.title = "Contact Me - Brandon Carlson's Portfolio";
    }, []);
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let newErrors = { ...errors };

        if (name === 'fullName') {
            setFullName(value);
            if (!value) {
                newErrors.fullName = 'Full name is required';
            } else {
                delete newErrors.fullName;
            }
        } else if (name === 'emailAddress') {
            setEmailAddress(value);
        
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!value) {
                newErrors.emailAddress = 'Email address is required';
            } else if (!emailPattern.test(value)) {
                newErrors.emailAddress = 'Please check your input. The email address appears to be invalid.'
            } 
            {
                delete newErrors.emailAddress;
            }
        } else if (name === 'userMessage') {
            setUserMessage(value);
            if (!value) {
                newErrors.userMessage = 'Message is required';
            } else {
                delete newErrors.userMessage;
            }
        }

        setErrors(newErrors);
    };
    
    const handleBlur = (e) => {
        const { name, value } = e.target;
        let newErrors = { ...errors };

        if (name === 'fullName' && !value) {
            newErrors.fullName = 'Full name is required';
        } else if (name === 'emailAddress') {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!value) {
                newErrors.emailAddress = 'Email address is required';
            } else if (!emailPattern.test(value)) {
                newErrors.emailAddress = 'Please check your input. The email address appears to be invalid.';
            } else {
                delete newErrors.emailAddress;
            }
        } else if (name === 'userMessage' && !value) {
            newErrors.userMessage = 'Message is required';
        }

        setErrors(newErrors);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!fullName) newErrors.fullName = 'Full name is required';
        if (!emailAddress) newErrors.emailAddress = 'Email address is required';
        if (!userMessage) newErrors.userMessage = 'Message is required';
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {

        }
    };

    return (
        <div className="container">
            <div className="row pt-5">
                <div className="container col-md-6 body-main pt-5">
                    <h1 className="lora-header">Contact Me!</h1>
                    <form className="form mt-5" onSubmit={handleFormSubmit}>
                        <input
                            className="form-control w-100 mb-3 bg-dark text-light raleway-body"
                            value={fullName}
                            name="fullName"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Your Name"
                        />
                        {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
                        <input
                            className="form-control w-100 mb-3 bg-dark text-light raleway-body"
                            value={emailAddress}
                            name="emailAddress"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            type="email"
                            placeholder="Your email address"
                        />
                        {errors.emailAddress && <div className="text-danger">{errors.emailAddress}</div>}
                        <textarea
                            className="form-control w-100 mb-3 bg-dark text-light raleway-body"
                            value={userMessage}
                            name="userMessage"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            placeholder="Your Message"
                            rows="5"
                        />
                        {errors.userMessage && <div className="text-danger">{errors.userMessage}</div>}
                        <button className="btn btn-outline-primary w-100" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}