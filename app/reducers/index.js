import { combineReducers } from 'redux';

import karmaDice from './karmaDiceReducer';
import quickDice from './quickDiceReducer';

export default combineReducers({
  karmaDice,
  quickDice
});
