import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './style.scss'

const Header = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="header"
    >
      <Container>
        <Navbar.Brand style={{fontSize: '35px'}} href="/">CrossFit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#getting-started">GETTING STARTED</Nav.Link>
            <Nav.Link href="/shop">SHOP</Nav.Link>
            <Nav.Link href="#contact-us">CONTACT US</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="https://www.instagram.com/crossfitisrael/">
              <i className="bi bi-instagram"></i>
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/crossfitisrael.official">
              <i className="bi bi-facebook"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
