import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { 
	BsFileText,
	BsPerson,
	BsEnvelope,
	BsHouseDoor,
	BsGear } from "react-icons/bs";


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
                        <Nav.Link className="mx-2" id="custom-nav-link" onClick={closeNavbar} href="#/"><BsHouseDoor style={{ marginBottom: "4px", marginRight: "4px" }} />Home</Nav.Link>
                        <Nav.Link className="mx-2" id="custom-nav-link" onClick={closeNavbar} href="#/projects"><BsGear style={{ marginBottom: "4px", marginRight: "4px" }} />Projects</Nav.Link>
                        <Nav.Link className="mx-2" id="custom-nav-link" onClick={closeNavbar} href="#/contact"><BsEnvelope style={{ marginBottom: "4px", marginRight: "4px" }} />Contact</Nav.Link>
                        <Nav.Link className="mx-2" id="custom-nav-link" onClick={closeNavbar} href="#/resume"><BsFileText style={{ marginBottom: "4px", marginRight: "4px" }} />Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;