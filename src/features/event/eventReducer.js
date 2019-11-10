import { createReducer } from "../../app/common/util/reducerUtils";
import {
  CREATE_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
  FETCH_EVENTS
} from "./eventConstants";

const initialState = [];
//reducer funkcija...dodam novi event na kraj niza - statea
const createEvent = (state, payload) => {
  return [...state, payload.event];
};

// u ovom slučaju ću spreadti sve iz starog arraya
// osim onog eventa koji je promjenjen-updejtan
// taj promjenjeni će ići na kraj
// tj. ima novu poziciju
const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    payload.event
  ];
};

// delete je jasan sam po sebi...
const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

const fetchEvents = (state, payload) => {
  return payload.events;
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent,
  [FETCH_EVENTS]: fetchEvents
});
