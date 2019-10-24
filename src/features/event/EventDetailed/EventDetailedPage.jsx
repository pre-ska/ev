import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";

//ownProps su već postojeći propsi koje mapState može iščitati
const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  // provjerim dali postoji id u adresi, i dali postoji niz eventa
  //ako postoje, filtriram niz da mi ostane samo onaj koji tražim...
  // ali to je niz pa moram [0]
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  // nakon svih ispitivanja, vratim OBJEKT - event, koji ide u propse moje komponente
  return {
    event
  };
};
const EventDetailedPage = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(EventDetailedPage);
