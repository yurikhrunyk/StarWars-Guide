import { graphql } from 'msw'

export const handlers = [
  graphql.query('People', (req, res, ctx) => {
    console.log('im here')
    return res(
      ctx.data({
        people: [
          {
            id: '123',
            name: 'Luke Skywalker',
          },
        ],
      })
    )
  }),
]
