import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

import RootState from "./reducer"

const middleware = composeWithDevTools(applyMiddleware(promise, thunk));

export default createStore(RootState, middleware);
