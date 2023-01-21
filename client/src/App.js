import "./App.css";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Hero />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
