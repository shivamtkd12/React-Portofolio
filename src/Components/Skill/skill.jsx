import "./skill.css";
import Language from "../../img/lang.png";
import Techno from "../../img/techno.png";
import Soft from "../../img/softSkill.png";

import { themeContext } from "../../context";
import { useContext } from "react";

const Skill = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="skill">
      <div className="achievement" style={{ color: darkMode ? "white" : "" }}>
        <div className="circle">
          <img src={Language} />
        </div>

        <p style={{ fontSize: "30px" }}>Language</p>
        <span> Java </span>
        <span>Java Script </span>
        <span> HTML,CSS </span>
        <span>Python </span>
      </div>

      <div className="achievement">
        <div className="circle">
          <img src={Techno} alt="" />
          <div
            className="blur e-blur1"
            style={{
              background: "var(--purple)",
              left: "-45rem",
              top: "-10rem",
            }}
          >
            {" "}
          </div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "15rem",
              width: "21rem",
              height: "15rem",
              left: "30rem",
            }}
          ></div>
        </div>
        <p style={{ fontSize: "30px" }}>Technologies</p>
        <span>Node Js </span>
        <span>React Js </span>
        <span>Git </span>
        <span>Jenkins</span>
      </div>

      <div className="achievement">
        <div className="circle">
          <img src={Soft} alt="" />
        </div>
        <p style={{ fontSize: "30px" }}>Soft Skills</p>
        <span>Team Management </span>
        <span>Communication </span>
        <span>Multi-tasking </span>
        <span>Leadership </span>
      </div>
    </div>
  );
};

export default Skill;
