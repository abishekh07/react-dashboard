import "./Sidebar.scss";
import Logo from "@public/logo.svg";

import { menu } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

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

function Favourites() {
  const [activeTab, setActiveTab] = useState("favourites");

  const tabs = [
    {
      id: "favourites",
      label: "Favourites",
    },
    {
      id: "recents",
      label: "Recently",
    },
  ];

  return (
    <div className="favourites">
      <div className="favourites__tabs">
        {tabs.map((tab) => (
          <button
            className={`favourites__tabs-btn ${
              activeTab === tab.id ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
            key={tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="favourites__content">
        {activeTab === "favourites" && (
          <div id="favourites" className="tab__content">
            <ul className="favourites__content-list">
              <li className="favourites__content-list--item">Overview</li>
              <li className="favourites__content-list--item">Projects</li>
            </ul>
          </div>
        )}

        {activeTab === "recents" && (
          <div id="recents" className="tab__content">
            <ul className="favourites__content-list">
              <li className="favourites__content-list--item">Projects</li>
              <li className="favourites__content-list--item">Online Courses</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="menu__item" key={item.id}>
          <h2>{item.title}</h2>

          <div className="menu__list">
            {item.listItems.map((listItem) => (
              <div className="menu__list-item" key={listItem.id}>
                <div>
                  <span
                    className={`${listItem.menuItems ? "dropdown-arrow" : ""}`}
                  ></span>

                  <img src={`/icons/${listItem.icon}`} />

                  <span>{listItem.title}</span>
                </div>

                {listItem.menuItems && (
                  <ul className="submenu">
                    {listItem.menuItems.map((menuItem) => (
                      <li className="submenu__item" key={menuItem}>
                        {menuItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
