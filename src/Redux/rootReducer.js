import { combineReducers } from 'redux'
import shopReducer from './Webshop/shop-reducer'

const rootReducer = combineReducers({
    shop: shopReducer,
});


export default rootReducer;