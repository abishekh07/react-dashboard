import "./Home.scss";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Home() {
  const actualValues = [17, 20, 18, 22, 15, 19];
  const projectedValues = actualValues.map((v) => v + 5);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Projections",
        data: projectedValues,
        backgroundColor: "rgba(168, 197, 218, 0.5)",
        borderRadius: 4,
        barPercentage: 0.7,
        categoryPercentage: 0.8,
        grouped: false,
      },
      {
        label: "Actuals",
        data: actualValues,
        backgroundColor: "rgba(168, 197, 218, 1)",
        borderRadius: 0,
        barPercentage: 0.7,
        categoryPercentage: 0.8,
        grouped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        offset: true,
        ticks: {
          color: "rgba(28, 28, 28, 0.4)",
          font: {
            size: 12,
          },
        },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "rgba(28, 28, 28, 0.4)",
          font: {
            size: 12,
          },
          callback: (value) => (value > 0 ? value + "M" : value),
        },
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
    },
  };

  return (
    <div className="Home">
      <h2 className="overview__caption">eCommerce</h2>

      <div className="overview">
        <div className="summary overview__section">
          <div className="summary__card customers">
            <h3 className="summary__title">Customers</h3>

            <div className="summary__info">
              <div className="summary__value">3,781</div>
              <div className="summary__delta">
                <span>+11.01%</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="summary__card orders">
            <h3 className="summary__title">Orders</h3>

            <div className="summary__info">
              <div className="summary__value">1,219</div>
              <div className="summary__delta">
                <span>-0.03%</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="summary__card revenue">
            <h3 className="summary__title">Revenue</h3>

            <div className="summary__info">
              <div className="summary__value">$695</div>
              <div className="summary__delta">
                <span>+15.03%</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="summary__card growth">
            <h3 className="summary__title">Growth</h3>

            <div className="summary__info">
              <div className="summary__value">30.1%</div>
              <div className="summary__delta">
                <span>+6.08%</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="projections overview__section">
          <h3 className="projections__caption">Projections vs Actuals</h3>

          <div className="projections__chart">
            <Bar data={data} options={options} />
          </div>
        </div>

        <div className="revenue-chart overview__section">Revenue Chart</div>

        <div className="revenue-by-location overview__section">
          Revenue by Location
        </div>

        <div className="top-selling-products overview__section">
          Top Selling Products
        </div>

        <div className="total-sales overview__section">Total Sales</div>
      </div>
    </div>
  );
}

export default Home;
