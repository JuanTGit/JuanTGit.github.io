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

function Projects(){
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return(
        <div className="container">
            <h1 className="text-center mt-5" id="project-title">Projects</h1>
            {/* Ecommerce Project */}
            <div className="row mt-5">
                {/* img */}
                <div className="col-12 col-sm-6 justify-content-center d-flex">
                    <img id="project-img" src={ecomImg} alt="Osrs Project" />
                </div>
                {/* txt */}
                <div className="col-12 col-sm-6 my-3"  id="project-card">
                    <h1>Ecommerce Store</h1>
                    <ul className="list-inline">
                        <li className="list-inline-item project-icon"><DiPython /></li>
                        <li className="list-inline-item project-icon"><BiLogoFlask /></li>
                        <li className="list-inline-item project-icon"><DiPostgresql /></li>
                    </ul>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="https://flask-setup.onrender.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Site</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/JuanTGit/flask_setup" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* OSRS GE API Project */}
            <div className="row mt-5">
                {/* img */}
                <div className="col-12 col-sm-6 justify-content-center d-flex">
                    <img id="project-img" src={osrsImg} alt="Ecom Project" />
                </div>
                {/* txt */}
                <div className="col-12 col-sm-6 my-3" id="project-card">
                    <h1>OSRS API</h1>
                    <ul className="list-inline">
                        <li className="list-inline-item project-icon">
                            <BiLogoJavascript />
                        </li>
                        <li className="list-inline-item project-icon">
                            <DiHtml5 />
                        </li>
                    </ul>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="https://osrs-ge-api.onrender.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Site</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/JuanTGit/osrs-ge-api" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Projects