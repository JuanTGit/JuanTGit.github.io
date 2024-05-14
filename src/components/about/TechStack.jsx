import { Col, Row } from "react-bootstrap"
import {
	DiReact,
	DiNodejs,
	DiPython,
	DiGit,
	DiHtml5,
	DiCss3,
	DiPostgresql
  } from "react-icons/di";
  import { BiLogoFlask, BiLogoJavascript } from "react-icons/bi";

function TechStack(){
	return(
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="card-icons">
				<BiLogoJavascript />
			</Col>
			<Col xs={4} md={2} className="card-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="card-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="card-icons">
				<DiHtml5 />
			</Col>
			<Col xs={4} md={2} className="card-icons">
				<DiCss3 />
			</Col>
			<Col xs={4} md={2} className="card-icons">
				<DiGit />
			</Col>
			<Col xs={4} md={2} className="card-icons">
				<DiPostgresql />
			</Col>
			<Col xs={4} md={2} className="card-icons">
				<DiPython />
			</Col>
			<Col xs={4} md={2} className="card-icons">
				<BiLogoFlask />
			</Col>
	  	</Row>
	)
}

export default TechStack