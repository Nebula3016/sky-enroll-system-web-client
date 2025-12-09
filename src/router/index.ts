import { VueRouterTools } from '@/utils';
import { globalAdvanceGuard } from './guards/forwardGuard';
import { globalPostHook } from './guards/posthook';
import { getHistoryMode } from './router.helper';
import globalParsingGuard from './guards/globalParsingGuard';
import routes from './routes';

const { createRouter } = VueRouterTools;

const router = createRouter({
  history: getHistoryMode(import.meta.env.VITE_ROUTER_HISTORY),
  routes,
});

router.beforeEach(globalAdvanceGuard);
router.beforeResolve(globalParsingGuard);
router.afterEach(globalPostHook);

export function useRegisterRouter(app: IVueTypes.App<Element>): void {
  app.use(router);
}

export default router;
