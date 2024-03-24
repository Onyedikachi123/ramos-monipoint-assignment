import "./Hero.css";
import HeroImage from "../../assets/herolaptop.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faChartLine,
  faCirclePlay,
  // faChartSimple
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="hero">
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-icon">
            <span className="bolt-icon">
            <FontAwesomeIcon icon={faBolt} />
            </span>
            <span className="chart-icon">
            <FontAwesomeIcon icon={faChartLine} />
            </span>
          </div>
          <div className="hero-text ">
            <ul>
              <li>Analytics</li>
              <li>that helps you</li>
              <li>shape the future</li>
            </ul>
           
          </div>
          <div className="hero-img">
            <FontAwesomeIcon icon={faCirclePlay} />
            <img src={HeroImage} alt="HeroImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
