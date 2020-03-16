import '@testing-library/jest-dom/extend-expect'
import {enableFetchMocks} from 'jest-fetch-mock'

import setupRenderWithReduxAndSaga from './setupRenderWithReduxAndSaga'
import './i18n'

enableFetchMocks()
global.setupRenderWithReduxAndSaga = setupRenderWithReduxAndSaga
