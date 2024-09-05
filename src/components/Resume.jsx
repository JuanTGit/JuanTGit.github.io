import resume from "../assets/Resume.jpg"

function Resume(){
    return(
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-center mt-5" id="project-title">Resume</h1>
            <a className="my-3 btn btn-primary" href="/Resume.pdf" download>Download CV</a>
            <div className="d-flex justify-content-center">
                <img className="col-12 col-md-7 mb-3" src={resume} alt="Resume" />
            </div>
        </div>
    );
}

export default Resume