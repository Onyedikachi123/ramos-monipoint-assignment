import "./MarqueeComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const MarqueeComponent = () => {
  const textVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const serviceVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.5, 
        duration: 0.8, 
      },
    },
  };

  return (
    <section className="container marquee-section">
      <motion.h1
        variants={textVariant}
        initial="hidden"
        animate="visible"
      >
        Maximize <motion.span variants={textVariant}>efficiency</motion.span> with our intuitive
      </motion.h1>
      <motion.div
        className="analytics-service-container"
        variants={serviceVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="analytics-stat">
          <div className="icon-circle">
            <div className="icon-squre">
              <FontAwesomeIcon icon={faChartLine} className="analytics-icon" />
            </div>
            <div className="dashed-line"></div>
          </div>
          <div className="analytics-info">
            <div className="percentage">45%</div>
            <div className="description">System grow faster</div>
          </div>
        </div>

        <div className="analytics-service">
          <span className="marquee">analytics service</span>
        </div>
      </motion.div>
      <div className="button-section pt-5">
        <p className="section-text">
          Explore traffic sources, page behavior, conversions and more to gain
          deep insight <br />
          into your audience. With us, your business doesnt just adapt – it
          evolves
        </p>
        <div className="buttons-container">
          <button className="demo-button">Request a demo</button>
          <button className="start-button">Start for free</button>
        </div>
      </div>
    </section>
  );
};

export default MarqueeComponent;
