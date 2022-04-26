import "./App.css";
import MovieList from "./assets/movies.json";
import Logo from "./assets/logo.png";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <img className="logo" src={Logo} alt="logo" />
      {MovieList.map((item, index) => {
        return (
          <Section key={index} category={item.category} images={item.images} />
        );
      })}
    </div>
  );
}

export default App;
