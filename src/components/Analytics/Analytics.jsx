// import analyticsImage from '../../assets/analyticsImage.png'
import SalesStatistics from "../StatisticsCard/SalesStatistics";
// import StatisticsCard from "../StatisticsCard/StatisticsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Counter from '../Counter';
import {
  faLayerGroup,
  faCircleArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import "./Analytics.css";
import userImage from "../../assets/kachi.jpeg";

const Analytics = () => {
  return (
    <section className="analytics">
      <div className="analytics-content">
        <div className="container">
          <div className="analytics-content-header">
            <div className="row">
              <div className="col-9">
                <h3 className="slide-in-text-bottom">
                  Your key to strategic <br /> success through analytics
                </h3>
              </div>
              <div className="col-3">
                <p>
                  Ready for exciting, instantaneous, all-accessible insights in
                  real time?
                </p>
              </div>
            </div>
          </div>
          <div className="analytics-chart">
            <div className="row g-2">
              <div className="col-8">
                <div className="card">
                  <div className="card-body">
                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                          <button className="card-tittle">
                            Setting up reports
                          </button>
                          <h6 className="card-subtitle">
                            Fast and easy access <br /> to analytics
                          </h6>
                          <p className="card-text">
                            One Platform is a comprehensive system of solutions
                            that will be the first step towareds digitalization
                            of your business.
                          </p>
                        </div>
                        <div className="col-6">
                          <SalesStatistics />
                          {/* <div className="analytics-image">
                           <img src={analyticsImage} alt="analyticsImage" />
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card black">
                  <div className="card-body">
                    <div className="container">
                      <div className="row g-2">
                        <div className="col-6">
                          <div className="user-image">
                            <div className="card">
                              <FontAwesomeIcon
                                icon={faLayerGroup}
                                className="layer-icon"
                              />

                              <div className="user-image">
                                <img src={userImage} alt="User Image" />
                                <img src={userImage} alt="User Image" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="transaction-wrapper">
                            <div className="card">
                              <div className="card-body">
                                <div className="card-title">
                                  <h6>Transactions</h6>
                                </div>
                                <div className="card-text">
                                <h1><Counter start={0} end={43000} duration={2000} />K</h1>
                                  <span>
                                    <FontAwesomeIcon icon={faCircleArrowUp} />{" "}
                                    +14%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text">
                        <h3 className="text-center">Widget Control</h3>
                        <p className="text-center px-3">
                          Reports provide a comprehensive overview of important
                          aspects of web analytics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 analytics-footer">
             <h6>Up to</h6>
             <h1>45%</h1>
             <p>Increase your analytics efficiency by up 45% Unique<br />
              algorithms provide insights from data reduce time for analysis<br />
              and save time for important informed decisions
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
