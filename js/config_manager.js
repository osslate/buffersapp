/*
    Buffers IRC Client
    Copyright (c) 2014 Fionn Kelleher. All rights reserved.
    Licensed under the BSD 2-Clause License (FreeBSD) - see LICENSE.md.
*/

var fs = require("fs");

Buffers.service("ConfigManager", function() {
    this.config = {};
    this.configDir = process.env["HOME"] + "/.buffers";
    this.configFile = this.configDir + "/config.json";
    this.update = function() {
        var config = fs.readFileSync(this.configFile, "ascii");
        this.config = JSON.parse(config);
    };
    this.get = function(key) {
        return this.config[key];
    };
    this.update();
});