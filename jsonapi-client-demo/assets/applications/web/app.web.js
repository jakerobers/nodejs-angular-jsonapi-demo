'use strict';

angular.module('app.dashboard', ['ngPrettyJson']);
angular.module('app.config', []);
angular.module('app.models', []);

angular.module('app', ['ngRoute', 'ngResource', 'ngMessages', 'ngWebSocket', 'app.dashboard'])


.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
