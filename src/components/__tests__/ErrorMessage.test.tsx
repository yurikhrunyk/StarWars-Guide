import { render, screen } from '@testing-library/react'
import { ErrorMessage } from '../ErrorMessage'

test('should render error message', () => {
  render(<ErrorMessage />)

  expect(screen.getByText('OH NO! ERROR!')).toBeInTheDocument()
})
