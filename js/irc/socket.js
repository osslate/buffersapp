/*
    Buffers IRC Client
    Copyright (c) 2013 Fionn Kelleher. All rights reserved.
    Licensed under the BSD 2-Clause License (FreeBSD) - see LICENSE.md.
*/

var net = require("net"),
    tls = require("tls");

exports.Socket = function(options, callback) {
    if (options.ssl) {
        return tls.connect(options.port, options.host, {
            rejectUnauthorized: options.rejectUnauthorized || true
        }, callback);
    } else {
        return net.connect(options.port, options.host, callback)
    }
}
