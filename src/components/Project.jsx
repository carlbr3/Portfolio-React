//import React from 'react';

const Project = ({ title, image, deployedLink, deployedVideo, repoLink }) => {
    return (
        <div className="container col-12 col-md-4 mb-3 px-3 pt-5 body-main">
            <div className="project">
                <h3 className="lora-header">{title}</h3>
                <img className="projects-screenshot" src={image} alt={`${title} screenshot`} />
                <div className="project-links">
                    {deployedLink ? (
                        <a className='raleway-nav' href={deployedLink} target="_blank" rel="noopener noreferrer">View Deployed App</a>
                    ) : (
                        <a className='raleway-nav' href={deployedVideo} target="_blank" rel="noopener noreferrer">View Deployed Video</a>
                    )}
                    <br />
                    <a className='raleway-nav' href={repoLink} target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
                </div>
            </div>
        </div>
    );
};

export default Project;