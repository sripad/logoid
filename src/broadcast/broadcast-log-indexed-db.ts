import { Message, LogLevel } from "../types";
import { BroadcastLog } from "./broadcast-log";

export type BroadcastIndexedDbOption = {
  watch: LogLevel[];
};

export class BroadcastLogIndexedDb extends BroadcastLog {
  constructor(public option: BroadcastIndexedDbOption) {
    super();
  }

  public log(logLevel: LogLevel, messages: Message | Message[]): void {
    if (this.isWatchable(logLevel, this.option.watch)) {
      // tslint:disable-next-line: no-console
      console.log(messages);
    }
  }
}
