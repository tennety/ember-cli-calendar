import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(date, formatString) {
  return date.format(formatString);
});
