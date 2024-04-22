import ProfilePic from "./assets/profile-pic.jpg"

function Card(){

	return(
		<div className="card">
			<img className="card-image" src={ProfilePic} alt="profile pic" />
			<h2 className="card-title">Juan Tejeda</h2>
			<p className="card-text">Software Engineer</p>
		</div>
	);
}

export default Card