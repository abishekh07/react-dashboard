import "./Topbar.scss";
import SidebarIcon from "../../assets/icons/sidebar.svg";
import FavoritesIcon from "../../assets/icons/star.svg";
import ThemeToggleIcon from "../../assets/icons/theme.svg";
import RefreshIcon from "../../assets/icons/refresh.svg";
import NotificationsIcon from "../../assets/icons/notification.svg";
import SearchIcon from "../../assets/icons/search.svg";

import { useRef } from "react";

function Topbar() {
  const currPage = "Default";
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div className="topbar">
      <div className="topbar__left">
        <button className="navigation__button" aria-label="Sidebar Toggle">
          <img src={SidebarIcon} alt="Navigation Rail Toggle" />
        </button>

        <button className="navigation__button" aria-label="Favorites">
          <img src={FavoritesIcon} alt="Favorites Icon" />
        </button>

        <div className="breadcrumb">
          <span className="breadcrumb__category">Dashboards</span>
          <span className="divider"> / </span>
          <span className="breadcrumb__page"> {currPage}</span>
        </div>
      </div>
      <div className="topbar__right">
        <div className="search">
          <div className="search__bar">
            <button
              type="button"
              aria-label="Focus Search"
              onClick={handleFocus}
              className="search__icon"
            >
              <img src={SearchIcon} alt="Search Icon" />
            </button>

            <input
              type="text"
              className="search__input"
              id="global-search"
              placeholder="Search"
              ref={inputRef}
            />
          </div>

          <button className="shortcuts">⌘/</button>
        </div>

        <div className="topbar__right-icons">
          <button
            className="navigation__button"
            aria-label="Light Mode / Dark Mode Toggle"
          >
            <img src={ThemeToggleIcon} alt="Theme Toggle Icon" />
          </button>

          <button className="navigation__button" aria-label="Refresh Icon">
            <img src={RefreshIcon} alt="Refresh Icon" />
          </button>

          <button
            className="navigation__button"
            aria-label="Notifications Icon"
          >
            <img src={NotificationsIcon} alt="Notifications Icon" />
          </button>

          <button
            className="navigation__button"
            aria-label="Notifications Panel Toggle"
          >
            <img src={SidebarIcon} alt="Notifications Panel Toggle Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
