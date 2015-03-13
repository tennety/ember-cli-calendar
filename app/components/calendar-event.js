import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["ember-calendar-event"],
  attributeBindings: ["eventPosition:style"],

  eventPosition: function() {
    var startTime, top, height;

    startTime = this.get('event.date');
    top = startTime.diff(startTime.clone().startOf('day')) * 100 / ( 1000 * 60 * 60 * 24 ); 
    height = this.get('event.duration') * 100 / ( 60 * 24 );

    return "top: " + top + "%; height: " + height + "%";
  }.property('event.date', 'event.duration'),

  endTime: function() {
    return this.get('event.date').clone().add(this.get('event.duration'), 'minutes');
  }.property('event.date', 'event.duration'),
});
