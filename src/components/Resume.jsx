import resume from "../assets/resume.jpg"

function Resume(){
    return(
        <div>
            <div className="container d-flex justify-content-center">
                <img className="col-8" src={resume} alt="" />
            </div>
        </div>
    );
}

export default Resume