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
            deployedlink: "https://carlbr3.github.io/Page-Timings/",
            repoLink: "https://github.com/carlbr3/Page-Timings"
        },
        {
            title: "README-Generator",
            description: "This repository is where I developed a command line application to quickly create a professional README for new projects.",
            image: "./assets/img/README Generator.png",
            deployedvideo: "https://drive.google.com/file/d/10dZTy39GpLwUWAY-XnTRNkHNeLDh7fif/view",
            repoLink: "https://github.com/carlbr3/README-Generator"
        },
        {
            title: "Vehicle-Build-Test",
            description: "The purpose of building this application was to demonstrate OOP (Object Oriented Programming) and show how different classes function.",
            image: "./assets/img/Vehicle-Build-Test.png",
            deployedvideo: "https://drive.google.com/file/d/1WwAg_R4XFckuzblO1gcSrXEf-EmOKiFX/view",
            repoLink: "https://github.com/carlbr3/Vehicle-Build-Test"
        },
        {
            title: "Weather-Dashboard-Forecast",
            description: "The purpose of this application was to build a weather dashboard that calls the OpenWeather API, then renders the data in the browser.",
            image: "https://via.placeholder.com/150",
            deployedvideo: "https://www.youtube.com/watch?v=Q8v3h3Y2J1c",
            repoLink: "https://github.com/carlbr3/Weather-Dashboard-Forecast"
        },
        {
            title: "Employee-Tracker",
            description: "Employee Tracking Database for Front End",
            image: "https://via.placeholder.com/150",
            deployedvideo: "https://www.youtube.com/watch?v=Q8v3h3Y2J1c",
            repoLink: "https://github.com/carlbr3/Employee-Tracker"
        },
        {
            title: "Simple HTML/CSS",
            description: "Mini project to show off HTML and CSS skills",
            image: "assets/img/HTML:CSS.png",
            repoLink: "https://github.com/carlbr3/module-2-mini-project"
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
                    deployedlink={project.deployedlink}
                    deployedvideo={project.deployedvideo}
                    repoLink={project.repoLink} />
                ))}
            </div>
        </div>
    );
    };

    export default Portfolio;