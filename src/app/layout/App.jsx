import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import EventForm from "../../features/event/EventForm/EventForm";
import TestComponent from "../../features/testarea/TestComponent";
import ModalManager from "../../features/modals/ModalManager";

/*
razbio sam rute na dva dijela
prvi je samo sa '/' - home page
a ako nije, podrazumjeva se da je bilo koja od ostalih
render metoda (umjesto component) ne prenosi automatski propse... 
tako da ih moram ručno kao argumente od arrow funk. prenjeti
sintaksa za bilo koji PATH je path="/(.+)"


path od routera može primiti array...svaka ruta otvara istu komponentu
to je slučaj sa "EventForm"
*/
class App extends Component {
  render() {
    return (
      <>
        <ModalManager />
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route exact path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={EventDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route
                    path={["/createEvent", "/manage/:id"]}
                    component={EventForm}
                  />
                  <Route path="/test" component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </>
    );
  }
}

export default withRouter(App);

/*
u app sam uveo "withRouter" zbog toga što želim koristiti "key" na svakoj routi
pošto sam app nema nikakve propse na koje bih zakačio key
uveo sam propse od routera
sad switch može koristiti key iz router propsa

to je za formu da se osvježi ako sa edit form kliknem na crete form
inače nebi osvježio formu i ostali bi podaci od edit neke forme
a meni treba prazna polja


*/
