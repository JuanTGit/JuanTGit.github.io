import osrsImg from "../assets/osrs-api.png"
import ecomImg from "../assets/ecommerce.png"

function Projects(){
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
                    <a href="https://flask-setup.onrender.com">Link</a>
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
                    <a href="https://osrs-ge-api.onrender.com">Link</a>
                </div>
            </div>

        </div>
    );
}

export default Projects