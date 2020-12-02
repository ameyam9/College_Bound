import "./App.css";
import { BrowserRouter as Route, Link } from "react-router-dom";

function Icons() {
    return(
        <div className="Icons">
            <div class="row">
                <div class="column">
                    <Link to="/choosing_colleges_and_degrees">
                    <img src="/media/choosing_colleges.png" alt="" style={{width: "25%"}}/>
                    </Link>
                </div>
                <div class="column">
                    <Link to="/applying_to_colleges">
                    <img src="/media/applying_colleges.png" alt="" style={{width: "25%"}}/>
                    </Link>
                </div>
                <div class="column">
                    <Link to="/applying_for_scholarships">
                    <img src="/media/scholarships.png" alt="" style={{width: "25%"}}/>
                    </Link>
                </div>
                <div class="column">
                    <Link to="/financing_your_education">
                    <img src="/media/financing.png" alt="" style={{width: "25%"}}/>
                    </Link>
                </div>
                <div class="column">
                    <Link to="/finding_emotional_support">
                    <img src="/media/emotional_support.png" alt="" style={{width: "25%"}}/>
                    </Link>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <Link to="/choosing_colleges_and_degrees" style={{ textDecoration: 'none' }}>
                    <p>Choosing Colleges and Degrees</p>
                    </Link>
                </div>
                <div class="column">
                    <Link to="/applying_to_colleges" style={{ textDecoration: 'none' }}>
                    <p>Applying to Colleges</p>
                    </Link>
                </div>
                <div class="column">
                    <Link to="/applying_for_scholarships" style={{ textDecoration: 'none' }}>
                    <p>Applying for Scholarships</p>
                    </Link>
                </div>
                <div class="column">
                    <Link to="/financing_your_education" style={{ textDecoration: 'none' }}>
                    <p>Financing your Education</p>
                    </Link>
                </div>
                <div class="column">
                    <Link to="/finding_emotional_support" style={{ textDecoration: 'none' }}>
                    <p>Finding Emotional Support</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Icons;