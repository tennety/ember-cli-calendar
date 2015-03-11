import Ember from "ember";

var CalendarComponent = Ember.Component.extend({
  classNames: ["ember-calendar"],

  weekdays: function() {
    var self = this;
    return [0,1,2,3,4,5,6].map(function(num) {
      return self.get('startDate').clone().add(num, 'days');
    });
  }.property('startDate'),

  hours: function() {
    var hours = [],
        self = this,
        i;
    for (i = 0; i < 24; i++) {
      hours.pushObject(self.get('startDate').clone().add(i, 'hours'));
    }
    return hours;
  }.property(),

  actions: {
    previous: function() {
      this.set('startDate', this.get('startDate').clone().subtract(1, 'week'));
    },

    next: function() {
      this.set('startDate', this.get('startDate').clone().add(1, 'week'));
    }
  }
});

export default CalendarComponent;
