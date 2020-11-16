import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./NavBar";
import Carousel from "./Carousel"

function App() {
  return (
    <div className="App">
      <head></head>
      <body>
        <NavBar />
        <ArticleCarousel />
      </body>
    </div>
  );
}

export default App;
