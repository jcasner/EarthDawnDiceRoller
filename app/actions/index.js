import { createAction } from 'redux-actions';
import store from 'react-native-simple-store';

// Quick dice actions
export const SAVE_QUICK_BUTTON = 'SAVE_QUICK_BUTTON';

export const saveQuickButton = createAction(SAVE_QUICK_BUTTON, (index, name, value) => {
  return {
    index,
    name,
    value
  };
});

// Karma dice actions
export const SAVE_KARMA_DIE = 'SAVE_KARMA_DIE';

export const saveKarmaDie = createAction(SAVE_KARMA_DIE);
