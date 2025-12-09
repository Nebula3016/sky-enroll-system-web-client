<template>
  <div class="tenant-view global-view"></div>
</template>

<script setup lang="ts">
/**
 * @name TenantView
 * @description 租户管理视图组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

defineOptions({
  name: 'TenantView',
});

import useTenantViewHook from './hook/index.hook.ts';

const {} = useTenantViewHook();
</script>

<style lang="scss" scoped>
@use './style/index.scss' as *;
</style>
