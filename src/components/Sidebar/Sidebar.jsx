import "./Sidebar.scss";
import Logo from "/logo.svg";

import { Link } from "react-router-dom";
import Favourites from "./Favourites";
import Menu from "./Menu";

function Sidebar() {
  return (
    <div className="Sidebar">
      <Link className="logo" to="/">
        <img src={Logo} alt="ByeWind Logo" width={24} height={24} />
        <span className="logo__name">ByeWind</span>
      </Link>

      <Favourites />

      <Menu />
    </div>
  );
}

export default Sidebar;
