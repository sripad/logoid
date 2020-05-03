"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const utils_1 = require("../utils");
const CONSOLE_FUNCTION_NAMES = ["debug", "info", "warn", "error", "log"];
class ConsoleWatcher {
    constructor() {
        this.broadcasts = [];
    }
    setBroadcasts(broadcasts) {
        this.broadcasts = broadcasts;
    }
    /**
     * @param _console {object} override of the global console object.
     */
    install(_console) {
        const consoleObj = _console || console;
        const that = this;
        CONSOLE_FUNCTION_NAMES.forEach(name => {
            utils_1.intercept(consoleObj, name, (originalFn) => {
                return (...messages) => {
                    const data = new types_1.ConsoleMessage(name, messages);
                    for (const broadcast of that.broadcasts) {
                        broadcast.log(name, data);
                    }
                    return originalFn.apply(consoleObj, messages);
                };
            });
        });
    }
    /**
     * @inheritdoc
     * @param _console {object} override of the global console object.
     */
    uninstall(_console) {
        const consoleObj = _console || console;
        CONSOLE_FUNCTION_NAMES.forEach(name => utils_1.unintercept(consoleObj, name));
    }
}
/**
 * Watches the global Console for logs.
 * Singleton.
 */
exports.consoleWatcher = new ConsoleWatcher();
