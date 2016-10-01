import { handleActions } from 'redux-actions';

import { SAVE_QUICK_BUTTON } from '../actions';

export const INITIAL_STATE = {
  name: 'Step Die',
  value: '6'
}

export default handleActions({
  [SAVE_QUICK_BUTTON]: (state, { payload }) => ({
    ...state,
    name: payload.name,
    value: payload.value
  })
}, INITIAL_STATE);
