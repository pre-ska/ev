import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const configureStore = () => {
  const middlewares = [thunk];

  const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(
    rootReducer,
    composedEnhancer //12-2
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
