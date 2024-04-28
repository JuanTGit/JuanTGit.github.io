import ProfilePic from "../assets/profile-pic.jpg"
import Button from "./Button";

function Card(props){

	return(
		<div className="card">
			<img className="card-image" src={ProfilePic} alt="profile pic" />
			<h2 className="card-title">{props.firstName} {props.lastName}</h2>
			<p className="card-text">{props.career}</p>
			<p className="card-text">Employment Status: {props.isEmployed ? 'Employed' : 'Unemployed'}</p>
			<Button />
		</div>
	);
}

export default Card