import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { rest } from 'msw'
import { server } from './mocks/server'
import { MockedProvider } from '@apollo/client/testing'

// const mocks: any = [
//   {
//     request: {
//       query: GET_PEOPLE,
//     },
//     result: {
//       data: {
//         people: [{ id: 'asd', name: 'luke' }],
//       },
//     },
//   },
// ]

test('renders select type dropdown', () => {
  render(<App />)
  const select = screen.getByRole('option', { name: 'Select type' })

  expect(select).toBeInTheDocument()
})

test.only('renders select name dropdown', async () => {
  // render(
  //   <MockedProvider mocks={mocks}>
  //     <App />
  //   </MockedProvider>
  // )

  const selectType = screen.getByRole('combobox')
  userEvent.selectOptions(selectType, 'People')
  expect(
    (screen.getByRole('option', { name: 'People' }) as HTMLOptionElement)
      .selected
  ).toBeTruthy()

  const selectName = await screen.findByRole('option', {
    name: 'Luke Skywalker',
  })
  expect(selectName).toBeInTheDocument()
})

test('should render img after selecting name', async () => {
  render(<App />)

  const selectType = screen.getByRole('combobox')
  userEvent.selectOptions(selectType, 'People')
  expect(
    (screen.getByRole('option', { name: 'People' }) as HTMLOptionElement)
      .selected
  ).toBeTruthy()

  const selectName = await screen.findByRole('option', {
    name: 'Luke Skywalker',
  })
  expect(selectName).toBeInTheDocument()

  const nameList = await screen.findByTestId('name-list')
  userEvent.selectOptions(nameList, 'C-3P0')

  const img = await screen.findByRole('img')
  expect(img).toBeInTheDocument()
})

test('should render error message when server return status 500', async () => {
  server.resetHandlers(
    rest.get('https://swapi.dev/api/', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
    rest.get('https://swapi.dev/api/people', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )

  render(<App />)

  const selectType = screen.getByRole('combobox')
  userEvent.selectOptions(selectType, 'People')
  expect(
    (screen.getByRole('option', { name: 'People' }) as HTMLOptionElement)
      .selected
  ).toBeTruthy()

  const errorMessage = await screen.findByText('OH NO! ERROR!')
  expect(errorMessage).toBeInTheDocument()
})
