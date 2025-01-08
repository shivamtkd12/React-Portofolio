import Navbar from "./Components/Navbar/navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";

import Education from "./Components/Education/education";
import Skill from "./Components/Skill/skill";
import Work from "./Components/Work/work";
import Portfolio from "./Components/Portfolio/portfolio";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import { themeContext } from "./context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />

      <Education />
      <Skill />
      <Work />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
