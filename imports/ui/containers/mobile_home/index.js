import React from "react";
import { MobileHome } from "/imports/ui/pages/mobile_home";

export default class MobileHomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registration: null,
      messages: []
    };
    this.onRegisterClick = this.onRegisterClick.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.onGoogleNotification = this.onGoogleNotification.bind(this);
    this.onGoogleError = this.onGoogleError.bind(this);
    this.onGoogleRegistration = this.onGoogleRegistration.bind(this);

  }

  componentDidMount() {
  }

  onRegisterClick(event) {
    let push = PushNotification.init(
      {
        android: {
          senderID : Meteor.settings.public.fcm.senderId
        }
      }
    );
    push.on('registration', this.onGoogleRegistration);
    push.on('error', this.onGoogleError);
    push.on('notification', this.onGoogleNotification);
  }

  onGoogleRegistration(registration) {
      Meteor.call('registrations.add', registration);
      this.state.registration = registration;
      this.setState(this.state);
  }

  onGoogleNotification(data) {
      this.state.messages.push(data);
      this.setState(this.state);
  }

  onGoogleError(error) {
    console.log(error);
  }

  onRemoveClick(index) {
    let state = this.state;
    this.state.messages.splice(index, 1);
    this.setState(this.state);
  }

  render() {
    return (<MobileHome onRegisterClick={this.onRegisterClick} senderId={Meteor.settings.public.fcm.senderId} registration={this.state.registration} onRemoveClick={this.onRemoveClick} messages={this.state.messages}/>);
  }
}
