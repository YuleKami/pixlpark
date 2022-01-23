import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import OrderReducer from "./reducers/OrderReducer";

const reducers = combineReducers({
    orders: OrderReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;