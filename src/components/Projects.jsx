import osrsImg from "../assets/osrs-api.png"
import ecomImg from "../assets/ecommerce.png"

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
                <div className="col-12 col-sm-6 mt-5"  id="project-card">
                    <h1 className="text-left">Ecommerce Store</h1>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a className="btn btn-primary" onClick={() => openInNewTab("https://flask-setup.onrender.com")}>Live Site</a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn btn-primary" onClick={() => openInNewTab("https://github.com/JuanTGit/flask_setup")}>GitHub</a>
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
                <div className="col-12 col-sm-6 mt-5" id="project-card">
                    <h1 className="text-left">OSRS API</h1>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a className="btn btn-primary" onClick={() => openInNewTab("https://osrs-ge-api.onrender.com")}>Live Site</a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn btn-primary" onClick={() => openInNewTab("https://github.com/JuanTGit/osrs-ge-api")}>GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Projects