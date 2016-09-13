import { createStore } from 'redux';
import { autoRehydrate } from 'redux-persist';

import quickDice from './reducers/quickDiceReducer';

export default () => createStore(quickDice, undefined, autoRehydrate());
