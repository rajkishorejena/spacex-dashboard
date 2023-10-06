import { NavLink } from "react-router-dom";
import Table from "../Components/Table";

const Dashboard = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 p-2 flex flex-row items-center justify-between">
        <div className="container mx-auto flex items-center">
          <h1 className="text-2xl font-bold text-white">Space-x Dashboard</h1>
        </div>
        {/* Navigation Menu */}
        <nav className=" p-4">
          <div className="container mx-auto">
            {/* Add your navigation menu items here */}
            <ul className="flex space-x-4">
               <NavLink to="/" className={`text-white`}>Home </NavLink> 
               <NavLink to="/dashboard" className={({isActive})=>isActive?"underline text-white font-semibold":"text-white"}>Dashboard </NavLink> 
            </ul>
          </div>
        </nav>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto p-4">
        {/* Add your dashboard content here */}
        <p>This is the dashboard content.</p>
        <Table/>
      </div>
    </div>
  );
};

export default Dashboard;
