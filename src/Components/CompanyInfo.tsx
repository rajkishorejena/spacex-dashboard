import { ReactNode, useEffect, useState } from "react";
import client from "../Service/Apollo";
import { GET_SPACEX_COMPANT_INFO } from "../Service/queries";

interface CompanyData {
  ceo: string;
  coo: string;
  cto_propulsion: string;
  cto: string;
  employees: number;
  founded: number;
  founder: string;
  headquarters: {
    address: string;
  };
  launch_sites: number;
  links: {
    website: string;
  };
  summary: string;
  name: string;
  test_sites: number;
  valuation: number;
  vehicles: number;
}
const CompanyInfo = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [companyData, setCompanyData] = useState<CompanyData>({
    ceo: "",
    coo: "",
    cto_propulsion: "",
    cto: "",
    employees: 0,
    founded: 0,
    founder: "",
    headquarters: {
      address: "",
    },
    launch_sites: 0,
    links: {
      website: "",
    },
    summary: "",
    name: "",
    test_sites: 0,
    valuation: 0,
    vehicles: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: GET_SPACEX_COMPANT_INFO,
        });
        setCompanyData(data.company);
        console.log("company Data", data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const Info = (key: string, value: string | number): ReactNode => {
    return (
      <p>
        <strong>{`${key}:`}</strong> {value}
      </p>
    );
  };
  return (
    <div className="bg-white  rounded-lg p-6">
      {loading ? (
        <p>Loading Company Info</p>
      ) : (
        <>
          {error ? (
            <p> Not able fetch Company Info </p>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-sky-800">
                {companyData.name}
              </h2>
              <p className="text-gray-600">{companyData.summary}</p>
              <div className="mt-4 text-black">
                {Info("Founder", companyData.founder)}
                {Info("Founded", companyData.founded)}
                {Info("CEO", companyData.ceo)}
                {Info("COO", companyData.coo)}
                {Info("CTO Propulsion", companyData.cto_propulsion)}
                {Info("Employees", companyData.employees)}
                {Info("Valuation", companyData.valuation)}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CompanyInfo;
