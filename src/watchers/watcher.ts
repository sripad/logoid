import { BroadcastLog } from "../broadcast";

export interface Watcher {
  setBroadcasts(broadcasts: BroadcastLog[]): void;

  install(): void;

  uninstall(): void;
}
