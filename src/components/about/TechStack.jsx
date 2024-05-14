import { Col, Row} from "react-bootstrap"
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiPython,
	DiGit
  } from "react-icons/di";
import { SiPostgresql, SiFlask } from "react-icons/si";

function TechStack(){
	return(
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="card-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="card-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="card-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="card-icons">
				<DiGit />
			</Col>
			<Col xs={4} md={2} className="card-icons">
				<SiPostgresql />
			</Col>
			<Col xs={4} md={2} className="card-icons">
				<DiPython />
			</Col>
			<Col xs={4} md={2} className="card-icons">
				<SiFlask />
			</Col>
	  	</Row>
	)
}

export default TechStack