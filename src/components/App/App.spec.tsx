import { render, waitFor, screen } from '@testing-library/react'

import App from './App'

describe('App', function () {
  it("should display 'Hello World'", async function () {
    render(<App />)

    await waitFor(() => {
      expect(screen.queryByText('Hello World')).toBeInTheDocument()
    })
  })
})
