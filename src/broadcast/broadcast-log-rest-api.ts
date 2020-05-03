import { Message, LogLevel } from "../types";
import { BroadcastLog, BroadcastWatchOption } from "./broadcast-log";
import { HttpRequest, HttpClient } from "../utils/http-client";

export type BroadcastRestApiOption = {
  httpRequest: HttpRequest;
  watch: LogLevel[];
};

export class BroadcastLogRestApi extends BroadcastLog {
  constructor(public option: BroadcastRestApiOption) {
    super();
  }

  public log(logLevel: LogLevel, messages: Message | Message[]): void {
    if (this.isWatchable(logLevel, this.option.watch)) {
      const request: HttpRequest = {
        url: this.option.httpRequest.url,
        method: this.option.httpRequest.method,
        payload: JSON.stringify(messages)
      };
      const httpClient = new HttpClient();
      httpClient.send(request);
    }
  }
}
