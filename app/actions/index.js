import { createAction } from 'redux-actions';
import store from 'react-native-simple-store';

// Quick dice actions
export const LOAD_QUICK_BUTTONS = 'LOAD_QUICK_BUTTONS';
export const SAVE_QUICK_BUTTON = 'SAVE_QUICK_BUTTON';

export const loadQuickButtons = createAction(LOAD_QUICK_BUTTONS);

export const saveQuickButton = createAction(SAVE_QUICK_BUTTON, (id, value) => {
  return {
    id,
    value
  };
});

// Karma dice actions
export const LOAD_KARMA_DIE = 'LOAD_KARMA_DIE';
export const SAVE_KARMA_DIE = 'SAVE_KARMA_DIE';

export const loadKarmaDie = createAction(LOAD_KARMA_DIE);
export const saveKarmaDie = createAction(SAVE_KARMA_DIE);
