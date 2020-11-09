import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";

function App() {
  return (
    <div className="App">
      <head></head>
      <body>
        <div className="Nav">
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

        <div className="Carousel">
          <Carousel>
            <Carousel.Item>
              <a href="https://www.insidehighered.com/news/2020/09/11/students-great-need-mental-health-support-during-pandemic">
                <img
                  className="d-block w-100"
                  src={"/media/campus_life_article.png"}
                  alt="First slide"
                />
              </a>
              <Carousel.Caption>
                <h3>Why Campus Life Matters</h3>
                <p>Campus life has huge rammifications for yada.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://thecollegepost.com/universities-us-covid-19">
                <img
                  className="d-block w-100"
                  src={"/media/mental_health_article.png"}
                  alt="Second slide"
                />
              </a>

              <Carousel.Caption>
                <h3>Mental Health in the Age of COVID and Zoom</h3>
                <p>
                  A mountain of troubling data about rising mental health
                  problems has health advocates and providers worried about the
                  need for additional support for struggling students and the
                  ability of colleges to provide it.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <a href="https://www.washingtonpost.com/national/how-black-lives-matter-born-on-the-streets-is-rising-to-power-on-campus/2015/11/17/3c113e96-8959-11e5-be8b-1ae2e4f50f76_story.html">
                <img
                  className="d-block w-100"
                  src={"/media/covid_article.png"}
                  // src="https://img.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2015/11/17/National-Enterprise/Images/University_of_Missouri_Turmoil-0302b-1394.jpg?uuid=VGBADI1nEeW69L3zc1XaDA"
                  alt="Third slide"
                />
              </a>

              <Carousel.Caption>
                <h3>
                  How Collegs are Handling COVID and what that means for you
                </h3>
                <p>What you should be looking out for.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </body>
    </div>
  );
}

export default App;
