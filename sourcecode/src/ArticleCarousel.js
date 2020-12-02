import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import { BrowserRouter as Route, Link } from "react-router-dom";

function ArticleCarousel() {
    return (
        <div className="ArticleCarousel">
            <Carousel>
                <Carousel.Item>
                    <Link className="nav-link" to="/campus_life_article">
                        <img
                            className="d-block w-100"
                            src={"/media/campus_life_article.png"}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 id="college_life_article">Why Campus Life Matters</h3>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link className="nav-link" to="/mental_health_zoom_covid_article">
                        <img
                            className="d-block w-100"
                            src={"/media/mental_health_article.png"}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 id="mental_health_article">Mental Health Awareness in the Age of COVID and Zoom</h3>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
                <Carousel.Item>
                    <Link className="nav-link" to="/covid_colleges_article">
                        <img
                            className="d-block w-100"
                            src={"/media/covid_article.png"}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 id="covid_article">
                                How Colleges are Handling COVID
                        </h3>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ArticleCarousel;