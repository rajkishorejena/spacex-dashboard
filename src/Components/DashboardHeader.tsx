import { NavLink } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <header className="bg-gray-800 p-2 flex flex-row items-center justify-between">
      <div className="container mx-auto flex items-center">
        <h1 className="text-2xl font-bold text-white">Space-x Dashboard</h1>
      </div>
      {/* Navigation Menu */}
      <nav className=" p-4">
        <div className="container mx-auto">
          {/* Add your navigation menu items here */}
          <ul className="flex space-x-4">
            <NavLink to="/" className={`text-white`}>
              Home{" "}
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "underline text-white font-semibold" : "text-white"
              }
            >
              Dashboard{" "}
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
