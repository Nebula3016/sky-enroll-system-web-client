import bootstrap from './bootstrap.ts';

(async () => {
  await bootstrap().then(({ registerPiniaApply, registerRouterApply, registerElementPlusApply, mountApply }) => {
    registerPiniaApply();
    registerRouterApply();
    registerElementPlusApply();
    mountApply();
  });
})();
