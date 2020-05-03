import { Message, LogLevel } from "../types";
import { BroadcastLog } from "./broadcast-log";
import { HttpRequest } from "../utils/http-client";

export type BroadcastRestApiOption = {
  httpRequest: HttpRequest;
  httpBroadCast(HttpRequest: HttpRequest): void;
  watch: LogLevel[];
};

export class BroadcastLogRestApi extends BroadcastLog {
  constructor(public option: BroadcastRestApiOption) {
    super();
  }

  public log(logLevel: LogLevel, messages: Message | Message[]): void {
    if (this.isWatchable(logLevel, this.option.watch)) {
      this.option.httpBroadCast({
        url: this.option.httpRequest.url,
        method: this.option.httpRequest.method,
        payload: JSON.stringify(messages)
      });
    }
  }
}
