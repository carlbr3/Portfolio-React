import React,{useEffect} from "react";
import Project from "../components/Project";

const Portfolio = () => {
    useEffect(() => {
        document.title = "Portfolio - Brandon Carlson";
    }, []);
    const projects = [
        {
            title: "Page-Timings",
            description: "This project was created to be able to track the timing for each page that is being read on a script for a stagehand",
            image: "assets/img/Page Timings.png",
            deployedvideo: "https://www.youtube.com/watch?v=Q8v3h3Y2J1c",
            repository: "https://github.com/carlbr3/Page-Timings"
        },
        {
            title: "README-Generator",
            description: "This repository is where I developed a command line application to quickly create a professional README for new projects.",
            image: "./assets/img/README Generator.png",
            deployedvideo: "https://drive.google.com/file/d/10dZTy39GpLwUWAY-XnTRNkHNeLDh7fif/view",
            repository: "https://github.com/carlbr3/README-Generator"
        },
        {
            title: "Vehicle-Build-Test",
            description: "The purpose of building this application was to demonstrate OOP (Object Oriented Programming) and show how different classes function.",
            image: "./assets/img/Vehicle-Build-Test.png",
            deployedvideo: "https://drive.google.com/file/d/1WwAg_R4XFckuzblO1gcSrXEf-EmOKiFX/view",
            repository: "https://github.com/carlbr3/Vehicle-Build-Test"
        },
        {
            title: "Weather-Dashboard-Forecast",
            description: "The purpose of this application was to build a weather dashboard that calls the OpenWeather API, then renders the data in the browser.",
            image: "https://via.placeholder.com/150",
            deployedvideo: "https://www.youtube.com/watch?v=Q8v3h3Y2J1c",
            repository: "https://github.com/carlbr3/Weather-Dashboard-Forecast"
        },
        {
            title: "Project-5",
            description: "This is a description of Project 5",
            image: "https://via.placeholder.com/150",
            deployedvideo: "https://www.youtube.com/watch?v=Q8v3h3Y2J1c",
            repository: "https://github.com/carlbr3/Project-5"
        },
        {
            title: "Project-6",
            description: "This is a description of Project 6",
            image: "https://via.placeholder.com/150",
            deployedvideo: "https://www.youtube.com/watch?v=Q8v3h3Y2J1c",
            repository: "https://github.com/carlbr3/Project-6"
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