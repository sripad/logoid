import { Message } from './message';

export class ConsoleMessage implements Message {
  severity: string;
  message: string;
  timestamp: string;

  constructor(severity: string, messages: any[]) {
    this.severity = severity;
    // ['debug', 'info', 'warn', 'error', 'log']
    this.message = JSON.stringify(messages);
    this.timestamp = new Date().toISOString();
  }

}
