import { createStore } from 'redux';
import { autoRehydrate } from 'redux-persist';

import reducers from './reducers';

export default () => createStore(reducers, undefined, autoRehydrate());
