import { createStore } from 'redux'
import rootReducer from './rootReducer';
import { composeWithDevTools} from 'redux-devtools-extension'  //enhancer
 
const store = createStore(rootReducer, composeWithDevTools());


export default store;