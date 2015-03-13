import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["ember-calendar-head-date"],
  classNameBindings: ["isDayActive::ember-calendar-head-week-date"]
});
