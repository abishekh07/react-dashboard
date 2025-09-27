import "./Home.scss";
import WorldMap from "../../assets/images/world-map.svg";

import { useOutletContext } from "react-router-dom";

import {
  topSellingProducts,
  totalSales,
  revenueByLocation as revenues,
} from "../../data";

import RevenueItem from "./RevenueItem";

import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Home() {
  const { isDarkMode } = useOutletContext();

  const actualValues = [17, 20, 18, 22, 15, 19];
  const projectedValues = actualValues.map((v) => v + 5);

  const barGraphData = {
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

  const barGraphOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        offset: true,
        ticks: {
          color: isDarkMode
            ? "rgba(255, 255, 255, 0.4)"
            : "rgba(28, 28, 28, 0.4)",
          font: {
            size: 12,
          },
        },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: isDarkMode
            ? "rgba(255, 255, 255, 0.4)"
            : "rgba(28, 28, 28, 0.4)",
          font: {
            size: 12,
          },
          callback: (value) => (value > 0 ? value + "M" : value),
        },
        grid: {
          color: isDarkMode
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(0, 0, 0, 0.05)",
        },
      },
    },
  };

  const doughnutChartData = {
    labels: ["Direct", "Affiliate", "E-mail", "Sponsored"],
    datasets: [
      {
        data: [34, 38, 10, 18],
        backgroundColor: [
          isDarkMode ? "#C6C7F8" : "#1c1c1c",
          "#BAEDBD",
          "#B1E3FF",
          "#95A4FC",
        ],
        borderRadius: 10,
        spacing: 4,
      },
    ],
  };

  const doughnutChartOptions = {
    cutout: "55%",
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#3a3a3a",
        bodyColor: "#fff",
        padding: 10,
        bodyFont: {
          size: 16,
        },
        borderRadius: 8,
        callbacks: {
          label: function (context) {
            return `${context.parsed}%`;
          },
        },
      },
    },
  };

  const revenueChartLegends = [
    {
      id: "current-week",
      color: isDarkMode ? "#C6C7F8" : "#1C1C1C",
      title: "Current Week",
      info: "$58,211",
    },
    {
      id: "previous-week",
      color: "#A8C5DA",
      title: "Previous Week",
      info: "$68,768",
    },
  ];

  return (
    <div className="Home">
      <h2 className="overview__caption">eCommerce</h2>

      <div className="overview">
        <div className="summary overview__section">
          <div className="summary__card customers">
            <h3 className="overview__title">Customers</h3>

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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="summary__card orders">
            <h3 className="overview__title">Orders</h3>

            <div className="summary__info">
              <div className="summary__value">1,219</div>
              <div className="summary__delta negative">
                <span>-0.03%</span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="summary__card revenue">
            <h3 className="overview__title">Revenue</h3>

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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="summary__card growth">
            <h3 className="overview__title">Growth</h3>

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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="projections overview__section">
          <h3 className="overview__title">Projections vs Actuals</h3>

          <div
            className="projections__chart"
            style={{ width: "384px", height: "168px" }}
          >
            <Bar data={barGraphData} options={barGraphOptions} />
          </div>
        </div>

        <div className="revenue-chart overview__section">
          <div className="rc__header">
            <h3 className="overview__title">Revenue</h3>

            <div className="rc__partition">|</div>

            {revenueChartLegends.map((rcLegend) => (
              <div className="rc__legend" key={rcLegend.id}>
                <div className="rc__legend-color">
                  <span style={{ backgroundColor: `${rcLegend.color}` }}></span>
                </div>

                <div className="rc__legend-info">
                  <span className="rc__legend-info--title">
                    {rcLegend.title}
                  </span>

                  <span className="rc__legend-info--rate">{rcLegend.info}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="revenue-by-location overview__section">
          <h3 className="overview__title">Revenue by Location</h3>

          <div className="rbl__map">
            <img src={WorldMap} alt="World Map svg" />
          </div>

          <ul className="rbl__cities">
            {revenues.map((revenue) => (
              <RevenueItem
                key={revenue.id}
                title={revenue.title}
                revenue={revenue.revenue}
                progress={revenue.progress}
              />
            ))}
          </ul>
        </div>

        <div className="top-selling-products overview__section">
          <h3 className="overview__title">Top Selling Products</h3>

          <div className="tsp-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                {topSellingProducts.map((prod) => (
                  <tr key={prod.id}>
                    <td>{prod.title}</td>
                    <td>{prod.price}</td>
                    <td>{prod.quantity}</td>
                    <td>{prod.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="total-sales overview__section">
          <h3 className="overview__title">Total Sales</h3>

          <div className="total-sales__chart">
            <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          </div>

          <table className="total-sales__table">
            <tbody>
              {totalSales.map((sale) => (
                <tr key={sale.id}>
                  <td>
                    <div className="total-sales__color">
                      <span style={{ backgroundColor: `${sale.color}` }}></span>
                    </div>
                    <div>{sale.title}</div>
                  </td>

                  <td>${sale.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
