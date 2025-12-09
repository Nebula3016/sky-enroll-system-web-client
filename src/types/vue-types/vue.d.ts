import type { App, Component } from 'vue';

declare global {
  namespace IVueTypes {
    export type { App, Component };
  }
}

export {};
