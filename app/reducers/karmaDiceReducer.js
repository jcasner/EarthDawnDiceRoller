import { handleActions } from 'redux-actions';

import {
  LOAD_KARMA_DIE,
  SAVE_KARMA_DIE
} from '../actions';

export const initialState = {
  karmaDieSides: '6'
}

export default handleActions({
  [LOAD_KARMA_DIE]: (state, { payload }) => ({
    ...state
  }),
  [SAVE_KARMA_DIE]: (state, { payload }) => ({
    ...state,
    karmaDieSides: payload
  })
}, initialState);

export const karmaDieSelector = state => state.karmaDice.karmaDieSides;
