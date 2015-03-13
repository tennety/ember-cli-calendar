import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["ember-calendar-day"],
  classNameBindings: ["isDayActive::ember-calendar-week-day"]
});
