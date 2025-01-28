import React from 'react';


const Project = ({title, image, description, repoLink})=>{
    return(
        <div className="container col-12 col-md-4 mb-3 px-3 body-main">
            <div className='project'>
                <h2 className='monospace-header'>{title}</h2>
                <img className='projects-screenshot' src={image} alt={`${title} screenshot`}/>
                <div className='project-description'>
                    <p>{description}</p>
                </div>
                <div className='project-links'>
                    <a href={repoLink} target='_blank' rel='noreferrer'>View Repository</a>
                </div>
            </div>
        </div>
    );
}
