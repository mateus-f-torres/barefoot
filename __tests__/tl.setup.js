import '@testing-library/jest-dom/extend-expect'
import mockFetch from 'jest-fetch-mock'

import setupRenderWithReduxAndSaga from './setupRenderWithReduxAndSaga'
import './i18n'

global.fetch = mockFetch
global.setupRenderWithReduxAndSaga = setupRenderWithReduxAndSaga
