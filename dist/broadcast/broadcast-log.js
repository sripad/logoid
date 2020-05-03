"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BroadcastLog {
    isWatchable(logLevel, allowedLogLevels) {
        return allowedLogLevels.includes(logLevel);
    }
}
exports.BroadcastLog = BroadcastLog;
