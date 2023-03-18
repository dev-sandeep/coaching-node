import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { SearchNav } from "./SearchNav";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setSession, getSession } from "./../Utils/session";
import { useSelector, useDispatch } from "react-redux";
import { logInAction, logOutAction } from "./../Redux/Actions/user";
import { useNavigate } from "react-router-dom";

export const NavbarTop = () => {
  const [type, setType] = React.useState(-1);
  const session = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  React.useEffect(()=>{
    // syncing data from localstorage to reducer
    const session_data = getSession();
    if(session_data.type == 1 || session_data.type == 2){
      //saving to redux
      dispatch(logInAction(session_data));
      setType(session_data.type);
    }
  }, [])

  //catch the event if there is login or logout
  React.useEffect(()=>{
    setType(session.type);
  }, [session])

  const logOut = () => {
    setSession({
      type: -1,
      token: ''
    });

    dispatch(logOutAction());
    navigate('/login');
  }
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
                {(type !== 1 && type !== 2) &&
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>}
              </div>
              <SearchNav />
              <div className="d-block d-md-flex mt-3 mt-md-0 align-items-center">
                <Nav.Link as={Link} to="/cart">
                  <FaShoppingCart size={24} className="me-2" color="#fff" />
                </Nav.Link>

                {(type === 1 || type === 2) &&
                  <NavDropdown
                    title="Profile"
                    id="basic-nav-dropdown"
                    menuVariant="dark"
                  >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    {type === 2 &&
                      <NavDropdown.Item href="#action/3.2">
                        Add Item
                      </NavDropdown.Item>}
                    {type === 2 &&
                      <NavDropdown.Item href="#action/3.2">
                        List Items
                      </NavDropdown.Item>}
                    {type === 1 &&
                      <NavDropdown.Item as={Link} to={"/address"}>
                        Address
                      </NavDropdown.Item>
                    }
                    <NavDropdown.Divider />
                    {type === 1 &&
                      <NavDropdown.Item as={Link} to={"/orders"}>
                        Orders
                      </NavDropdown.Item>
                    }
                    {type === 2 &&
                      <NavDropdown.Item href="#action/3.2">
                        Orders
                      </NavDropdown.Item>}

                    <NavDropdown.Item onClick={logOut}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                }
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
