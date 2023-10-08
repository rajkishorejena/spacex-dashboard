import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { BiHome } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const DashboardHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-gray-800 p-2 flex flex-row items-center justify-between">
      <div className="container mx-auto flex items-center">
        <h1 className="text-2xl font-bold text-white">Space-x Dashboard</h1>
      </div>

      {/* Menu Icon (visible in mobile view) */}
      <div className="md:hidden">
        <BiHome
          className="text-white text-4xl"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      {/* Navigation Menu */}
      <nav className={`md:block p-4 hidden`}>
        <div className="container mx-auto">
          {/* Add your navigation menu items here */}
          <ul className="flex space-x-4">
            <NavLink
              to="/"
              className={`text-white flex flex-col items-center  `}
            >
              <BiHome className="text-white text-2xl " />
              <p>Home</p>
            </NavLink>
            {/* <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "underline text-white font-semibold" : "text-white"
              }
            >
              Dashboard{" "}
              <TbDeviceDesktopAnalytics className="text-white text-4xl" />
            </NavLink> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
