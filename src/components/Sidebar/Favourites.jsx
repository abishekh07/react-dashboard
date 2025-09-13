import "./Sidebar.scss";

import { useState } from "react";

function Favourites() {
  const [activeTab, setActiveTab] = useState("favourites");

  const tabs = [
    {
      id: "favourites",
      label: "Favourites"
    },
    {
      id: "recents",
      label: "Recently"
    }
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

export default Favourites;
