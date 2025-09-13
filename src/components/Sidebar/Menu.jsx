import "./Sidebar.scss";

import { menu } from "../../data";
import { useState } from "react";

function Menu() {
  const [openItem, setOpenItem] = useState("");

  function toggleItem(id) {
    setOpenItem(openItem === id ? "" : id);
  }

  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="menu__item" key={item.id}>
          <h2>{item.title}</h2>

          <div className="menu__list">
            {item.listItems.map((listItem) => {
              const uid = `${item.id}-${listItem.id}`;

              return (
                <div
                  className={`menu__list-item ${
                    openItem === uid ? "open" : ""
                  }`}
                  key={listItem.id}
                >
                  <div className="menu__list-item--info">
                    {listItem.menuItems ? (
                      <button
                        className="dropdown-arrow"
                        onClick={() => toggleItem(uid)}
                      >
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
                            d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z"
                            fill="#1C1C1C"
                            fillOpacity="0.2"
                          />
                        </svg>
                      </button>
                    ) : (
                      <span></span>
                    )}

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
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
