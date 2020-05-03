import { Watcher } from "./watcher";
import { ConsoleMessage, LogLevel } from "../types";
import { intercept, unintercept, isError } from "../utils";
import { BroadcastLog } from "../broadcast/broadcast-log";

const CONSOLE_FUNCTION_NAMES : string[] = ["debug", "info", "warn", "error", "log"];

class ConsoleWatcher implements Watcher {
  private broadcasts: BroadcastLog[] = [];

  public setBroadcasts(broadcasts: BroadcastLog[]) {
    this.broadcasts = broadcasts;
  }

  /**
   * @param _console {object} override of the global console object.
   */
  public install(_console?: object): void {
    const consoleObj = _console || console;
    const that = this;
    CONSOLE_FUNCTION_NAMES.forEach(name => {
      intercept(consoleObj, name, (originalFn: Function) => {
        return (...messages: any) => {
          const data = new ConsoleMessage(name, messages);
          for (const broadcast of that.broadcasts) {
            broadcast.log(name as LogLevel, data);
          }
          return originalFn.apply(consoleObj, arguments);
        };
      });
    });
  }

  /**
   * @inheritdoc
   * @param _console {object} override of the global console object.
   */
  public uninstall(_console?: object): void {
    const consoleObj = _console || console;
    CONSOLE_FUNCTION_NAMES.forEach(name => unintercept(consoleObj, name));
  }
}

/**
 * Watches the global Console for logs.
 * Singleton.
 */
export const consoleWatcher = new ConsoleWatcher() as Watcher;