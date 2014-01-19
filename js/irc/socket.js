/*
    Buffers IRC Client
    Copyright (c) 2014 Fionn Kelleher. All rights reserved.
    Licensed under the BSD 2-Clause License (FreeBSD) - see LICENSE.md.
*/

var MessageStream = require("irc-message-stream"),
    events = require("events"),
    util = require("util"),
    net = require("net"),
    tls = require("tls");

Buffers.factory("Connection", function() {
    var Connection = function(options) {
        this.host = options.host;
        this.tls = options.tls;
        this.starttls = options.starttls;
        this.socket = null;
        this.messageStream = new MessageStream();
    };
    
    util.inherits(Connection, events.EventEmitter);
    
    Connection.prototype.connect = function() {
        if (this.tls) {
            this.socket = tls.connect(this.port, this.host, this.a);
        } else if (this.starttls) {
            this.socket = net.connect(this.port, this.host, this._handleStarttls);
        } else {
            var socket = net.connect(this.port, this.host, function() {
                
            });
        }
    };
    
    Connection.prototype._handleStarttls = function() {
        
    };
    
    return function(options) {
        return new Connection(options)
    }
});