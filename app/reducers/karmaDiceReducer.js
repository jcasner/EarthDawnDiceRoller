import { handleActions } from 'redux-actions';

import {
  LOAD_KARMA_DIE,
  SAVE_KARMA_DIE
} from '../actions';

export const initialState = {
  karmaDie: 6
}

export default handleActions({
  [LOAD_KARMA_DIE]: (state, { payload }) => ({
    ...state
  }),
  [SAVE_KARMA_DIE]: (state, { payload }) => ({
    ...state,
    karmaDie: payload
  })
}, initialState);

export const karmaDieSelector = state => state.karmaDie;
