"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const broadcast_log_1 = require("./broadcast-log");
class BroadcastLogIndexedDb extends broadcast_log_1.BroadcastLog {
    constructor(option) {
        super();
        this.option = option;
    }
    log(logLevel, messages) {
        if (this.isWatchable(logLevel, this.option.watch)) {
            // tslint:disable-next-line: no-console
            console.log(messages);
        }
    }
}
exports.BroadcastLogIndexedDb = BroadcastLogIndexedDb;
