import type { Pinia, PiniaPlugin, PiniaPluginContext } from 'pinia';

declare global {
  namespace IPiniaTypes {
    export type { Pinia, PiniaPlugin, PiniaPluginContext };
  }
}

export {};
