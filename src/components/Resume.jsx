
function Resume(){
    return(
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-center mt-5" id="project-title">Resume</h1>
            <a className="my-3 btn btn-primary" href="/resume.pdf" download>Download CV</a>
            <div className="d-flex justify-content-center" style={{ width: "100%", maxWidth: "900px", height: "90vh" }}>
                <iframe
                    src="/resume.pdf"
                    width="100%"
                    height="100%"
                    title="Resume PDF"
                    style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
                    }}
                ></iframe>
            </div>
        </div>
    );
}

export default Resume