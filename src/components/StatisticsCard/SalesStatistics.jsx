import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faCaretUp,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import "./SalesStatistics.css";
import Counter from "../Counter";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Visit statistics",
      data: [0, 20, 60, 60, 80],
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      borderColor: "rgba(255, 206, 86, 1)",
      borderWidth: 2,
      pointRadius: 3,
      pointBackgroundColor: "rgba(255, 206, 86, 1)",
      tension: 0.4,
    },
  ],
};

const lineOptions = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
};

const SalesStatistics = () => {
  const visitorCountStart = 0;
  const visitorCountEnd = 56000;
  const countDuration = 2000;

  const rateStart = 0;
  const rateEnd = 58; // As it's a percentage, we use the number itself without '000

  return (
    <div className="sales-statistics">
      <div className="statistic-card">
      <h4>Sales statistic</h4>
        <div className="sales-header">
          
          <div className="header-icon-wrapper">
          <FontAwesomeIcon icon={faLayerGroup} className="icon profit-icon"/>
          </div>
         
          <div>
            <div className="total-profit">Total profit</div>
            <div className="profit-amount">$ 264,2K</div>
          </div>
          <div className="visitors-stat">
            <p>visitors</p>
            <div className="progress-line"></div>
            <div className="visitors-change">
              <FontAwesomeIcon icon={faCaretUp} className="icon" />
              +14%
            </div>
            <div className="visitors">
              <Counter
                start={visitorCountStart}
                end={visitorCountEnd}
                duration={countDuration}
              />
              K
            </div>
          </div>
        </div>
        <h6>Visit statistics</h6>
        <div className="line-chart">
          
          <Line data={lineData} options={lineOptions} />
          <div className="rate-stat">
      <div className="rate-change">
        Rate <FontAwesomeIcon icon={faGear} className="icon gear-icon"/>
      </div>
      <div className="rate-percentage">
        +<Counter start={rateStart} end={rateEnd} duration={countDuration} />
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default SalesStatistics;
