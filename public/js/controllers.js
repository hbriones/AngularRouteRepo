'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('HomeCtrl', function ($scope) {
    // write Ctrl here
    //$scope.variablename = "showthis"

  }).
  controller('QuizCtrl', function ($scope) {
    // write Ctrl here
  }).
  controller('DeveloperCtrl', function ($scope) {
    // write Ctrl here
  });
