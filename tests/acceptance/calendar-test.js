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
    var dayNames = find('.ember-calendar-head-date .name');
    equal(dayNames.length, 7);
  });
});
