import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Link } from "react-router-dom";

/**
 * Need to run this on command line to get router to work on page.
 * This is installing the react-router-dom module.
 * npm install -S react-router-dom
 * npm install react-router-dom --save
 */

function NavBar() {
  return (
    <div className="NavBar">
      <img className="header" src={"/media/header.png"} />
      <Navbar collapseOnSelect expand="lg" bg="blue" variant="blue">
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            College Bound
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-bar">
            <NavDropdown
              title="Choosing Colleges and Degrees"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/choosing_colleges_and_degrees"> About Choosing Colleges and Degrees </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/choosing_a_college"> Choosing a College </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/choosing_a_degree"> Choosing a Degree </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/sat_vs_act"> SAT vs ACT </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Applying to Colleges"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/applying_to_colleges"> About Applying to Colleges </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/common_application"> Common Application </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/public_schools_by_state"> Public Schools By State </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/specific_schools"> Specific School </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Applying for Scholarships"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/applying_for_scholarships"> About Applying for Scholarships </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/how_to_find_scholarships"> How to Find Scholarships </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/scholarships_by_school"> Scholarships by School </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Financing your Education"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/financing_your_education"> About Financing your Education </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/loans"> Loans </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/fafsa"> FAFSA </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/private_vs_public_loans"> Private vs Public Loans </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Finding Emotional Support"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/finding_emotional_support"> About Finding Emotional Support</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/psychological_support"> Psychological Support </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/self_care"> Self-Care </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navbar-item">
                <Link className="nav-link" to="/finding_resources"> Finding Resources </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
