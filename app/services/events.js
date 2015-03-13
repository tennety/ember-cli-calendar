import Ember from "ember";
/* global moment */

export default Ember.Service.extend({
  duration: function() {
    return Math.floor(Math.random() * 60 * 2);
  },

  date: function(start) {
    var numDays = Math.floor(Math.random() * 5) + 1,
        numMinutes = Math.floor(Math.random() * 60 * 12) + 5,
        addOrSubtract = Math.random() < 0.5 ? "add" : "subtract";
    return start.clone()[addOrSubtract](numDays, 'days')[addOrSubtract](numMinutes, 'minutes');
  },

  events: function() {
    var events = [],
        count = Math.floor(Math.random() * 10) + 1,
        i;
    for(i = 0; i < count; i++) {
      events.pushObject(
        Ember.Object.create({
        name: "Event " + i,
        date: this.date(moment()),
        duration: this.duration()
      })
      );
    }
    return events;
  }
});
