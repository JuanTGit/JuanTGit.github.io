import resume from "../assets/resume.jpg"

function Resume(){
    return(
        <div>
            <div className="container d-flex justify-content-center">
                {/* <Link to={resume} target={_blank} download>Download</Link> */}
                <img className="col-12" src={resume} alt="" />
            </div>
        </div>
    );
}

export default Resume