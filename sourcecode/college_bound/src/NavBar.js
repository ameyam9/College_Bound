import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import ChoosingCollegesAndDegrees from "./pages/choosingCollegesAndDegrees/ChoosingCollegesandDegrees";
import ChoosingaCollege from "./pages/choosingCollegesAndDegrees/ChoosingaCollege";

function NavBar() {
  return (
    <div className="NavBar">
      <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" bg="blue" variant="blue">
          <Navbar.Brand>College Bound Bro</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-bar">
              <NavDropdown
                title="Choosing Colleges and Degrees Bro"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link
                    className="nav-link"
                    as={ChoosingaCollege}
                    to="/choosing_a_college"
                  >
                    Choosing a College
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>Choosing a Degree</NavDropdown.Item>
                <NavDropdown.Item>SAT vs ACT</NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="nav-link"
                    as={ChoosingCollegesandDegrees}
                    to="/choosing_colleges_and_degrees"
                  >
                    Choosing Colleges and Degrees
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Applying to Colleges"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Common Application
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Public Schools By State
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Specific Schools
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Applying for Scholarships"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  How to Find Scholarships
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Scholarships by School
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Financing your Education"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Loans</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">FAFSA</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Private vs Public Loans
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Finding Emotional Support"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Psychological Support
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Self-Care
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Organizations
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Router
          exact
          path="/choosing_colleges_and_degrees"
          component={choosingCollegesAndDegrees}
        />
        <Router exact path="/choosing_a_college" component={ChoosingaCollege} />
      </BrowserRouter>
    </div>
  );
}

export default NavBar;
