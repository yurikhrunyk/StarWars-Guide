import { gql } from '@apollo/client'

export const GET_PEOPLE = gql`
  query People {
    allPeople {
      people {
        id
        name
      }
    }
  }
`

export const GET_PLANETS = gql`
  query Planets {
    allPlanets {
      planets {
        id
        name
      }
    }
  }
`

export const GET_STARSHIPS = gql`
  query Starships {
    allStarships {
      starships {
        id
        name
      }
    }
  }
`

export const queryArray = [GET_PEOPLE, GET_PLANETS, GET_STARSHIPS]
