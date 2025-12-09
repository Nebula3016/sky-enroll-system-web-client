import './assets/icons/iconfont.css';
import './assets/scripts/adaptive.ts';
import './assets/styles/css/main.css';
import './assets/styles/scss/global-index.scss';
import { useRegisterElementPlus } from './common/plugins/el-element.ts';
import { useRegisterRouter } from './router';
import App from './screens/App.vue';
import { useRegisterStore } from './stores';
import { VueTools } from './utils';

const { createApp } = VueTools;

/**
 * @function bootstrap
 * @description 入口辅助函数（统一配置）
 */
export default async function () {
  const app: IVueTypes.App<Element> = createVueApply();

  /**
   * @description 创建Vue应用实例
   */
  function createVueApply(): IVueTypes.App<Element> {
    return createApp(App);
  }

  /**
   * @description 注册 Pinia 状态管理
   */
  function registerPiniaApply(): void {
    useRegisterStore(app);
  }

  /**
   * @description 注册路由应用
   */
  function registerRouterApply(): void {
    useRegisterRouter(app);
  }

  /**
   * @description 注册 ElementPlus 应用
   */
  function registerElementPlusApply(): void {
    useRegisterElementPlus(app);
  }

  /**
   * @description 挂载App应用实例
   */
  function mountApply(): void {
    app.mount('#app');
  }

  return {
    app,
    createVueApply,
    registerPiniaApply,
    registerRouterApply,
    registerElementPlusApply,
    mountApply,
  };
}
