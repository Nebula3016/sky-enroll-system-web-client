<template>
  <div class="permission-view global-view">权限管理</div>
</template>

<script setup lang="ts">
/**
 * @name PermissionView
 * @description 权限管理视图组件
 * @author Nebula星宇
 * @version 0.0.0
 * @since 2025-06-22
 */

defineOptions({
  name: 'PermissionView',
});

import usePermissionViewHook from './hook/index.hook.ts';

const {} = usePermissionViewHook();
</script>

<style lang="scss" scoped>
@use './style/index.scss' as *;
</style>
