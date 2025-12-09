import { usePiniaPluginPersistedstate } from '@/common/plugins/pinia';
import { PiniaTools, VueRouterTools, VueTools } from '@/utils';
import { SYSTEM_STORE_KEY } from '@/common';
import useUserStore from '@/stores/module/system/user.store';
import useMenuStore from '@/stores/module/system/menu.store';

const { ref } = VueTools;
const { useRoute, useRouter } = VueRouterTools;
const { createPinia, defineStore } = PiniaTools;

const stores = createPinia();
usePiniaPluginPersistedstate(stores);

export const useAppStore = defineStore(SYSTEM_STORE_KEY.APP_KEY, () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const appConfig = ref<Record<string, any>>({});
  const route = useRoute();
  const router = useRouter();

  return {
    appConfig,
    route,
    router,
  };
});

export function useRegisterStore(app: IVueTypes.App<Element>): void {
  app.use(stores);
}

export { useUserStore, useMenuStore };

export default stores;
