import { gql } from '@apollo/client';

export const GET_SPACEX_DATA = gql`
  query SpaceXData {
    company {
        ceo
        cto
        employees
        headquarters {
          address
        }
      }
      roadster {
        apoapsis_au
      }
  }
`;


export const GET_SPACEX_ROCKET_DATA = gql`
  query SpaceXData {
    rockets {
        company
        country
        boosters
        active
        id
        mass {
          kg
        }
        name
        type
      }
  }
`;

export const GET_SPACEX_COMPANT_INFO = gql`
 query SpaceXData{
  company {
    ceo
    coo
    cto_propulsion
    cto
    employees
    founded
    founder
    headquarters {
      address
    }
    launch_sites
    links {
      website
    }
    summary
    name
    test_sites
    valuation
    vehicles
  }
 }
`;