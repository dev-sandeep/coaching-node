import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { SearchNav } from "./SearchNav";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


export const NavbarAdmin = () => {
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
                {/* <Nav.Link as={Link} to="/">Home</Nav.Link>
                
                <Nav.Link as={Link} to="/Signup">SignUp</Nav.Link> */}
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/yourmenu">Your Menu</Nav.Link>
                <Nav.Link as={Link} to="/previousorder">Previous Order</Nav.Link>
                <Nav.Link as={Link} to="/currentorder">Current Order</Nav.Link>
                
                <Nav.Link as={Link} to="/addproduct">Add Product</Nav.Link>
              </div>
              
              {/* <SearchNav /> */}
              <div className="d-block d-md-flex mt-3 mt-md-0 align-items-center">
                <FaShoppingCart size={24} className="me-2" color="#fff" />
                <NavDropdown title="Team3" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/signup">
                    SignUp
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Logout">
                   Logout
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/support">
                    Support
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
