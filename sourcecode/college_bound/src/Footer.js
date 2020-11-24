import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { BrowserRouter as Route, Link } from "react-router-dom";

function Footer() {
    return (
        <div className="Footer">
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title">College Bound</h5>
                        </MDBCol>
                        <MDBCol md="6">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <Link to="/about"> About </Link>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://github.com/krezaey/College_Bound/tree/master/sourcecode/college_bound">Git Hub Repository</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://www.shutterstock.com/g/GoodStudio">Art Credit</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    );
}

export default Footer;