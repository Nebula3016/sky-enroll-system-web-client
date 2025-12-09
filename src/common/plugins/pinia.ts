import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export function usePiniaPluginPersistedstate(stores: IPiniaTypes.Pinia): void {
  stores.use(piniaPluginPersistedstate);
}
