import https from "https";
import { URL, URLSearchParams } from "url";

export type HttpRequest = {
  /**
   * API URL
   */
  url: string;

  /**
   * HTTP Method
   * GET, POST, PUT, DELETE
   */
  method: string;

  /**
   * Data to be included as querystring parameters.
   */
  queryParams?: { [name: string]: string };

  /**
   * Data payload to be transmitted.
   */
  payload?: string;
};

export class HttpClient {
  public send(httpRequest: HttpRequest) {
    const url = new URL(httpRequest.url);

    if (httpRequest.queryParams) {
      url.search = new URLSearchParams(httpRequest.queryParams).toString();
    }

    const req = https.request(
      {
        method: httpRequest.method,
        hostname: url.hostname,
        port: url.port,
        path: `${url.pathname}${url.search}`
      } as https.RequestOptions,
      resp => null
    );

    if (httpRequest.method !== "GET" && httpRequest.payload) {
      const body = JSON.stringify(httpRequest.payload);
      req.setHeader("Content-Type", "application/json");
      req.write(body);
    }

    req.on("error", this.captureFault);

    req.end();
  }

  private captureFault(fault: any) {
    console.error(fault);
  }
}
