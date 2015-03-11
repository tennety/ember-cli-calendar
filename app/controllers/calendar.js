import Ember from "ember";
/* global moment */

export default Ember.Controller.extend({
  startDate: null,

  _setup: function() {
    this.set('startDate', moment().startOf('week'));
  }.on('init')
});
