import
  quickButtonReducer,
  {
    INITIAL_STATE as BUTTON_INITIAL_STATE
  } from './quickButtonReducer';
import { SAVE_QUICK_BUTTON } from '../actions';

export const INITIAL_STATE = [
  BUTTON_INITIAL_STATE,
  BUTTON_INITIAL_STATE,
  BUTTON_INITIAL_STATE
]

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === SAVE_QUICK_BUTTON) {
    return [
      ...state.slice(0, action.payload.index),
      quickButtonReducer(state[action.payload.index], action),
      ...state.slice(action.payload.index + 1)
    ]
  }
  return state;
};

export default reducer;
