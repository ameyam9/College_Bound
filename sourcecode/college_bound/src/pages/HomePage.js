import NavBar from "../NavBar";
import ArticleCarousel from "../ArticleCarousel"
import "../App.css";

function HomePage() {
  return (
    <div className="HomePage">
      <NavBar />
      <ArticleCarousel/>
    </div>
  );
}
export default HomePage;
