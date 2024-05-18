import osrsImg from "../assets/osrs-api.png"
import ecomImg from "../assets/ecommerce.png"
import portfolio from "../assets/portfolio.png"
import {
	DiReact,
	DiPython,
	DiGit,
    DiHtml5,
    DiPostgresql,
    DiCss3
  } from "react-icons/di";
import { BiLogoFlask, BiLogoJavascript } from "react-icons/bi";
import Project from "./project/Project";

function Projects(){
    const icons = [
        <DiPython key="Python" />,
        <BiLogoFlask key="Flask" />,
        <DiPostgresql key="SQL" />,
        <BiLogoJavascript key="JavaScript" />,
        <DiReact key="React"/>,
        <DiHtml5 key="HTML" />,
        <DiCss3 key="CSS"/>,
        <DiGit key="Git"/>,
    ]

    const projectOneIcons = [icons.slice(0,3), icons[5], icons[6]]
    const projectTwoIcons = [icons[3], icons[5]]

    return(
        <div className="container">
            <h1 className="text-center mt-5" id="project-title">Projects</h1>
            {/* Ecommerce Project */}
            <Project 
                projectName="Ecommerce Store"
                projectImage={ecomImg}
                projectImageAlt="Ecommerce Project"
                projectDesc="This project sets up a Flask web application with Flask for the backend, Jinja2 for templating, and SQLAlchemy for database management. It includes user authentication, Blueprints for modular code, and configurations for easy deployment."
                icons={projectOneIcons}
                liveSiteUrl="https://flask-setup.onrender.com"
                githubUrl="https://github.com/JuanTGit/flask_setup"
            />

            {/* OSRS GE API Project */}
            <Project
                projectName="OSRS API"
                projectImage={osrsImg}
                projectImageAlt="OSRS API Project"
                projectDesc="This API accesses Old School RuneScape's Grand Exchange data. Built with Node.js, it uses Express for the server and Axios for HTTP requests, providing real-time pricing information for in-game items."
                icons={projectTwoIcons}
                liveSiteUrl="https://osrs-ge-api.onrender.com"
                githubUrl="https://github.com/JuanTGit/osrs-ge-api"
            />

            {/* Portfolio Project */}
            <Project
                projectName="Personal Portfolio"
                projectImage={portfolio}
                projectImageAlt="Portfolio Project"
                projectDesc="This repository hosts my personal portfolio website built with HTML, CSS, and JavaScript. It showcases projects, skills, and experiences, featuring responsive design, interactive elements, and smooth navigation for an engaging user experience."
                icons={icons.slice(3,8)}
                liveSiteUrl="https://juantgit.github.io/"
                githubUrl="https://github.com/JuanTGit/JuanTGit.github.io"
            />

        </div>
    );
}

export default Projects