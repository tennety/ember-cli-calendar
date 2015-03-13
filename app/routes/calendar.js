import Ember from "ember";
/* global moment */

export default Ember.Route.extend({
  eventsList: Ember.inject.service('events'),

  model: function() {
    return this.get('eventsList').events();
  }
});
