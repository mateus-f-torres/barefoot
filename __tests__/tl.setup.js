import '@testing-library/jest-dom/extend-expect'
import mockFetch from 'jest-fetch-mock'

global.fetch = mockFetch
