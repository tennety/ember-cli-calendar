import Ember from "ember";

export default Ember.Route.extend({
  eventsList: Ember.inject.service('events'),

  model: function() {
    return this.get('eventsList').events();
  }
});
