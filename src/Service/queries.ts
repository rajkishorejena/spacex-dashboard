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