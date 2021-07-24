import { graphql } from 'msw'
export const handlers = [
  graphql.query('GetUsers', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            __typename: 'users',
            id: 'b6137849-7f1d-c2db-e609-22056fb86db3',
            name: 'Test user A',
            created_at: '2021-01-13T18:06:46.412969+00:00',
          }
        ]
      })
    )
  })
]