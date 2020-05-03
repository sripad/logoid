"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const watchers_1 = require("./watchers");
const broadcast_1 = require("./broadcast");
class Logoid {
    constructor() {
        this.broadcasts = [];
    }
    installBroadcasts(option) {
        this.broadcasts = [];
        if (option.broadCastRestApi) {
            this.broadcasts.push(new broadcast_1.BroadcastLogRestApi(option.broadCastRestApi));
        }
        if (option.broadcastIndexedDb) {
            this.broadcasts.push(new broadcast_1.BroadcastLogIndexedDb(option.broadcastIndexedDb));
        }
        watchers_1.consoleWatcher.setBroadcasts(this.broadcasts);
        watchers_1.consoleWatcher.install();
    }
    unInstallBroadcasts(option) {
        this.broadcasts = [];
        watchers_1.consoleWatcher.uninstall();
    }
    error(message, error, request, response) {
        if (error.name && error.hasOwnProperty("message")) {
            console.error(`${message}`);
            console.error(`Error Message: ${error.message}`);
            console.error(`StackTrace: ${error.stack}`);
            if (request) {
                console.error(`Request`, request);
            }
            if (response) {
                console.error(`Request`, response);
            }
        }
        else {
            console.error(message, error);
        }
    }
    info(message, data) {
        console.log(message, data);
    }
}
exports.Logoid = Logoid;
