import { VueTools, PiniaTools } from '@/utils';
import { getCurrentUserInfoApi } from '@/services';
import { SYSTEM_STORE_KEY } from '@/common';

const { ref } = VueTools;
const { defineStore } = PiniaTools;

const useUserStore = defineStore(
  SYSTEM_STORE_KEY.USER_KEY,
  () => {
    const userInfo = ref<IUserTypes.UserInfo | null>(null);
    const userToken = ref<string | undefined>(undefined);

    /**
     * 设置用户信息
     * @param info 用户信息
     */
    async function setUserInfo(info?: IUserTypes.UserInfo): Promise<void> {
      if (info === undefined) {
        const { data = {} } = await getCurrentUserInfoApi();
        userInfo.value = data;
        return void 0;
      }
      userInfo.value = info;
      return void 0;
    }

    /**
     * 设置用户token
     * @param token 用户token
     */
    async function setUserToken(token?: string): Promise<void> {
      if (token === undefined) {
        return void 0;
      }
      userToken.value = token;
      return void 0;
    }

    /**
     * 清空用户存储所用对象数据
     */
    function clearUserStore() {
      userInfo.value = null;
      userToken.value = undefined;
    }

    return {
      userInfo,
      userToken,
      setUserInfo,
      setUserToken,
      clearUserStore,
    };
  },
  {
    persist: {
      key: SYSTEM_STORE_KEY.USER_KEY,
      storage: window.sessionStorage,
      pick: ['userInfo', 'userToken'],
    },
  },
);

export default useUserStore;
