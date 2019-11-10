import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer";
import modelReducer from "../../features/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../../features/async/asyncReducers";

const rootReducer = combineReducers({
  test: testReducer,
  form: FormReducer,
  events: eventReducer,
  modals: modelReducer,
  auth: authReducer,
  async: asyncReducer
});

export default rootReducer;
