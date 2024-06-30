import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { BsFileText, BsPerson, BsEnvelope, BsHouseDoor, BsGear } from "react-icons/bs";
import { LinkContainer } from 'react-router-bootstrap';

function AppNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeNavbar = () => {
        setTimeout(() => {
            setExpanded(false);
        }, 175);
    }

    return (
        <Navbar expand="lg" sticky='top' className={`${scrolled ? 'navbar-scrolled' : ''}`} expanded={expanded} onToggle={() => setExpanded(!expanded)}>
            <Container className='p-0'>
                <Navbar.Brand id="custom-nav-title" href="/">JT</Navbar.Brand>
                <Navbar.Toggle className="mx-3" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <LinkContainer to="/">
                            <Nav.Link className="mx-2" id="custom-nav-link" onClick={closeNavbar}>
                                <BsHouseDoor style={{ marginBottom: "4px", marginRight: "4px" }} />Home
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/projects">
                            <Nav.Link className="mx-2" id="custom-nav-link" onClick={closeNavbar}>
                                <BsGear style={{ marginBottom: "4px", marginRight: "4px" }} />Projects
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link className="mx-2" id="custom-nav-link" onClick={closeNavbar}>
                                <BsEnvelope style={{ marginBottom: "4px", marginRight: "4px" }} />Contact
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/resume">
                            <Nav.Link className="mx-2" id="custom-nav-link" onClick={closeNavbar}>
                                <BsFileText style={{ marginBottom: "4px", marginRight: "4px" }} />Resume
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
