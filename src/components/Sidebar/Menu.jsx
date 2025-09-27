import "./Sidebar.scss";

import { menu } from "../../data";
import { useState } from "react";

import { DropdownIcon } from "../../icons/DropdownIcon";

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
                        <DropdownIcon width={16} height={16} />
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
