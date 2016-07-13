'use strict';

/**
 * @ngdoc overview
 * @name mapFullsizeAngularApp
 * @description
 * # mapFullsizeAngularApp
 *
 * Main module of the application.
 */
angular
  .module('mapFullsizeAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui-leaflet'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/directions', {
        templateUrl: 'views/directions.html',
        controller: 'DirectionsCtrl',
        controllerAs: 'directions'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
