import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
    return (
        <div className="NavBar">
            <Navbar collapseOnSelect expand="lg" bg="blue" variant="blue">
            <Navbar.Brand href="#home">College Bound</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="nav-bar">
                <NavDropdown
                  title="Choosing Colleges and Degrees"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Choosing a College
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Chosing a Degree
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    SAT vs ACT
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Applying to Colleges"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Common App
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
                    How to Find Them
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
        </div>
    );
}

export default NavBar;