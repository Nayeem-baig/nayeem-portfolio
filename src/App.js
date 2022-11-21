import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navi from "./components/Navi";
import Skills from "./components/Skills";
import Networks from "./components/Networks";

function App() {

  return (
    <div className="App">
      <Navi />
      <Home />
      <Education />
      <Skills />
      <Contact />
      <div className="d-flex flex-column align-items-center justify-content-between pb-5">
        <Networks />
      </div>
    </div>
  );
}

export default App;
