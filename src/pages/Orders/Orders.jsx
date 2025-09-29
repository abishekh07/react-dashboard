import "./Orders.scss";

import { useRef } from "react";

import { AddIcon } from "../../icons/AddIcon";
import { FunnelIcon } from "../../icons/FunnelIcon";
import { SortIcon } from "../../icons/SortIcon";
import { SearchIcon } from "../../icons/SearchIcon";

function Orders() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div className="orders">
      <h2 className="orders__caption">Order List</h2>

      <div className="orders__table">
        <div className="orders__refine-panel">
          <div className="orders__filter">
            <button className="orders__filter-btn">
              <AddIcon width={20} height={20} />
            </button>

            <button className="orders__filter-btn">
              <FunnelIcon width={20} height={20} />
            </button>

            <button className="orders__filter-btn">
              <SortIcon width={20} height={20} />
            </button>
          </div>

          <div className="orders__search">
            <div className="orders__search-bar">
              <button
                type="button"
                aria-label="Focus Search"
                onClick={handleFocus}
                className="orders__search-icon"
              >
                <SearchIcon width={16} height={16} />
              </button>

              <input
                type="text"
                className="orders__search-input"
                id="orders-search"
                placeholder="Search"
                ref={inputRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
