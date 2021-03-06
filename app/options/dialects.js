var _ = require('lodash');

module.exports = {
  get: function(dialectFlag) {
    if ( this[dialectFlag] ) {
      return this[dialectFlag];
    } else {
      var warning = { warning: "Warning: Don't recognize dialect: "
                                + dialectFlag + ", generate coffee-script instead." };
      return _.merge(this.coffee, warning);
    }
  },

  ls: {
    name: 'LiveScript',
    suffix: '.ls'
  },

  js: {
    name: 'JavaScript',
    suffix: '.js'
  },

  "6to5": { // object property name constraints
    name: 'JavaScript-6to5',
    suffix:'.js'
  },

  coffee: {
    name: 'coffee-script',
    suffix:'.coffee'
  }
}
