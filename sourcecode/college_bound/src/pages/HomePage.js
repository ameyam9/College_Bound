import ArticleCarousel from "../ArticleCarousel"
import "../App.css";

function HomePage() {
  return (
    <div className="HomePage">
      <h1 style={{ marginTop: 200 }}>Home Page</h1>
      <ArticleCarousel />
    </div>
  );
}
export default HomePage;
