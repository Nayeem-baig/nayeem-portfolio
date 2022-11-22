import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navi from "./components/Navi";
import Skills from "./components/Skills";
import Internship from "./components/Internship";

function App() {

  return (
    <div className="App">
      <Navi />
      <Home />
      <Education />
      <Internship/>
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
