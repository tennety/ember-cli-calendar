import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Calendar', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /calendar', function() {
  visit('/calendar');
  andThen(function() {
    var dayNames = find('.weekday .name');
    equal(dayNames.length, 7);
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].forEach(function(name, idx) {
      equal(dayNames[idx].innerHTML, name);
    });
  });
});
