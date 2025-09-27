import Home from "./pages/Home/Home";
import Orders from "./pages/Orders/Orders";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import ActivityPanel from "./components/ActivityPanel/ActivityPanel";

import "./styles/global.scss";

import { useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/orders",
        Component: Orders,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation();
  const showNotifications = location.pathname !== "/orders";

  function handleToggleDarkMode(value) {
    setDarkMode(value);
  }

  return (
    <div className="main">
      <Sidebar />

      <div className="container">
        <div className="navContainer">
          <Topbar darkMode={darkMode} onToggle={handleToggleDarkMode} />
        </div>

        <div className="contentContainer">
          <Outlet context={{ isDarkMode: darkMode }} />
        </div>
      </div>

      {showNotifications && <ActivityPanel />}
    </div>
  );
}

export default App;
