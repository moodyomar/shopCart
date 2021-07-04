import {createStore} from 'redux';
import { allReducers } from './redux/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(allReducers,devTools);
