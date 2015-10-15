'use strict';

var imba = require('imba/compiler');

exports.name = 'imba';
exports.outputFormat = 'js';

exports.render = function (str, options) {
  return imba.compile(str, options).toString();
};
