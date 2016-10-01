import { handleActions } from 'redux-actions';

import {
  SAVE_KARMA_DIE
} from '../actions';

export const initialState = {
  karmaDieSides: '6'
}

export default handleActions({
  [SAVE_KARMA_DIE]: (state, { payload }) => ({
    ...state,
    karmaDieSides: payload
  })
}, initialState);

export const karmaDieSelector = state => state.karmaDice.karmaDieSides;
