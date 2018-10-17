import React from "react";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { Home } from "/imports/ui/pages/home";
import { Registrations } from "/imports/model/registrations.js";
import moment from "moment";

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registrations: [],
      senderId: Meteor.settings.public.fcm ? Meteor.settings.public.fcm.senderId : null,
      message: null
    }
    this.sendNotification = this.sendNotification.bind(this);
    Meteor.subscribe('registrations');
  }

  componentDidMount() {
    Tracker.autorun(() => {
      let state = this.state;
      state.registrations = Registrations.find().fetch();
      this.setState(state);
    });


  }

  sendNotification(registrationId, data) {
    Meteor.call('sendMessage', registrationId, data, (error, response) => {
      if (error) {
        this.displayAlert(error.message, "danger");
      } else {
        this.displayAlert("message sent", "info");
      }
    }
    );
  }

  displayAlert(text, type) {
    let state = this.state;
    state.message = {
      type: type,
      text: moment().format() + " --- " + text
    };
    this.setState(state);
  }

  render() {
    return (<Home
      registrations={this.state.registrations}
      senderId={this.state.senderId}
      onSendClick={this.sendNotification}
      message={this.state.message}
    />);
  }
}
