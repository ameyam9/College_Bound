import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";

function App() {
  return (
    <div className="App">
      <head></head>
      <body>
        <div className="Nav">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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

        <div className="Carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="college_bound/src/media/mental_health_article.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./media/covid_article.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </body>
    </div>
  );
}

export default App;
