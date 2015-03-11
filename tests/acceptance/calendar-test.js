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

test('shows weekday names', function() {
  visit('/calendar');
  andThen(function() {
    var dayNames = find('.ember-calendar-head-date .name');
    equal(dayNames.length, 7);
  });
});

test('shows hours in the day', function() {
  visit('/calendar');
  andThen(function() {
    var dayNames = find('.ember-calendar-head-time .name');
    equal(dayNames.length, 24);
  });
});
