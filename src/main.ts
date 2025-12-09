import bootstrap from './bootstrap.ts';

const { registerPiniaApply, registerRouterApply, registerElementPlusApply, mountApply } = bootstrap();

registerPiniaApply();

registerRouterApply();

registerElementPlusApply();

mountApply();
