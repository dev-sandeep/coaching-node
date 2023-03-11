import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { SearchNav } from "./SearchNav";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavbarTop = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            Food Adda
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto justify-content-around w-100">
              <div className="d-block d-md-flex">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </div>
              <SearchNav />
              <div className="d-block d-md-flex mt-3 mt-md-0 align-items-center">
                <Nav.Link as={Link} to="/cart">
                  <FaShoppingCart size={24} className="me-2" color="#fff" />
                </Nav.Link>
                <NavDropdown
                  title="Profile"
                  id="basic-nav-dropdown"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/address"}>
                    Address
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/orders"}>
                    Orders
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
