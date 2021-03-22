import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const storeInit = createStore(rootReducer, devToolsEnhancer());

export default storeInit;
