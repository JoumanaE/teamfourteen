'use strict';

var angular = require('angular');

require('./login');

module.exports = angular.module('pimpam', [
  'pimpam.login'
]);
