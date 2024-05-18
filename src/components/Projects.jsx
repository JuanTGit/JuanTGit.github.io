import osrsImg from "../assets/osrs-api.png"
import ecomImg from "../assets/ecommerce.png"
import {
	DiReact,
	DiNodejs,
	DiPython,
	DiGit,
    DiHtml5,
    DiPostgresql 
  } from "react-icons/di";
import { BiLogoFlask, BiLogoJavascript } from "react-icons/bi";
import Project from "./project/Project";

function Projects(){
    const icons = [
        <DiPython key="Python" />,
        <BiLogoFlask key="Flask" />,
        <DiPostgresql key="SQL" />,
        <DiHtml5 key="HTML" />,
        <BiLogoJavascript key="JavaScript" />,
    ]

    return(
        <div className="container">
            <h1 className="text-center mt-5" id="project-title">Projects</h1>
            {/* Ecommerce Project */}
            <Project 
                projectName="Ecommerce Store"
                projectImage={ecomImg}
                projectImageAlt="Ecommerce Project"
                icons={icons.slice(0,4)}
                liveSiteUrl="https://flask-setup.onrender.com"
                githubUrl="https://github.com/JuanTGit/flask_setup"
            />

            {/* OSRS GE API Project */}
            <Project
                projectName="OSRS API"
                projectImage={osrsImg}
                projectImageAlt="OSRS API Project"
                icons={icons.slice(3,5)}
                liveSiteUrl="https://osrs-ge-api.onrender.com"
                githubUrl="https://github.com/JuanTGit/osrs-ge-api"
            />

        </div>
    );
}

export default Projects