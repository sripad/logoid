"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const broadcast_log_1 = require("./broadcast-log");
class BroadcastLogRestApi extends broadcast_log_1.BroadcastLog {
    constructor(option) {
        super();
        this.option = option;
    }
    log(logLevel, messages) {
        if (this.isWatchable(logLevel, this.option.watch)) {
            this.option.httpBroadCast({
                url: this.option.httpRequest.url,
                method: this.option.httpRequest.method,
                payload: JSON.stringify(messages)
            });
        }
    }
}
exports.BroadcastLogRestApi = BroadcastLogRestApi;
