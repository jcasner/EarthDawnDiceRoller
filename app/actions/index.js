import { createAction } from 'redux-actions';
import store from 'react-native-simple-store';

export const LOAD_QUICK_BUTTONS = 'LOAD_QUICK_BUTTONS';
export const SAVE_QUICK_BUTTON = 'SAVE_QUICK_BUTTON';

export const loadQuickButtons = createAction(LOAD_QUICK_BUTTONS);

export const saveQuickButton = createAction(SAVE_QUICK_BUTTON, (id, value) => {
  return {
    id,
    value
  };
});
