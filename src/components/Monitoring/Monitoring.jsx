import "./Monitoring.css";
import DataImage from "../../assets/dataVis.png";
import ConvImage from "../../assets/convRate.png";

const Monitoring = () => {
  return (
    <section className="monitoring">
      <div className="monitoring-content">
        <div className="container">
          <div className="monitoring-content-header slide-in-text-bottom">
            <h3>
              We give you full <br /> <span>control</span> over your data
            </h3>
          </div>
          <div className="row g-2">
            <div className="col-md-6">
              <div className="card">
                <img src={ConvImage} alt="DataImage" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card ">
                <img src={DataImage} alt="DataImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monitoring;
