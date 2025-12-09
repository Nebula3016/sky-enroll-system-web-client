import { PiniaTools, VueTools } from '@/utils';
import { SYSTEM_STORE_KEY } from '@/common';
import dynamicRoutes from '@/router/modules/dynamic-routing';

const { ref } = VueTools;
const { defineStore } = PiniaTools;

/**
 * @description 系统菜单状态管理
 */
const useMenuStore = defineStore(
  SYSTEM_STORE_KEY.MENU_KEY,
  () => ({
    /** 菜单列表 */
    menuList: ref<IRouterTypes.RouteRecordRaw[]>(dynamicRoutes),
  }),
  {
    persist: {
      key: SYSTEM_STORE_KEY.MENU_KEY,
      storage: window.sessionStorage,
      pick: ['menuList'],
    },
  },
);

export default useMenuStore;
