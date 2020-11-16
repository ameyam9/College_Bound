import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./NavBar";
import Carousel from "react-bootstrap/Carousel";

function App() {
  return (
    <div className="App">
      <head></head>
      <body>
        <NavBar />
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
