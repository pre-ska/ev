import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementAsync, decrementAsync } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { openModal } from "../modals/modalActions";

const mapState = state => ({
  data: state.test.data,
  loading: state.async.loading,
  buttonName: state.async.elementName
});

const mapActions = {
  incrementAsync,
  decrementAsync,
  openModal
};

class TestComponent extends Component {
  state = {
    latLng: {
      lat: 59.0,
      lng: 30.66
    }
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          latLng: latLng
        });
      })
      .catch(error => console.error("Error", error));
  };

  render() {
    const {
      data,
      incrementAsync,
      decrementAsync,
      openModal,
      loading,
      buttonName
    } = this.props;
    return (
      <div>
        <h1>test component</h1>
        <h3>the answer is: {data}</h3>
        <Button
          name="increment"
          loading={buttonName === "increment" && loading}
          onClick={e => incrementAsync(e.target.name)}
          positive
          content="Increment"
        />
        <Button
          name="decrement"
          loading={buttonName === "decrement" && loading}
          onClick={e => decrementAsync(e.target.name)}
          negative
          content="Decrement"
        />
        <Button
          onClick={() => openModal("TestModal", { data: 42 })}
          color="teal"
          content="Open modal"
        />
        <br />
        <br />
        <TestPlaceInput selectAddress={this.handleSelect} />
        <br />
        <br />
        <SimpleMap key={this.state.latLng.lng} latLng={this.state.latLng} />
      </div>
    );
  }
}

export default connect(
  mapState,
  mapActions
)(TestComponent);
