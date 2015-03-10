import Ember from "ember";

export default Ember.Controller.extend({
  weekdays: function() {
    return ([
      {name: "Sunday"},
      {name: "Monday"},
      {name: "Tuesday"},
      {name: "Wednesday"},
      {name: "Thursday"},
      {name: "Friday"},
      {name: "Saturday"}
    ]);
  }.property()
});
