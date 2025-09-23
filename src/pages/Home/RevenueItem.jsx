import "./Home.scss";

function RevenueItem({ title, revenue, progress }) {
  return (
    <div className="rbl__city">
      <div className="rbl__city-info">
        <div className="rbl__city-name">{title}</div>
        <div className="rbl__city-revenue">{revenue}</div>
      </div>

      <div className="rbl__city-progress--track">
        <div
          className="rbl__city-progress--fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default RevenueItem;
