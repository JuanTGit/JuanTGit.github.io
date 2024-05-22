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
	  <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="card-icon-container">
		{[
		  <BiLogoJavascript />,
		  <DiNodejs />,
		  <DiReact />,
		  <DiHtml5 />,
		  <DiCss3 />,
		  <DiGit />,
		  <DiPostgresql />,
		  <DiPython />,
		  <BiLogoFlask />
		].map((Icon, index) => (
		  <Col key={index} xs={4} md={2} className="card-icons" style={{ '--i': index }}>
			{Icon}
		  </Col>
		))}
	  </Row>
	)
  }
  
export default TechStack