import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Route, Link } from "react-router-dom";

function Footer() {
    return (
        <div className="Footer">
            <Navbar expand="lg" sticky="bottom">
                <Navbar.Brand href="#home">College Bound</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/about">About</Link>
                        <a href="https://github.com/krezaey/College_Bound/tree/master/sourcecode/college_bound">GitHub Repository</a>
                        <a href="https://www.shutterstock.com/g/GoodStudio">Art Credit</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Footer;