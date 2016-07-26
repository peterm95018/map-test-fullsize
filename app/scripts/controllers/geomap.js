'use strict';

/**
 * @ngdoc function
 * @name mapFullsizeAngularApp.controller:GeomapCtrl
 * @description
 * # GeomapCtrl
 * Controller of the mapFullsizeAngularApp
 */
angular.module('mapFullsizeAngularApp')
  .controller('GeomapCtrl', ['$scope', '$http', function ($scope, $http) {
    angular.extend($scope, {
		center: {
			lat: 36.9956739, /* 36.9956739, -122.0589681 /* 36.9914, -122.0609 */
			lng: -122.0589681,
			zoom: 16
  		},
  		defaults: {
			scrollWheelZoom: false,
			zoomControlPosition: 'topright'
  		}
  		// ,
    //   markers: {
    //     markers: {
    //       lat: 36.9956739,
    //       lng: -122.0589681,
    //       message: 'McHenry Library',
    //       draggable: false,
    //       focus: true
    //     }
    // }

  	});


// Get the countries geojson data from a JSON
$http.get("json/McH.geojson").success(function(data, status) {
    angular.extend($scope, {
        geojson: {
            data: data,
            onEachFeature: function (feature, layer) {
                // popup the feature name on click
                if(feature.properties.name) {
                    layer.bindPopup(feature.properties.name);
                }
            },
            style: {
                fillColor: "red",
                weight: 4,
                opacity: 1,
                color: '#f03',
                dashArray: '8',
                fillOpacity: 0.5
            }
        }
    });
});


  }]);