import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../../images/dj.png";
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img style={{ height: "50px" }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About me</Nav.Link>
                            <Nav.Link as={Link} to="/photo">Photo gallery</Nav.Link>

                        </Nav>
                        <Nav>
                            {user ?
                                <button onClick={handleSignOut} className="btn btn-primary">Sign out</button>
                                :
                                <Nav.Link className="mt-2" as={Link} to="/login">Login</Nav.Link>}
                            <Nav.Link as={Link} to="/signup">
                                <button className="btn btn-danger">Sign up</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;