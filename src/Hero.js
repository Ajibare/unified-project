import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

import "./hero.css";
import logo from "./Incubator-Logo 1.png";
import HeroImage from "./Image.png";

function Hero() {
  
  return (
    <header>
      <div className="container">
        <div>
          <img src={logo} alt="" width="150" />
        </div>
        <nav>
          <a href="#about">About us</a>
          <a href="#courses">courses</a>
          <a href="#contact">contact us</a>
          <a href="#feed">feedback</a>
          <a href="#blog">blog</a>
        </nav>

        <div className="font"><FontAwesomeIcon icon={faBars} /></div>
      </div>
      <div>
        <img src={HeroImage} alt="" width="100%" />
      </div>

    </header>
  );
}

// ReactDOM.render(
//   <Hero />, document.body);
export default Hero;
