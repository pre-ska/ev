import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import { reducer as ToastrReducer } from "react-redux-toastr";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer";
import modelReducer from "../../features/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../../features/async/asyncReducers";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  test: testReducer,
  form: FormReducer,
  events: eventReducer,
  modals: modelReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: ToastrReducer
});

export default rootReducer;
