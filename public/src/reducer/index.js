import { combineReducers } from 'redux';
import homePageStockReducer from './HomePageStockReducer';

const rootReducer = combineReducers({
    homeStocks: homePageStockReducer
});

export default rootReducer;