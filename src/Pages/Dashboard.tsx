import DashboardHeader from "../Components/DashboardHeader";
import Table from "../Components/Table";
import CompanyInfo from "../Components/CompanyInfo";
import SpaceXMissionTable from "../Components/SpaceXMissionTable";

const Dashboard = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen ">
      {/* Header */}
      <DashboardHeader />
      {/* Dashboard Content */}
      <div className="container mx-auto p-4">
        {/* Space-x Tabular Data */}

        <div className="w-full flex lg:flex-row gap-2 flex-col items-center">
          <div className="w-full">
            <p className="text-lg font-semibold text-white py-1">
              Space-x Company Info
            </p>
            <CompanyInfo />
          </div>

          <div className="w-full">
            <p className="text-lg font-semibold text-white py-1">
              SpaceX Mission List
            </p>
            <SpaceXMissionTable />
          </div>
        </div>

        <div className="w-full pb-3">
          <p className="text-lg font-semibold text-white py-2">
            Space-x Rocket List
          </p>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
