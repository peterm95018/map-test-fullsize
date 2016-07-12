'use strict';

/**
 * @ngdoc function
 * @name mapFullsizeAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapFullsizeAngularApp
 */
angular.module('mapFullsizeAngularApp')
  .controller('MainCtrl', ['$scope',  function () {
  	angular.extend($scope, {
		center: {
			lat: 36.9914,
			lng: -122.0609,
			zoom: 15
  		},
  		defaults: {
			scrollWheelZoom: false,
			zoomControlPosition: 'topright'
  		}
    
  }]);
