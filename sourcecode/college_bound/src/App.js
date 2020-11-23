import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import HomePage from "./pages/HomePage"
import ChoosingCollegesandDegrees from "./pages/ChoosingCollegesandDegrees";
import ChoosingaCollege from "./pages/ChoosingaCollege";
import ChoosingaDegree from "./pages/ChoosingaDegree";
import SATvsACT from "./pages/SATvsACT";
import ApplyingToColleges from "./pages/ApplyingToColleges";
import HowToFindScholarships from "./pages/HowToFindScholarships";
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

function App() {
  return (
    <div className="App">
      <container className="routes">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/choosing_colleges_and_degrees" component={ChoosingCollegesandDegrees} />
            <Route exact path="/choosing_a_college" component={ChoosingaCollege} />
            <Route exact path="/choosing_a_degree" component={ChoosingaDegree} />
            <Route exact path="/sat_vs_act" component={SATvsACT} />
            <Route exact path="/applying_to_colleges" component={ApplyingToColleges} />
            <Route exact path="/common_application" component={CommonApplication} />
            <Route exact path="/public_schools_by_state" component={PublicSchoolsByState} />
            <Route exact path="/specific_schools" component={SpecificSchools} />
            <Route exact path="/applying_for_scholarships" component={ApplyingForScholarships} />
            <Route exact path="/how_to_find_scholarships" component={HowToFindScholarships} />
            <Route exact path="/scholarships_by_school" component={ScholarshipsBySchool} />
            <Route exact path="/financing_your_education" component={FinancingYourEducation} />
            <Route exact path="/loans" component={Loans} />
            <Route exact path="/fafsa" component={FAFSA} />
            <Route exact path="/private_vs_public_loans" component={PrivatevsPublicLoans} />
            <Route exact path="/finding_emotional_support" component={FindingEmotionalSupport} />
            <Route exact path="/psychological_support" component={PsychologicalSupport} />
            <Route exact path="/self_care" component={SelfCare} />
            <Route exact path="/finding_resources" component={FindingResources} />
          </Switch>
        </Router>
      </container>
    </div>
  );
}

export default App;