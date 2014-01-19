/*
    Buffers IRC Client
    Copyright (c) 2013 Fionn Kelleher. All rights reserved.
    Licensed under the BSD 2-Clause License (FreeBSD) - see LICENSE.md.
*/

var moment = require("moment");
    
var Buffers = angular.module("Buffers", []);

Buffers.service("LogCopy", function($window) {
    this.reformat = function(data) {
        var selection = $window.getSelection();
        
    };
});

Buffers.controller("BuffersController", function($scope, Network, ConfigManager) {
    // update time at the right of the input box.
    $scope.currentTime = moment().format("HH:mm");
    setInterval(function() {
        $scope.currentTime = moment().format("HH:mm");
        $scope.$apply();
    }, 1000);
    $scope.networks = [];
    var networks = ConfigManager.get("networks");
    for (var i = 0; i < networks.length; i++) {
        var network = Network(networks[i]);
        $scope.networks.push(network);
    }
    $scope.$apply()
    
});
