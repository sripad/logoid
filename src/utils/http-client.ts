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
