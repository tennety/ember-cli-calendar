import Ember from "ember";

var CalendarComponent = Ember.Component.extend({
  weekdays: function() {
    var self = this;
    return [0,1,2,3,4,5,6].map(function(num) {
      return self.get('startDate').clone().add(num, 'days');
    });
  }.property('startDate')
});

export default CalendarComponent;
