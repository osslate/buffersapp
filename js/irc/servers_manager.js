/*
    Buffers IRC Client
    Copyright (c) 2014 Fionn Kelleher. All rights reserved.
    Licensed under the BSD 2-Clause License (FreeBSD) - see LICENSE.md.
*/

var MessageStream = require("irc-message-stream");

Buffers.factory("ServersManager", function(Connection) {
    var ServersManager = function(config) {
        this.socket = new Connection({
            host: "irc.freenode.net",
            port: 6667
        }, function() {
            console.log("YES BOBBY");
        });
        this.messageStream = new MessageStream();
    };
    
    //ServersManager.prototype.
    
    // TODO: possible jump server method.
    ServersManager.prototype.jumpServer = function() {};

    return function(config) {
        return new ServersManager(config);
    };
});