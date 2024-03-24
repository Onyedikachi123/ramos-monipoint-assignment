import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./RamosSection.css";
import DashboardPhone from "../../assets/phone.png";
import DashboardLaptop from "../../assets/dashlaptop.png";

const RamosSection = () => {
  return (
    <section className="ramos-section">
      
        <div className="content">
          <div className="left-panel ">
            <h3>
              Turning data into real <br />
              actions and ideas.
            </h3>
            <ul className="features-list">
              <li>
                Instant Insights{" "}
                <span>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </li>
              <li>
                AI technology{" "}
                <span>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </li>
              <li>
                Easy integration{" "}
                <span>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </li>
            </ul>
          </div>
          <div className="right-panel">
            <img src={DashboardLaptop} alt="Laptop" className="laptop-image" />
            <img src={DashboardPhone} alt="Phone" className="phone-image" />
          </div>
        </div>
        <div className="ramos-footer">
          <h1 className="slide-from-left">Ramos</h1>
        </div>
      
    </section>
  );
};

export default RamosSection;
