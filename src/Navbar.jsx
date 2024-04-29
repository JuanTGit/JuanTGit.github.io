import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { 
	BsFileText,
	BsPerson,
	BsEnvelope,
	BsHouseDoor,
	BsGear } from "react-icons/bs";


function AppNavbar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className="d-flex" id="custom-nav-title" href="/">Juan Tejeda</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Nav.Link className="mx-2" id="custom-nav-link" href="/"><BsHouseDoor style={{ marginBottom: "4px", marginRight: "4px" }} />Home</Nav.Link>
                        <Nav.Link className="mx-2" id="custom-nav-link" href="/"><BsPerson style={{ marginBottom: "4px", marginRight: "4px" }} />About</Nav.Link>
                        <Nav.Link className="mx-2" id="custom-nav-link" href="/"><BsGear style={{ marginBottom: "4px", marginRight: "4px" }} />Projects</Nav.Link>
                        <Nav.Link className="mx-2" id="custom-nav-link" href="/"><BsEnvelope style={{ marginBottom: "4px", marginRight: "4px" }} />Contact</Nav.Link>
                        <Nav.Link className="mx-2" id="custom-nav-link" href="/"><BsFileText style={{ marginBottom: "4px", marginRight: "4px" }} />Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;