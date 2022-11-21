import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Navi from "./components/Navi";
import Skills from "./components/Skills";

function App() {

  return (
    <div className="App">
      <Navi />
      <Home />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
