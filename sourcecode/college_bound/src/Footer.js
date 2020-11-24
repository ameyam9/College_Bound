import { BrowserRouter as Route, Link } from "react-router-dom";

function Footer() {
    return (
        <div className="Footer">
            <h5 className="title"> College Bound </h5>
            <ul>
                <li className="list-unstyled">
                    <Link to="/about"> About </Link>
                </li>
                <li>
                    <a href="https://github.com/krezaey/College_Bound/tree/master/sourcecode/college_bound">Git Hub Repository</a>
                </li>
                <li className="list-unstyled">
                    <a href="https://www.shutterstock.com/g/GoodStudio">Art Credit</a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;