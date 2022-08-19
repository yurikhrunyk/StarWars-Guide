import { request, gql } from 'graphql-request'

const GRAPHQL_URL = 'https://swapi-graphql.netlify.app/.netlify/functions/index'

export async function getAllPeople() {
  const query = gql`
    query People {
      allPeople {
        people {
          id
          name
        }
      }
    }
  `
  const { allPeople } = await request(GRAPHQL_URL, query)
  return allPeople.people
}

// export const GET_PEOPLE = gql`
//   query People {
//     allPeople {
//       people {
//         id
//         name
//       }
//     }
//   }
// `

// export const GET_PLANETS = gql`
//   query Planets {
//     allPlanets {
//       planets {
//         id
//         name
//       }
//     }
//   }
// `

// export const GET_STARSHIPS = gql`
//   query Starships {
//     allStarships {
//       starships {
//         id
//         name
//       }
//     }
//   }
// `
