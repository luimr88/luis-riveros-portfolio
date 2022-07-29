import React from "react";
import { Navbar, Nav } from "react-bootstrap";
function Navigation() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="#home" className="ms-2">Luis' Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Nav.Link href="#about-me">About Me</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav>       
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation