import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ChoosingCollegesandDegrees from "./pages/ChoosingCollegesandDegrees";
import ChoosingaCollege from "./pages/ChoosingaCollege";
import ChoosingaDegree from "./pages/ChoosingaDegree";
import SATvsACT from "./pages/SATvsACT";
import ApplyingToColleges from "./pages/ApplyingToColleges";
import CommonApplication from "./pages/CommonApplication";
import PublicSchoolsByState from "./pages/PublicSchoolsByState";
import SpecificSchools from "./pages/SpecificSchools";
import ApplyingForScholarships from "./pages/ApplyingForScholarships";
import ScholarshipsBySchool from "./pages/ScholarshipsBySchool";
import FinancingYourEducation from "./pages/FinancingYourEducation";
import Loans from "./pages/Loans";
import FAFSA from "./pages/FAFSA";
import PrivatevsPublicLoans from "./pages/PrivatevsPublicLoans";
import FindingEmotionalSupport from "./pages/FindingEmotionalSupport";
import PsychologicalSupport from "./pages/PsychologicalSupport";
import SelfCare from "./pages/SelfCare"
import FindingResources from "./pages/FindingResources";

/**
 * Need to run this on command line to get router to work on page.
 * This is installing the react-router-dom module.
 * npm install -S react-router-dom
 * npm install react-router-dom --save
 */

function NavBar() {
  return (
    <div className="NavBar">
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="blue" variant="blue">
          <Navbar.Brand>College Bound</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-bar">
              <NavDropdown
                title="Choosing Colleges and Degrees"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link className="nav-link" to="/choosing_colleges_and_degrees"> About Choosing Colleges and Degrees </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/choosing_a_college"> Choosing a College </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/choosing_a_degree"> Choosing a Degree </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/sat_vs_act"> SAT vs ACT </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Applying to Colleges"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link className="nav-link" to="/applying_to_colleges"> About Applying to Colleges </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/common_application"> Common Application</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/public_schools_by_state">Public Schools By State</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/specific_schools">Specific School</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Applying for Scholarships"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link className="nav-link" to="/applying_for_scholarships">About Applying for Scholarships </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/how_to_find_scholarships">How to Find Scholarships</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/scholarships_by_school">Scholarships by School</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Financing your Education"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link className="nav-link" to="/financing_your_education">About Financing your Education</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/loans">Loans</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/fafsa">FAFSA</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/private_vs_public_loans">Private vs Public Loans</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Finding Emotional Support"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link className="nav-link" to="/finding_emotional_support">About Finding Emotional Support</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/psychological_support">Psychological Support </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/self_care">Self-Care</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/finding_resources">Finding Resources</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Router />
        <Router exact path="/choosing_colleges_and_degrees" component={ChoosingCollegesandDegrees} />
        <Router exact path="/choosing_a_college" component={ChoosingaCollege} />
        <Router exact path="/choosing_a_degree" component={ChoosingaDegree} />
        <Router exact path="/sat_vs_act" component={SATvsACT} />
        <Router exact path="/applying_to_colleges" component={ApplyingToColleges} />
        <Router exact path="/common_application" component={CommonApplication} />
        <Router exact path="/public_schools_by_state" component={PublicSchoolsByState} />
        <Router exact path="/specific_schoools" component={SpecificSchools} />
        <Router exact path="/applying_for_scholarships" component={ApplyingForScholarships} />
        <Router exact path="/scholarships_by_school" component={ScholarshipsBySchool} />
        <Router exact path="/financing_your_education" component={FinancingYourEducation} />
        <Router exact path="/loans" component={Loans} />
        <Router exact path="/fafsa" component={FAFSA} />
        <Router exact path="/private_vs_public_loans" component={PrivatevsPublicLoans} />
        <Router exact path="/finding_emotional_support" component={FindingEmotionalSupport} />
        <Router exact path="/psychological_support" component={PsychologicalSupport} />
        <Router exact path="/self_care" component={SelfCare} />
        <Router exact path="/findng_resources" component={FindingResources} />
      </Router>
    </div>
  );
}

export default NavBar;
