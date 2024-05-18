import resume from "../assets/resume.jpg"

function Resume(){
    return(
        <div>
            <h1 className="text-center my-5" id="project-title">Resume</h1>
            <div className="container d-flex justify-content-center">
                <img className="col-12 mb-3" src={resume} alt="" />
            </div>
        </div>
    );
}

export default Resume