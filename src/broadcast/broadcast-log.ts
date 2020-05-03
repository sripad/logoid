import { Message, LogLevel } from "../types";

export type BroadcastWatchOption = {
    watch: ["log", "debug", "info", "warn", "error"]
};

export abstract class BroadcastLog {

    abstract log(logLevel: LogLevel, message: Message): void;

    isWatchable(logLevel: LogLevel, allowedLogLevels: LogLevel[]): boolean {
        return allowedLogLevels.includes(logLevel);
    }
}