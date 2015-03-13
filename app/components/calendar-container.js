import Ember from "ember";
/* global moment */

export default Ember.Component.extend({
  classNames: ["ember-calendar"],
  interval: 7,

  dates: function() {
    var dates = [],
        i;
    for (i = 0; i < this.get('interval'); i++) {
      dates.pushObject(this.get('startDate').clone().add(i, 'days'));
    }
    return dates;
  }.property('interval', 'startDate'),

  hours: function() {
    var hours = [this.get('startDate').clone()],
        i;
    for (i = 1; i < 24; i++) {
      hours.pushObject(this.get('startDate').utc().startOf('day').clone().add(i, 'hours'));
    }
    return hours;
  }.property(),

  schedule: function() {
    var days = [],
        self = this,
        eventsForDay;

    this.get('dates').forEach(function(date, idx) {
      eventsForDay = self.get('events').filter(function(event) {
        return event.get('date').clone().startOf('day').isSame(date.clone().startOf('day'));
      });
      days[idx] = eventsForDay;
    });

    return days;
  }.property('interval', 'startDate', 'dates'),

  scrollToCurrent: function() {
    var body = this.$('.ember-calendar-body'),
        container = this.$('.ember-calendar-container'),
        dayHeight = body.height(),
        passed = moment().diff(moment().startOf('day')) / ( 1000 * 60 * 60 * 24 );
    container.scrollTop(passed * dayHeight);
  }.on('didInsertElement'),

  actions: {
    previous: function() {
      this.set('startDate', this.get('startDate').clone().subtract(1, 'week'));
    },

    next: function() {
      this.set('startDate', this.get('startDate').clone().add(1, 'week'));
    }
  }
});
