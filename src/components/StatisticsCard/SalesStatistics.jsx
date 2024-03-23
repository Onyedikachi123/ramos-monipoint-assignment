
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFull, faCircle, faCaretUp, faPlay } from '@fortawesome/free-solid-svg-icons';
import './SalesStatistics.css'; 
import Counter from '../Counter';

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
} from 'chart.js';

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
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Visit statistics',
      data: [0, 20, 60, 60, 80],
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 2,
      pointRadius: 3,
      pointBackgroundColor: 'rgba(255, 206, 86, 1)',
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
        <div className="sales-header">
          <FontAwesomeIcon icon={faSquareFull} className="icon profit-icon" />
          <div>
            <div className="total-profit">Total profit</div>
            <div className="profit-amount">$ 264,2K</div>
          </div>
          <div className="visitors-stat">
            <FontAwesomeIcon icon={faCircle} className="icon visitor-icon" />
            <div className="visitors"><Counter start={visitorCountStart} end={visitorCountEnd} duration={countDuration} />K</div>
            <div className="visitors-change">
              <FontAwesomeIcon icon={faCaretUp} className="icon" />
              +14%
            </div>
          </div>
        </div>
        <div className="line-chart">
          <Line data={lineData} options={lineOptions} />
        </div>
        <div className="rate-stat">
          <div className="rate-change">
            <FontAwesomeIcon icon={faPlay} className="icon play-icon" />
            Rate
          </div>
          <div className="rate-percentage">
            +  <Counter start={rateStart} end={rateEnd} duration={countDuration} isPercentage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesStatistics;
