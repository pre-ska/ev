import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";

// event je data (objekt) iz database-a... a ne neki event od listenera
// on sadrži title, author, mjesto događanja, ko je pozvan.....
export const createEvent = event => {
  return {
    type: CREATE_EVENT,
    payload: {
      event
    }
  };
};

export const updateEvent = event => {
  return {
    type: UPDATE_EVENT,
    payload: {
      event
    }
  };
};

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  };
};
