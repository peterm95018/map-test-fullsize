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
			zoom: 18
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




var defaultMarker = L.Marker();

var mouseoverMarker = L.Marker();

var layers = {};

$scope.hoveritem = {};

function pointMouseover(leafletEvent) {
    var layer = leafletEvent.target;
    layer.setIcon(mouseoverMarker);
    $scope.$apply(function () {
        $scope.hoveritem = layer.feature.properties.id;
    })
}

function pointMouseout(leafletEvent) {
    var layer = leafletEvent.target;
    layer.setIcon(defaultMarker);

    $scope.$apply(function () {
        $scope.hoveritem = {};
    })
}

$scope.menuMouse = function (show) {
    var layer = layers[show.properties.id];
    //console.log(layer);
    layer.setIcon(mouseoverMarker);
}

$scope.menuMouseout = function (show) {
    var layer = layers[show.properties.id];
    layer.setIcon(defaultMarker);
}

// Get the countries geojson data from a JSON
$http.get('json/McH.geojson').success(function (data, status) {
    angular.extend($scope, {
        geojson: {
            data: data,
            onEachFeature: function (feature, layer) {
                layer.setIcon(defaultMarker);
                layer.on({
                    mouseover: pointMouseover,
                    mouseout: pointMouseout
                });
                layers[feature.properties.id] = layer;
                //console.log(layers);
            }
        }

    });
});

// // Get the countries geojson data from a JSON
// $http.get("json/McH.geojson").success(function(data, status) {
//     angular.extend($scope, {
//         geojson: {
//             data: data,
//             onEachFeature: function (feature, layer) {
//                 layer.setIcon(defaultMarker);
//                 layer.on({
//                     mouseover: pointMouseover,
//                     mouseout: pointMouseout
//                 });
//                 layers[feature.properties.id] = layer;
//                 //console.log(layers);
//             }
//             // style: {
//             //     fillColor: "green",
//             //     weight: 2,
//             //     opacity: 1,
//             //     color: 'white',
//             //     dashArray: '3',
//             //     fillOpacity: 0.7,
//             //     message: 'McHenry Library',
//             //     draggable: false,
//             //     focus: true
//             // }
//         }
//     });
// });


  }]);