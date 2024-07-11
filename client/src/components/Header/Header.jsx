import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./style.scss";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <Navbar className="custom-header" sticky="top" expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">CrossFit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="#getting-started">GETTING STARTED</Nav.Link>
            <Nav.Link as={Link} to="/shop">SHOP</Nav.Link>
            <Nav.Link as={Link} to="#contact-us">CONTACT US</Nav.Link>
          </Nav>
          <Nav className="social-media">
            <Nav.Link
              href="https://www.instagram.com/crossfitisrael/"
              target="_blank"
            >
              <i className="bi bi-instagram"></i>
            </Nav.Link>
            <Nav.Link
              href="https://www.facebook.com/crossfitisrael.official"
              target="_blank"
            >
              <i className="bi bi-facebook"></i>
            </Nav.Link>
            <Nav.Link>
              <Cart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
