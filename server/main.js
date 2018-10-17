import { Meteor } from "meteor/meteor";
import { Registrations } from "/imports/model/registrations.js";
import { HTTP } from "meteor/http";

Meteor.publish('registrations', function () {
  return Registrations.find();
});

Meteor.methods({
  'registrations.add'(registration) {
    Registrations.update({
      "registrationId": { $eq: registration.registrationId }
    },
      registration,
      {
        upsert: true
      }
    );
  },
  'sendMessage'(registrationId, data) {
    let response = HTTP.post('https://gcm-http.googleapis.com/gcm/send',
      {
        headers: {
          'Authorization': "key=" + Meteor.settings.fcm.key,
        },
        data: {
          to: registrationId,
          data: data
        }
      });
    console.log(response);
    if (response.data.failure > 0) {
      throw new Meteor.Error("send-message-failure", response.data.results[0].error);
    }
    if (response.data.success > 0) {
      return response.data.results[0];
    }
  }
});

