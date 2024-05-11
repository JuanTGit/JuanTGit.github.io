import resume from "../assets/resume.jpg"

function Resume(){
    return(
        <div>
            <div className="container d-flex justify-content-center">
                <img className="col-lg-8 col-md-12" src={resume} alt="" />
            </div>
        </div>
    );
}

export default Resume