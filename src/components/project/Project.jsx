

function Project(props){
	const {projectName, projectImage, projectImageAlt, icons, liveSiteUrl, githubUrl} = props;
	
	return(
		<div>
            {/* Project */}
            <div className="row mt-5">
                {/* img */}
                <div className="col-12 col-sm-6 justify-content-center d-flex">
                    <img id="project-img" src={projectImage} alt={projectImageAlt} />
                </div>
                {/* txt */}
                <div className="col-12 col-sm-6 my-3"  id="project-card">
                    <h1>{projectName}</h1>
                    <ul className="list-inline">
						{icons.map((icon, index) => (
							<li key={index} className="list-inline-item project-icon">{icon}</li>
						))}
                    </ul>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href={liveSiteUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Site</a>
                        </li>
                        <li className="list-inline-item">
                            <a href={githubUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                    </ul>
                </div>
			</div>
		</div>
	)
}

export default Project