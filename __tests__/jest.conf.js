'use strict';

var to5 = require('babel');

module.exports = {
  process: function(src, path) {
    if (path.indexOf('node_modules') === -1) {
      src = to5.transform(src, {
        modules: 'common'
      }).code;
    }
    return src;
  }
};
