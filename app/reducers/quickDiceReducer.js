import { handleActions } from 'redux-actions';

import {
  LOAD_QUICK_BUTTONS,
  SAVE_QUICK_BUTTON,
} from '../actions';
import {
  QUICK_BUTTON_ONE,
  QUICK_BUTTON_TWO,
  QUICK_BUTTON_THREE
} from '../constants/QuickButtonNames';

export const initialState = {
  [QUICK_BUTTON_ONE]: '6',
  [QUICK_BUTTON_TWO]: '8',
  [QUICK_BUTTON_THREE]: '10'
}

export default handleActions({
  [LOAD_QUICK_BUTTONS]: (state, { payload }) => ({
    ...state
  }),
  [SAVE_QUICK_BUTTON]: (state, { payload }) => ({
    ...state,
    [payload.id]: payload.value
  })
}, initialState);

export const quickButtonOneSelector = state => state.quickDice[QUICK_BUTTON_ONE];

export const quickButtonTwoSelector = state => state.quickDice[QUICK_BUTTON_TWO];

export const quickButtonThreeSelector = state => state.quickDice[QUICK_BUTTON_THREE];
