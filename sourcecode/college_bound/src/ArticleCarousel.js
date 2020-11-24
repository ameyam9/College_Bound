import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";

function ArticleCarousel() {
    return (
        <div className="ArticleCarousel">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"/media/campus_life_article.png"}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 id="college_life_article">Why Campus Life Matters</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"/media/mental_health_article.png"}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 id="mental_health_article">Mental Health in the Age of COVID and Zoom</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
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
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ArticleCarousel;