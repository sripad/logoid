"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleMessage {
    constructor(severity, messages) {
        this.severity = severity;
        // ['debug', 'info', 'warn', 'error', 'log']
        this.message = JSON.stringify(messages);
        this.timestamp = new Date().toISOString();
    }
}
exports.ConsoleMessage = ConsoleMessage;
