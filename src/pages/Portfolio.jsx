import React,{useEffect} from "react";
import Project from "../components/Project";

const Portfolio = () => {
    useEffect(() => {
        document.title = "Portfolio - Brandon Carlson";
    }, []);
    const projects = [
        {
            title: "Project 1",
            description: "This is a description of project 1",
            image: "https://via.placeholder.com/150",
            repository: ""
        },
        {
            title: "Project 2",
            description: "This is a description of project 2",
            image: "https://via.placeholder.com/150",
            repository: ""
        },
        {
            title: "Project 3",
            description: "This is a description of project 3",
            image: "https://via.placeholder.com/150",
            repository: ""
        },
        {
            title: "Project 4",
            description: "This is a description of project 4",
            image: "https://via.placeholder.com/150",
            repository: ""
        }
    ];
    //Add the upcoming projects to the Project component
    
    return (
        <div className="container mb-5">
            <div className="row">
                {projects.map((project, index) => (
                    <Project 
                    key={index} 
                    title={project.title} 
                    description={project.description} 
                    image={project.image} 
                    repository={project.repository} />
                ))}
            </div>
        </div>
    );
    };

    export default Portfolio;