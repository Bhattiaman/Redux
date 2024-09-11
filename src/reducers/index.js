import changeTheNumber from "./upDown";

import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    changeTheNumber
})
// const store = createStore(rootReducer,window.__REDUX_DEVTOOLS-EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default rootReducer;
