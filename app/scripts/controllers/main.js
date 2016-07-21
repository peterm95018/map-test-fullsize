'use strict';

/**
 * @ngdoc function
 * @name mapFullsizeAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapFullsizeAngularApp
 */
angular.module('mapFullsizeAngularApp')
  .controller('MainCtrl', ['$scope', 'leafletData', function($scope, leafletData) {


  	angular.extend($scope, {
		center: {
			lat: 36.9956739, /* 36.9956739, -122.0589681 /* 36.9914, -122.0609 */
			lng: -122.0589681,
			zoom: 15
  		},
  		defaults: {
			scrollWheelZoom: false,
			zoomControlPosition: 'topright'
  		},
      markers: {
        markers: {
          lat: 36.9956739,
          lng: -122.0589681,
          message: 'McHenry Library',
          draggable: false,
          focus: true
        }
      }

  	});


angular.extend($scope, {
  paths: {
    p1: {
      type: 'circleMarker',
      color: 'red',
      radius: 40,
      //latlngs: [36.9956739, -122.0589681]
      latlngs: [$scope.markers.markers.lat, $scope.markers.markers.lng]
    }
  }
});


    
  }]);
