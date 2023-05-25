import { reducer as AppReducer } from "./reducer";

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ AppReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
