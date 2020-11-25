import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
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
                <Form inline>
                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                    <Link to="/search_results">
                        <Button style={{ background: "#3B6280" }} type="submit">Submit</Button>
                    </Link>
                </Form>
            </Navbar>
        </div>
    );
}

export default Footer;