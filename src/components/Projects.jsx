import osrsImg from "../assets/osrs-api.png"
import ecomImg from "../assets/ecommerce.png"

function Projects(){
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return(
        <div className="container">
            <h1 className="text-left mt-5">Projects</h1>
            {/* Ecommerce Project */}
            <div className="row mt-5">
                {/* img */}
                <div className="col-12 col-sm-6 justify-content-center d-flex">
                    <img id="project-img" src={ecomImg} alt="Osrs Project" />
                </div>
                {/* txt */}
                <div className="col-12 col-sm-6 mt-5"  id="project-card">
                    <h1 className="text-left">Ecommerce Store</h1>
                    <a className="btn btn-primary" onClick={() => openInNewTab("https://flask-setup.onrender.com")}>Visit Site</a>
                </div>
            </div>

            {/* OSRS GE API Project */}
            <div className="row mt-5">
                {/* img */}
                <div className="col-12 col-sm-6 justify-content-center d-flex">
                    <img id="project-img" src={osrsImg} alt="Ecom Project" />
                </div>
                {/* txt */}
                <div className="col-12 col-sm-6" id="project-card">
                    <h1 className="text-left mt-5">OSRS API</h1>
                    <a className="btn btn-primary" onClick={() => openInNewTab("https://osrs-ge-api.onrender.com")}>Visit Site</a>
                </div>
            </div>

        </div>
    );
}

export default Projects