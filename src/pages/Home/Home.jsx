import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <h2>eCommerce</h2>

      <div className="overview">
        <div className="summary overview__section">Summary</div>

        <div className="projections overview__section">Projections</div>

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
