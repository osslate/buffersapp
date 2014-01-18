/*
    Buffers IRC Client
    Copyright (c) 2013 Fionn Kelleher. All rights reserved.
    Licensed under the BSD 2-Clause License (FreeBSD) - see LICENSE.md.
*/

var moment = require("moment"),
    fs = require("fs");
    
var Buffers = angular.module("Buffers", []);

Buffers.controller("BuffersController", ["$scope", function($scope) {
    // update time at the right of the input box.
    $scope.currentTime = moment().format("HH:mm");
    setInterval(function() {
        $scope.currentTime = moment().format("HH:mm");
        $scope.$apply();
    }, 1000);
}]);
