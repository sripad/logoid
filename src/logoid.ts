import { consoleWatcher } from "./watchers";
import {
  BroadcastRestApiOption,
  BroadcastIndexedDbOption,
  BroadcastLog,
  BroadcastLogRestApi,
  BroadcastLogIndexedDb
} from "./broadcast";

export type LogoidOption = {
  broadCastRestApi?: BroadcastRestApiOption;
  broadcastIndexedDb?: BroadcastIndexedDbOption;
};

export class Logoid {
  private broadcasts: BroadcastLog[] = [];

  public installBroadcasts(option: LogoidOption) {
    this.broadcasts = [];
    if (option.broadCastRestApi) {
      this.broadcasts.push(new BroadcastLogRestApi(option.broadCastRestApi));
    }
    if (option.broadcastIndexedDb) {
      this.broadcasts.push(
        new BroadcastLogIndexedDb(option.broadcastIndexedDb)
      );
    }
    consoleWatcher.setBroadcasts(this.broadcasts);
    consoleWatcher.install();
  }

  public unInstallBroadcasts(option: LogoidOption) {
    this.broadcasts = [];
    consoleWatcher.uninstall();
  }

  public error(message: string, error: Error, request?: any, response?: any) {
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
    } else {
      console.error(message, error);
    }
  }

  public log(message: string, data?: any) {
    console.log(message, data);
  }
}
