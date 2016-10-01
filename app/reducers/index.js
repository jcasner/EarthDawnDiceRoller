import { combineReducers } from 'redux';

import karmaDice from './karmaDiceReducer';
import quickButtons from './quickButtonsReducer';

export default combineReducers({
  karmaDice,
  quickButtons
});
