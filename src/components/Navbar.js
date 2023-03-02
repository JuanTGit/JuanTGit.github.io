import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavScroll() {
	
	return (
		<Navbar bg="light" expand="lg" sticky='top'>
		<Container fluid>
		  <Navbar.Brand href="#home">Juan Tejeda</Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mx-auto">
			<Nav.Link href="#home">Home</Nav.Link>
			<Nav.Link href="/about">About</Nav.Link>
			<Nav.Link href="/projects">Projects</Nav.Link>
			<Nav.Link href="/resume">Resume</Nav.Link>
			</Nav>
		  </Navbar.Collapse>
		</Container>
	  </Navbar>
	)
};




{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
  <a className="navbar-brand" href="/">JuanTGit</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	<span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
	<div className="navbar-nav mx-auto">
		<a className="nav-link" href="/about">About</a>
		<a className="nav-link" href="/projects">Projects</a>
		<a className="nav-link" href="/resume">Resume</a>
	</div>
  </div>
</div>
</nav> */}