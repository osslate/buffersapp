/*
    Buffers IRC Client
    Copyright (c) 2014 Fionn Kelleher. All rights reserved.
    Licensed under the BSD 2-Clause License (FreeBSD) - see LICENSE.md.
*/

Buffers.factory("Network", function(ServersManager) {
    var Network = function(config) {
        this.title = config.title;
        this.channels = config.channels || [];
        this.queries = config.queries || [];
        this.connection = new ServersManager(config.servers);
        this.messageStream = new MessageStream();
        
        /*this.connection.socket.pipe(this.messageStream);
        this.messageStream.on("data", function(msg) {
            console.log(msg);
        })*/
    };
    
    return function(config) {
        return new Network(config);
    };
});