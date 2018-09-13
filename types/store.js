//@flow
import type {
  Store as ReduxStore,
  Dispatch as ReduxDispatch,
} from 'redux';

import type {Action} from './actions.js';
import type {State} from './state.js';

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;

